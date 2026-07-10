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
  matieres_premieres?: { facts: ProductFact[] };
  conditions_travail?: { facts: ProductFact[] };
}

export interface Brand {
  id: string;
  name: string;
  country: string;
  logo_url?: string;
  sections: {
    actionnariat: ShareholderNode;
    politique: ProductSection;
    ecologie: ProductSection;
    fabrication: ProductSection;
  };
}

export interface Product {
  id: string;
  name: string;
  country: string;
  barcode?: string;
  category_slug: string;
  thumbnail_url?: string;
  brand_id: string;
  is_ecological: boolean;
  is_made_in_france: boolean;
  is_fair_trade: boolean;
  is_independent: boolean;
  similar_product_ids: string[];
  sections: {
    ecologie: ProductSection;
    fabrication: ProductSection;
  };
}

export interface HistoryEntry {
  product_id: string;
  timestamp: number;
}

export const CATEGORY_LABEL: Record<string, string> = {
  alimentation: "Alimentation",
  boissons: "Boissons",
  "nourriture-boissons": "Nourriture & Boissons",
  "hygiene-soins": "Hygiène & Soins",
  cosmetiques: "Cosmétiques",
  "entretien-maison": "Entretien maison",
  "mode-textile": "Mode & Textile",
};

