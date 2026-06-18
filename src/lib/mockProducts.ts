import type { Product } from "./types";

export const mockProducts: Product[] = [
  {
    id: "nutella",
    name: "Nutella",
    brand: "Ferrero",
    country: "Italie",
    category_slug: "alimentation",
    barcode: "8000500310427",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: true,
    similar_product_ids: ["nocciolata-bio", "ethiquable", "jean-herve", "kaoka-noisette"],
    sections: {
      actionnariat: {
        name: "Nutella",
        type: "Marque",
        children: [
          {
            name: "Ferrero SpA",
            type: "Société mère",
            country: "Italie",
            children: [
              {
                name: "Ferrero International SA",
                type: "Holding",
                country: "Luxembourg",
                children: [
                  {
                    name: "Famille Ferrero",
                    type: "Famille",
                    percentage: 100,
                    source_name: "OpenCorporates",
                    source_year: 2024,
                  },
                ],
              },
            ],
          },
        ],
      },
      politique: {
        facts: [
          {
            text: "Ferrero Group est inscrit au registre de transparence de l'UE. Budget de lobbying déclaré : entre 500 000€ et 1M€ en 2023.",
            source_name: "Registre de transparence UE",
            source_year: 2023,
          },
          {
            text: "Giovanni Ferrero a participé au financement du parti Forza Italia à hauteur de 100 000€ en 2021.",
            source_name: "Registre italien des dons politiques",
            source_year: 2021,
          },
          {
            text: "Ferrero est membre de FoodDrinkEurope, principal lobby agroalimentaire auprès de la Commission européenne.",
            source_name: "Registre de transparence UE",
            source_year: 2023,
          },
        ],
      },
      ecologie: {
        facts: [
          {
            text: "Contient 57% d'huile de palme. La production est liée à la déforestation en Indonésie et Malaisie — 2,3M d'hectares de forêts perdus entre 2000 et 2022.",
            source_name: "WWF · Rapport forêts",
            source_year: 2023,
          },
        ],
      },
      fabrication: {
        facts: [
          {
            text: "Produit principalement en Italie (Cuneo, Piémont) et en Allemagne. Les noisettes proviennent à 70% de Turquie. Aucun site de production en France.",
            source_name: "Open Food Facts",
            source_year: 2024,
          },
        ],
      },
      conditions_travail: {
        facts: [
          {
            text: "Les plantations fournisseurs font l'objet d'un suivi par l'OIT depuis 2019 pour des conditions insuffisantes sur 3 sites en Indonésie.",
            source_name: "OIT · Rapport Indonésie",
            source_year: 2022,
          },
        ],
      },
      scandales: {
        facts: [
          {
            text: "Avril 2022 : rappel de plusieurs lots Kinder suite à une contamination à la salmonelle dans une usine belge. 150 cas signalés en Europe.",
            source_name: "DGCCRF",
            source_year: 2022,
          },
        ],
      },
    },
  },
  {
    id: "evian",
    name: "Evian",
    brand: "Danone",
    country: "France",
    category_slug: "boissons",
    barcode: "3068320123288",
    is_ecological: false,
    is_made_in_france: true,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["nutella"],
    sections: {
      actionnariat: {
        name: "Evian",
        type: "Marque",
        children: [
          {
            name: "Danone SA",
            type: "Société mère",
            country: "France",
            percentage: 100,
            source_name: "Danone Reference Document",
            source_year: 2023,
          },
        ],
      },
      politique: {
        facts: [
          {
            text: "Lobbying UE déclaré : 1 500 000 € en 2022.",
            source_name: "EU Transparency Register",
            source_year: 2022,
          },
        ],
      },
      ecologie: {
        facts: [
          {
            text: "Bouteilles 100% recyclables. Objectif Danone : 50% de plastique recyclé d'ici 2025.",
            source_name: "Danone Integrated Report",
            source_year: 2023,
          },
        ],
      },
      fabrication: {
        facts: [
          {
            text: "Embouteillée exclusivement à Évian-les-Bains, Haute-Savoie.",
            source_name: "Danone Waters",
            source_year: 2024,
          },
        ],
      },
      conditions_travail: {
        facts: [
          {
            text: "Site d'Évian-les-Bains : environ 1000 salariés. Accord d'entreprise renégocié en 2023.",
            source_name: "Danone France",
            source_year: 2023,
          },
        ],
      },
      scandales: {
        facts: [
          {
            text: "Critiques répétées sur les prélèvements d'eau et tensions avec les collectivités locales sur les nappes phréatiques.",
            source_name: "Reporterre",
            source_year: 2023,
          },
        ],
      },
    },
  },
  {
    id: "nike-airmax",
    name: "Nike Air Max",
    brand: "Nike",
    country: "USA",
    category_slug: "mode-textile",
    barcode: "0194501234567",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: [],
    sections: {
      actionnariat: {
        name: "Nike Air Max",
        type: "Marque",
        children: [
          {
            name: "Nike Inc.",
            type: "Société mère",
            country: "USA",
            children: [
              {
                name: "Swoosh LLC (Famille Knight)",
                type: "Famille",
                source_name: "Nike Proxy Statement",
                source_year: 2023,
              },
            ],
          },
        ],
      },
      politique: {
        facts: [
          {
            text: "Nike PAC : ~250 000 USD aux candidats fédéraux US, bipartisan.",
            source_name: "OpenSecrets",
            source_year: 2022,
          },
        ],
      },
      ecologie: {
        facts: [
          {
            text: "Programme Move to Zero. Objectif : zéro carbone et zéro déchet.",
            source_name: "Nike Impact Report",
            source_year: 2023,
          },
        ],
      },
      fabrication: {
        facts: [
          {
            text: "Aucune usine Nike détenue en propre. Sous-traitance dans ~500 usines partenaires au Vietnam, en Indonésie et en Chine.",
            source_name: "Nike Manufacturing Map",
            source_year: 2024,
          },
        ],
      },
      conditions_travail: {
        facts: [
          {
            text: "Audits sociaux publiés annuellement.",
            source_name: "Nike Manufacturing Map",
            source_year: 2024,
          },
        ],
      },
      scandales: {
        facts: [
          {
            text: "Enquête BBC 2020 sur le travail forcé Ouïghour dans la chaîne d'approvisionnement — Nike a coupé certains fournisseurs.",
            source_name: "BBC News",
            source_year: 2020,
          },
        ],
      },
    },
  },
  {
    id: "nocciolata-bio",
    name: "Nocciolata Bio",
    brand: "Rigoni di Asiago",
    country: "Italie",
    category_slug: "alimentation",
    is_ecological: true,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: true,
    similar_product_ids: ["nutella"],
    sections: {
      actionnariat: { name: "Nocciolata Bio", type: "Marque" },
      politique: { facts: [] },
      ecologie: { facts: [{ text: "Sans huile de palme, certifié bio.", source_name: "Rigoni di Asiago", source_year: 2023 }] },
      fabrication: { facts: [{ text: "Fabriquée en Italie.", source_name: "Rigoni di Asiago", source_year: 2023 }] },
      conditions_travail: { facts: [] },
      scandales: { facts: [] },
    },
  },
  {
    id: "ethiquable",
    name: "Ethiquable Noisette",
    brand: "Ethiquable",
    country: "France",
    category_slug: "alimentation",
    is_ecological: true,
    is_made_in_france: true,
    is_fair_trade: true,
    is_independent: true,
    similar_product_ids: ["nutella"],
    sections: {
      actionnariat: { name: "Ethiquable", type: "Marque" },
      politique: { facts: [] },
      ecologie: { facts: [{ text: "Ingrédients biologiques, emballage recyclable.", source_name: "Ethiquable", source_year: 2024 }] },
      fabrication: { facts: [{ text: "SCOP française, fabrication en France.", source_name: "Ethiquable", source_year: 2024 }] },
      conditions_travail: { facts: [] },
      scandales: { facts: [] },
    },
  },
  {
    id: "jean-herve",
    name: "Jean Hervé",
    brand: "Jean Hervé",
    country: "France",
    category_slug: "alimentation",
    is_ecological: true,
    is_made_in_france: true,
    is_fair_trade: false,
    is_independent: true,
    similar_product_ids: ["nutella"],
    sections: {
      actionnariat: { name: "Jean Hervé", type: "Marque" },
      politique: { facts: [] },
      ecologie: { facts: [] },
      fabrication: { facts: [{ text: "PME française, fabrication 100% française.", source_name: "Jean Hervé", source_year: 2024 }] },
      conditions_travail: { facts: [] },
      scandales: { facts: [] },
    },
  },
  {
    id: "kaoka-noisette",
    name: "Kaoka Noisette",
    brand: "Kaoka",
    country: "France",
    category_slug: "alimentation",
    is_ecological: true,
    is_made_in_france: true,
    is_fair_trade: true,
    is_independent: true,
    similar_product_ids: ["nutella"],
    sections: {
      actionnariat: { name: "Kaoka", type: "Marque" },
      politique: { facts: [] },
      ecologie: { facts: [{ text: "Cacao Fairtrade, fabrication dans la Drôme.", source_name: "Kaoka", source_year: 2024 }] },
      fabrication: { facts: [] },
      conditions_travail: { facts: [] },
      scandales: { facts: [] },
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

export function searchProductsByName(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return mockProducts.filter((p) => p.name.toLowerCase().includes(q));
}

export function getProductsByCategory(slug: string): Product[] {
  return mockProducts.filter((p) => p.category_slug === slug);
}
