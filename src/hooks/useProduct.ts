import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type LiveProduct = {
  barcode: string;
  name: string | null;
  brand: string | null;
  manufacturer: string | null;
  countryOfOrigin: string | null;
  manufacturingPlaces: string | null;
  ingredients: string | null;
  imageUrl: string | null;
  lastUpdated: string;
};

export type ProductState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "found"; product: LiveProduct; source: "cache" | "api" }
  | { status: "not_found" }
  | { status: "error"; message: string };

const CACHE_DAYS = 30;

export function useProduct() {
  const [state, setState] = useState<ProductState>({ status: "idle" });

  async function lookup(barcode: string) {
    if (!barcode.trim()) return;
    setState({ status: "loading" });

    try {
      // 1. Vérifier le cache Supabase
      const { data: cached } = await supabase
        .from("products")
        .select("*")
        .eq("barcode", barcode.trim())
        .single();

      if (cached) {
        const ageInDays =
          (Date.now() - new Date(cached.last_fetched_at).getTime()) /
          (1000 * 60 * 60 * 24);

        if (ageInDays < CACHE_DAYS) {
          setState({
            status: "found",
            source: "cache",
            product: formatProduct(cached),
          });
          return;
        }
      }

      // 2. Appel Open Food Facts
      const res = await fetch(
        `https://world.openfoodfacts.org/api/v2/product/${barcode.trim()}.json`,
        {
          headers: {
            "Accept": "application/json",
            "User-Agent": "aimesee/1.0 (contact@aimesee.app)",
          },
        }
      );
      const data = await res.json();

      if (data.status === 0) {
        setState({ status: "not_found" });
        return;
      }

      const p = data.product;

      const row = {
        barcode: barcode.trim(),
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

      // 3. Sauvegarder en cache
      await supabase.from("products").upsert(row, { onConflict: "barcode" });

      setState({
        status: "found",
        source: "api",
        product: formatProduct(row),
      });
    } catch (err: unknown) {
      setState({
        status: "error",
        message: err instanceof Error ? err.message : "Erreur inconnue",
      });
    }
  }

  function reset() {
    setState({ status: "idle" });
  }

  return { state, lookup, reset };
}

function formatProduct(row: Record<string, unknown>): LiveProduct {
  return {
    barcode: row.barcode as string,
    name: (row.product_name as string) ?? null,
    brand: (row.brand as string) ?? null,
    manufacturer: (row.manufacturer as string) ?? null,
    countryOfOrigin: (row.country_of_origin as string) ?? null,
    manufacturingPlaces: (row.manufacturing_places as string) ?? null,
    ingredients: (row.ingredients_text as string) ?? null,
    imageUrl: (row.image_url as string) ?? null,
    lastUpdated: (row.last_fetched_at as string) ?? new Date().toISOString(),
  };
}
