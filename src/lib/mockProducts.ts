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
  {
    id: "coca-cola",
    name: "Coca-Cola",
    brand: "The Coca-Cola Company",
    country: "USA",
    category_slug: "alimentation",
    barcode: "mock-coca-cola-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["nutella", "kelloggs-corn-flakes"],
    sections: {
      actionnariat: {
        name: "The Coca-Cola Company",
        type: "Marque",
        children: [
          { name: "Berkshire Hathaway", type: "Fonds", percentage: 9.3, country: "USA" },
          { name: "Vanguard Group", type: "Fonds", percentage: 8.1, country: "USA" },
          { name: "BlackRock", type: "Fonds", percentage: 6.7, country: "USA" },
        ],
      },
      politique: {
        facts: [
          { text: "Coca-Cola a dépensé 9,4M$ en lobbying aux États-Unis en 2022, principalement contre les taxes sur les boissons sucrées.", source_name: "OpenSecrets", source_year: 2022 },
          { text: "Membre de BusinessEurope, principal lobby patronal auprès de la Commission européenne.", source_name: "Registre de transparence UE", source_year: 2023 },
        ],
      },
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
      conditions_travail: {
        facts: [
          { text: "Des pratiques antisyndicales ont été documentées dans des usines en Colombie et au Guatemala entre 2000 et 2010.", source_name: "International Labor Rights Forum", source_year: 2010 },
        ],
      },
      scandales: {
        facts: [
          { text: "En 2015, des chercheurs de l'Université de Columbia ont révélé que Coca-Cola finançait discrètement des études scientifiques minimisant le rôle du sucre dans l'obésité.", source_name: "JAMA Internal Medicine", source_year: 2015 },
        ],
      },
    },
  },
  {
    id: "kelloggs-corn-flakes",
    name: "Kellogg's Corn Flakes",
    brand: "Kellanova",
    country: "USA",
    category_slug: "alimentation",
    barcode: "mock-kelloggs-corn-flakes-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["nutella", "coca-cola"],
    sections: {
      actionnariat: {
        name: "Kellogg's Corn Flakes",
        type: "Marque",
        children: [
          {
            name: "Kellanova",
            type: "Société mère",
            country: "USA",
            children: [
              { name: "Mars Inc.", type: "Holding", country: "USA", percentage: 100 },
            ],
          },
        ],
      },
      politique: {
        facts: [
          { text: "Kellanova (ex-Kellogg's) a dépensé 1,2M$ en lobbying aux États-Unis en 2022, principalement sur les politiques alimentaires et d'étiquetage.", source_name: "OpenSecrets", source_year: 2022 },
        ],
      },
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
      conditions_travail: {
        facts: [
          { text: "En 2021, 1 400 employés ont fait grève dans 4 usines américaines pendant 10 semaines pour de meilleures conditions salariales.", source_name: "Reuters", source_year: 2021 },
        ],
      },
      scandales: {
        facts: [
          { text: "En 2023, Mars Inc. a racheté Kellanova pour 35,9 milliards de dollars, l'une des plus grandes acquisitions de l'industrie alimentaire.", source_name: "Financial Times", source_year: 2023 },
        ],
      },
    },
  },
  {
    id: "innocent-smoothie",
    name: "Innocent Smoothie",
    brand: "Innocent Drinks",
    country: "Royaume-Uni",
    category_slug: "boissons",
    barcode: "mock-innocent-smoothie-001",
    is_ecological: true,
    is_made_in_france: false,
    is_fair_trade: true,
    is_independent: false,
    similar_product_ids: ["evian", "san-pellegrino"],
    sections: {
      actionnariat: {
        name: "Innocent Smoothie",
        type: "Marque",
        children: [
          {
            name: "Innocent Drinks",
            type: "Société mère",
            country: "Royaume-Uni",
            children: [
              { name: "The Coca-Cola Company", type: "Holding", country: "USA", percentage: 100 },
            ],
          },
        ],
      },
      politique: {
        facts: [
          { text: "Innocent promeut activement des politiques de réduction des emballages plastiques auprès de la Commission européenne via ses rapports de durabilité.", source_name: "Innocent Sustainability Report", source_year: 2023 },
        ],
      },
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
      conditions_travail: {
        facts: [
          { text: "Innocent s'engage à payer ses fournisseurs de fruits au prix Fairtrade ou équivalent. Audits sociaux annuels sur les sites fournisseurs.", source_name: "Innocent Sustainability Report", source_year: 2023 },
        ],
      },
      scandales: {
        facts: [
          { text: "Rachetée progressivement par Coca-Cola entre 2009 et 2013, ce qui a suscité des critiques de consommateurs déçus par la perte d'indépendance de la marque.", source_name: "The Guardian", source_year: 2013 },
        ],
      },
    },
  },
  {
    id: "san-pellegrino",
    name: "San Pellegrino",
    brand: "Nestlé",
    country: "Italie",
    category_slug: "boissons",
    barcode: "mock-san-pellegrino-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["evian", "innocent-smoothie"],
    sections: {
      actionnariat: {
        name: "San Pellegrino",
        type: "Marque",
        children: [
          {
            name: "Nestlé Waters",
            type: "Société mère",
            country: "Suisse",
            children: [
              { name: "Nestlé S.A.", type: "Holding", country: "Suisse" },
            ],
          },
        ],
      },
      politique: {
        facts: [
          { text: "Nestlé a dépensé 3,2M€ en lobbying auprès de l'UE en 2022, notamment sur les réglementations liées à l'eau et à l'étiquetage.", source_name: "Registre de transparence UE", source_year: 2022 },
        ],
      },
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
      conditions_travail: {
        facts: [
          { text: "Nestlé a fait l'objet de critiques récurrentes de l'OIT concernant ses pratiques d'approvisionnement en cacao, non directement liées à San Pellegrino.", source_name: "OIT", source_year: 2021 },
        ],
      },
      scandales: {
        facts: [
          { text: "En 2021, Nestlé a admis que moins de 40% de ses produits alimentaires et boissons répondaient à des normes nutritionnelles reconnues.", source_name: "Financial Times", source_year: 2021 },
        ],
      },
    },
  },
  {
    id: "dove-savon",
    name: "Dove Savon",
    brand: "Unilever",
    country: "Royaume-Uni / Pays-Bas",
    category_slug: "hygiene-soins",
    barcode: "mock-dove-savon-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["gillette-fusion"],
    sections: {
      actionnariat: {
        name: "Dove",
        type: "Marque",
        children: [
          {
            name: "Unilever PLC",
            type: "Société mère",
            country: "Royaume-Uni",
            children: [
              { name: "Vanguard Group", type: "Fonds", percentage: 7.2, country: "USA" },
              { name: "BlackRock", type: "Fonds", percentage: 6.1, country: "USA" },
            ],
          },
        ],
      },
      politique: {
        facts: [
          { text: "Unilever a dépensé 3,8M€ en lobbying auprès de l'UE en 2022, notamment sur les politiques d'emballages et de durabilité.", source_name: "Registre de transparence UE", source_year: 2022 },
        ],
      },
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
      conditions_travail: {
        facts: [
          { text: "Unilever s'est engagé à garantir un salaire vital à l'ensemble de sa chaîne d'approvisionnement d'ici 2030.", source_name: "Unilever Human Rights Report", source_year: 2023 },
        ],
      },
      scandales: {
        facts: [
          { text: "En 2022, Nelson Peltz (Trian Fund) a pris une participation activiste dans Unilever, critiquant la stratégie de durabilité au détriment de la performance financière.", source_name: "Financial Times", source_year: 2022 },
        ],
      },
    },
  },
  {
    id: "gillette-fusion",
    name: "Gillette Fusion",
    brand: "Procter & Gamble",
    country: "USA",
    category_slug: "hygiene-soins",
    barcode: "mock-gillette-fusion-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["dove-savon"],
    sections: {
      actionnariat: {
        name: "Gillette",
        type: "Marque",
        children: [
          {
            name: "Procter & Gamble",
            type: "Société mère",
            country: "USA",
            children: [
              { name: "Vanguard Group", type: "Fonds", percentage: 8.9, country: "USA" },
              { name: "BlackRock", type: "Fonds", percentage: 6.4, country: "USA" },
            ],
          },
        ],
      },
      politique: {
        facts: [
          { text: "P&G a dépensé 7,5M$ en lobbying aux États-Unis en 2022.", source_name: "OpenSecrets", source_year: 2022 },
        ],
      },
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
      conditions_travail: {
        facts: [
          { text: "P&G figure régulièrement dans le classement des meilleurs employeurs mondiaux (Forbes 2023). Des audits sociaux sont conduits annuellement chez 95% des fournisseurs.", source_name: "P&G Supplier Responsibility Report", source_year: 2023 },
        ],
      },
      scandales: {
        facts: [
          { text: "En 2019, P&G a enregistré une dépréciation de 8 milliards de dollars sur Gillette, acquise en 2005 pour 57 milliards — la plus grande perte de valeur de l'histoire du groupe.", source_name: "Wall Street Journal", source_year: 2019 },
        ],
      },
    },
  },
  {
    id: "loreal-rouge-levres",
    name: "L'Oréal Paris Rouge à Lèvres",
    brand: "L'Oréal",
    country: "France",
    category_slug: "cosmetiques",
    barcode: "mock-loreal-rouge-levres-001",
    is_ecological: false,
    is_made_in_france: true,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["nivea-creme"],
    sections: {
      actionnariat: {
        name: "L'Oréal Paris",
        type: "Marque",
        children: [
          {
            name: "L'Oréal S.A.",
            type: "Société mère",
            country: "France",
            children: [
              { name: "Famille Bettencourt Meyers", type: "Famille", percentage: 34.7, country: "France" },
              { name: "Nestlé S.A.", type: "Holding", percentage: 20.1, country: "Suisse" },
            ],
          },
        ],
      },
      politique: {
        facts: [
          { text: "L'Oréal a dépensé 1,5M€ en lobbying auprès de l'UE en 2022, notamment sur la réglementation des ingrédients cosmétiques.", source_name: "Registre de transparence UE", source_year: 2022 },
        ],
      },
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
      conditions_travail: {
        facts: [
          { text: "L'Oréal est régulièrement classé parmi les meilleures entreprises mondiales pour l'égalité des sexes (Bloomberg Gender-Equality Index 2023).", source_name: "Bloomberg", source_year: 2023 },
        ],
      },
      scandales: {
        facts: [
          { text: "En 2023, L'Oréal a acquis Aesop pour 2,5 milliards de dollars, sa plus grande acquisition, suscitant des débats sur la préservation de l'identité de la marque australienne.", source_name: "Reuters", source_year: 2023 },
        ],
      },
    },
  },
  {
    id: "nivea-creme",
    name: "Nivea Crème",
    brand: "Beiersdorf",
    country: "Allemagne",
    category_slug: "cosmetiques",
    barcode: "mock-nivea-creme-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["loreal-rouge-levres"],
    sections: {
      actionnariat: {
        name: "Nivea",
        type: "Marque",
        children: [
          {
            name: "Beiersdorf AG",
            type: "Société mère",
            country: "Allemagne",
            children: [
              { name: "Tchibo GmbH (Famille Herz)", type: "Holding", percentage: 50.3, country: "Allemagne" },
            ],
          },
        ],
      },
      politique: {
        facts: [
          { text: "Beiersdorf a déclaré 400 000€ de lobbying auprès de l'UE en 2022 sur les politiques cosmétiques et environnementales.", source_name: "Registre de transparence UE", source_year: 2022 },
        ],
      },
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
      conditions_travail: {
        facts: [
          { text: "Beiersdorf emploie 20 000 personnes dans 150 pays. L'entreprise a signé les principes directeurs des Nations Unies relatifs aux entreprises et aux droits de l'homme.", source_name: "Beiersdorf Human Rights Report", source_year: 2023 },
        ],
      },
      scandales: {
        facts: [
          { text: "Pendant la Seconde Guerre mondiale, Beiersdorf a été contraint d'opérer sous contrôle nazi. L'entreprise a reconnu et documenté cette période dans son histoire officielle.", source_name: "Beiersdorf Corporate History", source_year: 2020 },
        ],
      },
    },
  },
  {
    id: "ariel-lessive",
    name: "Ariel Lessive",
    brand: "Procter & Gamble",
    country: "USA",
    category_slug: "entretien-maison",
    barcode: "mock-ariel-lessive-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["fairy-liquide-vaisselle"],
    sections: {
      actionnariat: {
        name: "Ariel",
        type: "Marque",
        children: [
          {
            name: "Procter & Gamble",
            type: "Société mère",
            country: "USA",
            children: [
              { name: "Vanguard Group", type: "Fonds", percentage: 8.9, country: "USA" },
              { name: "BlackRock", type: "Fonds", percentage: 6.4, country: "USA" },
            ],
          },
        ],
      },
      politique: {
        facts: [
          { text: "P&G a dépensé 7,5M$ en lobbying aux États-Unis en 2022, notamment contre les restrictions sur les agents tensioactifs chimiques.", source_name: "OpenSecrets", source_year: 2022 },
        ],
      },
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
      conditions_travail: {
        facts: [
          { text: "P&G conduit des audits sociaux annuels chez 95% de ses fournisseurs de matières premières via le programme Supplier Responsibility.", source_name: "P&G Supplier Responsibility Report", source_year: 2023 },
        ],
      },
      scandales: {
        facts: [
          { text: "En 2017, Ariel Pods a été au cœur du 'Tide Pod Challenge' sur les réseaux sociaux, conduisant à plus de 10 000 appels aux centres antipoison aux USA.", source_name: "American Association of Poison Control Centers", source_year: 2018 },
        ],
      },
    },
  },
  {
    id: "fairy-liquide-vaisselle",
    name: "Fairy Liquide Vaisselle",
    brand: "Procter & Gamble",
    country: "USA",
    category_slug: "entretien-maison",
    barcode: "mock-fairy-liquide-vaisselle-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["ariel-lessive"],
    sections: {
      actionnariat: {
        name: "Fairy",
        type: "Marque",
        children: [
          {
            name: "Procter & Gamble",
            type: "Société mère",
            country: "USA",
            children: [
              { name: "Vanguard Group", type: "Fonds", percentage: 8.9, country: "USA" },
            ],
          },
        ],
      },
      politique: {
        facts: [
          { text: "P&G a dépensé 7,5M$ en lobbying aux États-Unis en 2022.", source_name: "OpenSecrets", source_year: 2022 },
        ],
      },
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
      conditions_travail: {
        facts: [
          { text: "P&G figure régulièrement dans le classement des meilleurs employeurs. Engagement déclaré à un salaire vital pour tous les employés directs depuis 2022.", source_name: "P&G Annual Report", source_year: 2023 },
        ],
      },
      scandales: {
        facts: [
          { text: "Fairy, comme d'autres détergents vaisselle, contient des agents tensioactifs (SLS/SLES) dont l'impact environnemental aquatique fait l'objet de débats scientifiques.", source_name: "Environmental Science & Technology", source_year: 2022 },
        ],
      },
    },
  },
  {
    id: "zara-vetement",
    name: "Zara (vêtement)",
    brand: "Inditex",
    country: "Espagne",
    category_slug: "mode-textile",
    barcode: "mock-zara-vetement-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["nike-airmax", "adidas-stan-smith"],
    sections: {
      actionnariat: {
        name: "Zara",
        type: "Marque",
        children: [
          {
            name: "Inditex S.A.",
            type: "Société mère",
            country: "Espagne",
            children: [
              { name: "Amancio Ortega", type: "Famille", percentage: 59.3, country: "Espagne" },
            ],
          },
        ],
      },
      politique: {
        facts: [
          { text: "Inditex a dépensé 600 000€ en lobbying auprès de l'UE en 2022, principalement sur la directive européenne sur le devoir de vigilance.", source_name: "Registre de transparence UE", source_year: 2022 },
        ],
      },
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
      conditions_travail: {
        facts: [
          { text: "En 2013, l'effondrement du Rana Plaza au Bangladesh a tué 1 138 ouvriers travaillant pour des sous-traitants de plusieurs marques dont Zara.", source_name: "Clean Clothes Campaign", source_year: 2013 },
        ],
      },
      scandales: {
        facts: [
          { text: "En 2017, des vêtements Zara vendus en Turquie contenaient des notes cousues à l'intérieur par des ouvrières réclamant leur salaire impayé.", source_name: "The Guardian", source_year: 2017 },
        ],
      },
    },
  },
  {
    id: "adidas-stan-smith",
    name: "Adidas Stan Smith",
    brand: "Adidas",
    country: "Allemagne",
    category_slug: "mode-textile",
    barcode: "mock-adidas-stan-smith-001",
    is_ecological: false,
    is_made_in_france: false,
    is_fair_trade: false,
    is_independent: false,
    similar_product_ids: ["nike-airmax", "zara-vetement"],
    sections: {
      actionnariat: {
        name: "Adidas Stan Smith",
        type: "Marque",
        children: [
          {
            name: "Adidas AG",
            type: "Société mère",
            country: "Allemagne",
            children: [
              { name: "Vanguard Group", type: "Fonds", percentage: 5.8, country: "USA" },
              { name: "BlackRock", type: "Fonds", percentage: 5.2, country: "USA" },
            ],
          },
        ],
      },
      politique: {
        facts: [
          { text: "Adidas a dépensé 800 000€ en lobbying auprès de l'UE en 2022.", source_name: "Registre de transparence UE", source_year: 2022 },
        ],
      },
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
      conditions_travail: {
        facts: [
          { text: "Adidas a été épinglé par des ONG pour des conditions de travail insuffisantes chez des sous-traitants au Vietnam en 2019. Des améliorations ont été documentées depuis.", source_name: "Human Rights Watch", source_year: 2019 },
        ],
      },
      scandales: {
        facts: [
          { text: "En 2022, Adidas a mis fin à son partenariat avec Kanye West (Yeezy) suite à des propos antisémites, entraînant une perte estimée à 250M€ de bénéfice net.", source_name: "Reuters", source_year: 2022 },
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

export function searchProductsByName(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return mockProducts.filter((p) => p.name.toLowerCase().includes(q));
}

export function getProductsByCategory(slug: string): Product[] {
  return mockProducts.filter((p) => p.category_slug === slug);
}
