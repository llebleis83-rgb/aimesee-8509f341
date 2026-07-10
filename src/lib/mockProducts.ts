import type { Product } from "./types";
import { getBrandById } from "./mockBrands";

export const mockProducts: Product[] = [
  {
    id: "nutella",
    name: "Nutella",
    brand_id: "ferrero",
    country: "Italie",
    category_slug: "alimentation",
    barcode: "8000500310427",
    thumbnail_url: "https://images.openfoodfacts.org/images/products/301/762/042/2003/front_fr.400.jpg",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: true,
    similar_product_ids: ["nocciolata-bio", "ethiquable", "jean-herve", "kaoka-noisette"],
    sections: {
      ecologie: {
        facts: [
          { text: "Contient 57% d'huile de palme. La production est liée à la déforestation en Indonésie et Malaisie — 2,3M d'hectares de forêts perdus entre 2000 et 2022.", source_name: "WWF · Rapport forêts", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "Produit principalement en Italie (Cuneo, Piémont) et en Allemagne. Les noisettes proviennent à 70% de Turquie. Aucun site de production en France.", source_name: "Open Food Facts", source_year: 2024 },
        ],
      },
    },
  },
  {
    id: "evian",
    name: "Evian",
    brand_id: "danone",
    country: "France",
    category_slug: "boissons",
    barcode: "3068320123288",
    thumbnail_url: "https://images.openfoodfacts.org/images/products/326/385/404/5118/front_fr.400.jpg",
    is_ecological: false,
    is_made_in_france: true,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["nutella"],
    sections: {
      ecologie: {
        facts: [
          { text: "Bouteilles 100% recyclables. Objectif Danone : 50% de plastique recyclé d'ici 2025.", source_name: "Danone Integrated Report", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "Embouteillée exclusivement à Évian-les-Bains, Haute-Savoie.", source_name: "Danone Waters", source_year: 2024 },
        ],
      },
    },
  },
  {
    id: "nike-airmax",
    name: "Nike Air Max",
    brand_id: "nike",
    country: "USA",
    category_slug: "mode-textile",
    barcode: "0194501234567",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: [],
    sections: {
      ecologie: {
        facts: [
          { text: "Programme Move to Zero. Objectif : zéro carbone et zéro déchet.", source_name: "Nike Impact Report", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "Aucune usine Nike détenue en propre. Sous-traitance dans ~500 usines partenaires au Vietnam, en Indonésie et en Chine.", source_name: "Nike Manufacturing Map", source_year: 2024 },
        ],
      },
    },
  },
  {
    id: "nocciolata-bio",
    name: "Nocciolata Bio",
    brand_id: "rigoni-di-asiago",
    country: "Italie",
    category_slug: "alimentation",
    is_ecological: true,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: true,
    similar_product_ids: ["nutella"],
    sections: {
      ecologie: { facts: [{ text: "Sans huile de palme, certifié bio.", source_name: "Rigoni di Asiago", source_year: 2023 }] },
      fabrication: { facts: [{ text: "Fabriquée en Italie.", source_name: "Rigoni di Asiago", source_year: 2023 }] },
    },
  },
  {
    id: "ethiquable",
    name: "Ethiquable Noisette",
    brand_id: "ethiquable",
    country: "France",
    category_slug: "alimentation",
    is_ecological: true,
    is_made_in_france: true,
    is_fair_trade: true,
    is_independent: true,
    similar_product_ids: ["nutella"],
    sections: {
      ecologie: { facts: [{ text: "Ingrédients biologiques, emballage recyclable.", source_name: "Ethiquable", source_year: 2024 }] },
      fabrication: { facts: [{ text: "SCOP française, fabrication en France.", source_name: "Ethiquable", source_year: 2024 }] },
    },
  },
  {
    id: "jean-herve",
    name: "Jean Hervé",
    brand_id: "jean-herve",
    country: "France",
    category_slug: "alimentation",
    is_ecological: true,
    is_made_in_france: true,
    is_fair_trade: false,
    is_independent: true,
    similar_product_ids: ["nutella"],
    sections: {
      ecologie: { facts: [] },
      fabrication: { facts: [{ text: "PME française, fabrication 100% française.", source_name: "Jean Hervé", source_year: 2024 }] },
    },
  },
  {
    id: "kaoka-noisette",
    name: "Kaoka Noisette",
    brand_id: "kaoka",
    country: "France",
    category_slug: "alimentation",
    is_ecological: true,
    is_made_in_france: true,
    is_fair_trade: true,
    is_independent: true,
    similar_product_ids: ["nutella"],
    sections: {
      ecologie: { facts: [{ text: "Cacao Fairtrade, fabrication dans la Drôme.", source_name: "Kaoka", source_year: 2024 }] },
      fabrication: { facts: [] },
    },
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    brand_id: "coca-cola-company",
    country: "USA",
    category_slug: "alimentation",
    barcode: "mock-coca-cola-001",
    thumbnail_url: "https://images.openfoodfacts.org/images/products/500/000/049/3428/front_fr.400.jpg",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["nutella", "kelloggs-corn-flakes"],
    sections: {
      ecologie: {
        facts: [
          { text: "Première marque mondiale de pollution plastique selon l'audit Break Free From Plastic, 5 années consécutives (2018–2022).", source_name: "Break Free From Plastic", source_year: 2022 },
          { text: "Objectif déclaré : 50% de plastique recyclé dans ses emballages d'ici 2030.", source_name: "Coca-Cola Sustainability Report", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "Le concentré est produit aux États-Unis et en Irlande (siège fiscal européen). La mise en bouteille est assurée localement par des embouteilleurs franchisés.", source_name: "Coca-Cola Annual Report", source_year: 2023 },
        ],
      },
    },
  },
  {
    id: "kelloggs-corn-flakes",
    name: "Kellogg's Corn Flakes",
    brand_id: "kellanova",
    country: "USA",
    category_slug: "alimentation",
    barcode: "mock-kelloggs-corn-flakes-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["nutella", "coca-cola"],
    sections: {
      ecologie: {
        facts: [
          { text: "Objectif 100% d'emballages recyclables, réutilisables ou compostables d'ici 2025 — partiellement atteint selon le rapport RSE 2023.", source_name: "Kellanova Sustainability Report", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "Produit en Europe dans des usines en Angleterre (Manchester) et en Allemagne. Blé approvisionné principalement en Europe du Nord.", source_name: "Kellanova Annual Report", source_year: 2023 },
        ],
      },
    },
  },
  {
    id: "innocent-smoothie",
    name: "Innocent Smoothie",
    brand_id: "innocent-drinks",
    country: "Royaume-Uni",
    category_slug: "boissons",
    barcode: "mock-innocent-smoothie-001",
    is_ecological: true,
    is_made_in_france: false,
    is_fair_trade: true,
    is_independent: false,
    similar_product_ids: ["evian", "san-pellegrino"],
    sections: {
      ecologie: {
        facts: [
          { text: "Bouteilles composées à 50% de plastique recyclé. Bilan carbone net zéro déclaré pour 2025. Certifié B Corp depuis 2018.", source_name: "Innocent B Corp Report", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "Fruits sourcés principalement en Espagne, Brésil et Afrique du Sud. Production centralisée aux Pays-Bas (Rotterdam).", source_name: "Innocent Annual Report", source_year: 2023 },
        ],
      },
    },
  },
  {
    id: "san-pellegrino",
    name: "San Pellegrino",
    brand_id: "nestle",
    country: "Italie",
    category_slug: "boissons",
    barcode: "mock-san-pellegrino-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["evian", "innocent-smoothie"],
    sections: {
      ecologie: {
        facts: [
          { text: "San Pellegrino est conditionné en verre (recyclable à l'infini) et en PET. Nestlé Waters a réduit ses émissions carbone de 18% entre 2018 et 2022.", source_name: "Nestlé Sustainability Report", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "Source unique : la commune de San Pellegrino Terme en Lombardie, Italie. L'eau est embouteillée directement sur place.", source_name: "San Pellegrino Brand Website", source_year: 2024 },
        ],
      },
    },
  },
  {
    id: "dove-savon",
    name: "Dove Savon",
    brand_id: "unilever",
    country: "Royaume-Uni / Pays-Bas",
    category_slug: "hygiene-soins",
    barcode: "mock-dove-savon-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["gillette-fusion"],
    sections: {
      ecologie: {
        facts: [
          { text: "Dove s'engage à utiliser 100% de plastique recyclé dans ses emballages d'ici 2025. Les barres de savon ont une empreinte carbone 20x inférieure au gel douche.", source_name: "Unilever Sustainability Report", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "Produit dans plusieurs usines européennes dont une en France (Compiègne). Ingrédients principaux sourcés mondialement (huile de palme certifiée RSPO).", source_name: "Unilever Annual Report", source_year: 2023 },
        ],
      },
    },
  },
  {
    id: "gillette-fusion",
    name: "Gillette Fusion",
    brand_id: "procter-gamble",
    country: "USA",
    category_slug: "hygiene-soins",
    barcode: "mock-gillette-fusion-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["dove-savon"],
    sections: {
      ecologie: {
        facts: [
          { text: "Les emballages Gillette sont recyclables à 90%. P&G vise la neutralité carbone sur l'ensemble de ses opérations d'ici 2040.", source_name: "P&G Sustainability Report", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "Les rasoirs Gillette sont produits principalement en Allemagne (Berlin) et au Royaume-Uni (Reading).", source_name: "P&G Annual Report", source_year: 2023 },
        ],
      },
    },
  },
  {
    id: "loreal-rouge-levres",
    name: "L'Oréal Paris Rouge à Lèvres",
    brand_id: "loreal",
    country: "France",
    category_slug: "cosmetiques",
    barcode: "mock-loreal-rouge-levres-001",
    is_ecological: false,
    is_made_in_france: true,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["nivea-creme"],
    sections: {
      ecologie: {
        facts: [
          { text: "L'Oréal s'engage à utiliser 95% d'ingrédients biosourcés, abondants ou issus de la chimie verte d'ici 2030. Certifié ISO 14001 sur l'ensemble de ses usines.", source_name: "L'Oréal For the Future Report", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "Produit en France dans l'usine de Lassigny (Oise). L'Oréal maintient 40% de sa production en France.", source_name: "L'Oréal Rapport Annuel", source_year: 2023 },
        ],
      },
    },
  },
  {
    id: "nivea-creme",
    name: "Nivea Crème",
    brand_id: "beiersdorf",
    country: "Allemagne",
    category_slug: "cosmetiques",
    barcode: "mock-nivea-creme-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["loreal-rouge-levres"],
    sections: {
      ecologie: {
        facts: [
          { text: "Nivea s'engage à utiliser 100% d'énergies renouvelables dans ses usines d'ici 2025. Le pot bleu emblématique est recyclable.", source_name: "Beiersdorf Sustainability Report", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "La Nivea Crème est produite exclusivement à Hambourg, Allemagne, depuis 1911.", source_name: "Beiersdorf Annual Report", source_year: 2023 },
        ],
      },
    },
  },
  {
    id: "ariel-lessive",
    name: "Ariel Lessive",
    brand_id: "procter-gamble",
    country: "USA",
    category_slug: "entretien-maison",
    barcode: "mock-ariel-lessive-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["fairy-liquide-vaisselle"],
    sections: {
      ecologie: {
        facts: [
          { text: "Ariel a lancé sa gamme 'Pods' concentrée pour réduire les emballages plastiques de 60%. Cependant, les pods contiennent des polymères plastiques solubles controversés.", source_name: "Which?", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "Produit dans l'usine P&G de Amiens, France. P&G maintient une production européenne significative pour réduire les coûts logistiques.", source_name: "P&G Annual Report", source_year: 2023 },
        ],
      },
    },
  },
  {
    id: "fairy-liquide-vaisselle",
    name: "Fairy Liquide Vaisselle",
    brand_id: "procter-gamble",
    country: "USA",
    category_slug: "entretien-maison",
    barcode: "mock-fairy-liquide-vaisselle-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["ariel-lessive"],
    sections: {
      ecologie: {
        facts: [
          { text: "Fairy s'engage à utiliser 50% de plastique recyclé dans ses flacons d'ici 2030. Les formules concentrées réduisent la quantité de produit nécessaire par lavage.", source_name: "P&G Sustainability Report", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "Produit dans des usines P&G en Europe, principalement en Pologne et en Allemagne.", source_name: "P&G Annual Report", source_year: 2023 },
        ],
      },
    },
  },
  {
    id: "zara-vetement",
    name: "Zara (vêtement)",
    brand_id: "inditex",
    country: "Espagne",
    category_slug: "mode-textile",
    barcode: "mock-zara-vetement-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["nike-airmax", "adidas-stan-smith"],
    sections: {
      ecologie: {
        facts: [
          { text: "Zara s'engage à utiliser 100% de coton, lin et polyester durables d'ici 2025. En 2023, seulement 37% des matières utilisées étaient certifiées durables.", source_name: "Inditex Sustainability Report", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "40% de la production Zara est réalisée en Espagne, Portugal et Maroc. 60% en Asie (Bangladesh, Vietnam, Chine).", source_name: "Inditex Annual Report", source_year: 2023 },
        ],
      },
    },
  },
  {
    id: "adidas-stan-smith",
    name: "Adidas Stan Smith",
    brand_id: "adidas",
    country: "Allemagne",
    category_slug: "mode-textile",
    barcode: "mock-adidas-stan-smith-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["nike-airmax", "zara-vetement"],
    sections: {
      ecologie: {
        facts: [
          { text: "La Stan Smith 'Mylo' est fabriquée en cuir de mycélium (champignons), sans cuir animal. En 2023, 96% du polyester utilisé par Adidas est recyclé.", source_name: "Adidas Sustainability Report", source_year: 2023 },
        ],
      },
      fabrication: {
        facts: [
          { text: "La majorité des chaussures Adidas est produite en Asie (Vietnam 42%, Indonesia 28%, Chine 17%). Aucune production en France.", source_name: "Adidas Annual Report", source_year: 2023 },
        ],
      },
    },
  },
];

export const productsById: Record<string, Product> = Object.fromEntries(
  mockProducts.map((p) => [p.id, p]),
);

export function getProductById(id: string): Product | undefined {
  return productsById[id];
}

export function getProductByBarcode(barcode: string): Product | undefined {
  return mockProducts.find((p) => p.barcode === barcode);
}

export function getProductBrandName(product: Product): string {
  return getBrandById(product.brand_id)?.name ?? "";
}

export function searchProductsByName(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return mockProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      getProductBrandName(p).toLowerCase().includes(q),
  );
}

export function getProductsByCategory(slug: string): Product[] {
  if (slug === "nourriture-boissons") {
    return mockProducts.filter(
      (p) => p.category_slug === "alimentation" || p.category_slug === "boissons",
    );
  }
  return mockProducts.filter((p) => p.category_slug === slug);
}


export function getProductsByBrandId(brandId: string): Product[] {
  return mockProducts.filter((p) => p.brand_id === brandId);
}
