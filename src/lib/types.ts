export interface ShareholderNode {
  name: string;
  type: "Marque" | "Société mère" | "Holding" | "Famille" | "Fonds";
  country?: string;
  percentage?: number;
  source_name?: string;
  source_year?: number;
  children?: ShareholderNode[];
}

export interface ProductFact {
  text: string;
  source_name: string;
  source_year: number;
  source_url?: string;
}

export interface ProductSection {
  facts: ProductFact[];
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  country: string;
  category_slug: string;
  thumbnail_url?: string;
  barcode?: string;
  is_ecological: boolean;
  is_made_in_france: boolean;
  is_fair_trade: boolean;
  is_independent: boolean;
  similar_product_ids: string[];
  sections: {
    actionnariat: ShareholderNode;
    politique: ProductSection;
    ecologie: ProductSection;
    fabrication: ProductSection;
    conditions_travail: ProductSection;
    scandales: ProductSection;
  };
}

export interface HistoryEntry {
  product_id: string;
  timestamp: number;
}

export const CATEGORY_LABEL: Record<string, string> = {
  alimentation: "Alimentation",
  boissons: "Boissons",
  "hygiene-soins": "Hygiène & Soins",
  cosmetiques: "Cosmétiques",
  "entretien-maison": "Entretien maison",
  "mode-textile": "Mode & Textile",
};
