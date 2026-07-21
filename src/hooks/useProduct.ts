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

export function useProduct() {
  const [state, setState] = useState<ProductState>({ status: "idle" });

  async function lookup(barcode: string) {
    if (!barcode.trim()) return;
    setState({ status: "loading" });

    try {
      const { data, error } = await supabase.functions.invoke("get-product", {
        body: { barcode: barcode.trim() },
      });

      if (error) throw error;

      if (data?.product) {
        setState({ status: "found", product: data.product, source: data.source });
      } else {
        setState({ status: "not_found" });
      }
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
