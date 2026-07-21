import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CACHE_DAYS = 30;

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  try {
    const { barcode } = await req.json();
    if (!barcode) return new Response(JSON.stringify({ error: "barcode requis" }), { status: 400, headers: { ...cors, "Content-Type": "application/json" } });

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // 1. Cache Supabase
    const { data: cached } = await supabase
      .from("products")
      .select("*")
      .eq("barcode", barcode)
      .single();

    if (cached) {
      const ageDays = (Date.now() - new Date(cached.last_fetched_at).getTime()) / 86400000;
      if (ageDays < CACHE_DAYS) {
        return new Response(JSON.stringify({ source: "cache", product: format(cached) }), { headers: { ...cors, "Content-Type": "application/json" } });
      }
    }

    // 2. Open Food Facts (appel serveur — pas de CORS)
    const res = await fetch(
      `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`,
      { headers: { "Accept": "application/json", "User-Agent": "aimesee/1.0 (contact@aimesee.app)" } }
    );
    const data = await res.json();

    if (data.status === 0) {
      return new Response(JSON.stringify({ source: "not_found", product: null }), { headers: { ...cors, "Content-Type": "application/json" } });
    }

    const p = data.product;
    const row = {
      barcode,
      product_name: p.product_name || p.product_name_fr || null,
      brand: p.brands || null,
      manufacturer: p.manufacturer || null,
      country_of_origin: p.countries || null,
      manufacturing_places: p.manufacturing_places || null,
      ingredients_text: p.ingredients_text || null,
      image_url: p.image_front_url || null,
      raw_off_data: p,
      last_fetched_at: new Date().toISOString(),
    };

    await supabase.from("products").upsert(row, { onConflict: "barcode" });

    return new Response(JSON.stringify({ source: "api", product: format(row) }), { headers: { ...cors, "Content-Type": "application/json" } });

  } catch (err) {
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : String(err) }), { status: 500, headers: { ...cors, "Content-Type": "application/json" } });
  }
});

function format(row: Record<string, unknown>) {
  return {
    barcode: row.barcode,
    name: row.product_name ?? null,
    brand: row.brand ?? null,
    manufacturer: row.manufacturer ?? null,
    countryOfOrigin: row.manufacturing_places ?? row.country_of_origin ?? null,
    manufacturingPlaces: row.manufacturing_places ?? null,
    ingredients: row.ingredients_text ?? null,
    imageUrl: row.image_url ?? null,
    lastUpdated: row.last_fetched_at ?? new Date().toISOString(),
  };
}
