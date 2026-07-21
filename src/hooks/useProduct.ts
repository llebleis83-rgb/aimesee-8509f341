const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;

const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

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

import { useState } from "react";

export function useProduct() {

  const [state, setState] = useState<ProductState>({ status: "idle" });

  async function lookup(barcode: string) {

    if (!barcode.trim()) return;

    setState({ status: "loading" });

    try {

      const res = await fetch(`${SUPABASE_URL}/functions/v1/get-product`, {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

          apikey: SUPABASE_ANON_KEY,

          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,

        },

        body: JSON.stringify({ barcode: barcode.trim() }),

      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      if (data.product) {

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
