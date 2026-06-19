import type { Brand } from "./types";

export const mockBrands: Brand[] = [
  {
    id: "ferrero",
    name: "Ferrero",
    country: "Italie",
    sections: {
      actionnariat: {
        name: "Ferrero",
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
          { text: "Ferrero Group est inscrit au registre de transparence de l'UE. Budget de lobbying déclaré : entre 500 000€ et 1M€ en 2023.", source_name: "Registre de transparence UE", source_year: 2023 },
          { text: "Giovanni Ferrero a participé au financement du parti Forza Italia à hauteur de 100 000€ en 2021.", source_name: "Registre italien des dons politiques", source_year: 2021 },
          { text: "Ferrero est membre de FoodDrinkEurope, principal lobby agroalimentaire auprès de la Commission européenne.", source_name: "Registre de transparence UE", source_year: 2023 },
        ],
      },
      ecologie: {
        facts: [],
        matieres_premieres: { facts: [] },
      },
      fabrication: {
        facts: [],
        conditions_travail: {
          facts: [
            { text: "Les plantations fournisseurs font l'objet d'un suivi par l'OIT depuis 2019 pour des conditions insuffisantes sur 3 sites en Indonésie.", source_name: "OIT · Rapport Indonésie", source_year: 2022 },
          ],
        },
      },
    },
  },
  {
    id: "danone",
    name: "Danone",
    country: "France",
    sections: {
      actionnariat: {
        name: "Danone",
        type: "Marque",
        children: [
          { name: "Danone SA", type: "Société mère", country: "France", percentage: 100, source_name: "Danone Reference Document", source_year: 2023 },
        ],
      },
      politique: {
        facts: [
          { text: "Lobbying UE déclaré : 1 500 000 € en 2022.", source_name: "EU Transparency Register", source_year: 2022 },
        ],
      },
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: {
        facts: [],
        conditions_travail: {
          facts: [
            { text: "Site d'Évian-les-Bains : environ 1000 salariés. Accord d'entreprise renégocié en 2023.", source_name: "Danone France", source_year: 2023 },
          ],
        },
      },
    },
  },
  {
    id: "nike",
    name: "Nike",
    country: "USA",
    sections: {
      actionnariat: {
        name: "Nike",
        type: "Marque",
        children: [
          {
            name: "Nike Inc.",
            type: "Société mère",
            country: "USA",
            children: [
              { name: "Swoosh LLC (Famille Knight)", type: "Famille", source_name: "Nike Proxy Statement", source_year: 2023 },
            ],
          },
        ],
      },
      politique: {
        facts: [
          { text: "Nike PAC : ~250 000 USD aux candidats fédéraux US, bipartisan.", source_name: "OpenSecrets", source_year: 2022 },
        ],
      },
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: {
        facts: [],
        conditions_travail: {
          facts: [
            { text: "Audits sociaux publiés annuellement.", source_name: "Nike Manufacturing Map", source_year: 2024 },
          ],
        },
      },
    },
  },
  {
    id: "coca-cola-company",
    name: "The Coca-Cola Company",
    country: "USA",
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
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: {
        facts: [],
        conditions_travail: {
          facts: [
            { text: "Des pratiques antisyndicales ont été documentées dans des usines en Colombie et au Guatemala entre 2000 et 2010.", source_name: "International Labor Rights Forum", source_year: 2010 },
          ],
        },
      },
    },
  },
  {
    id: "kellanova",
    name: "Kellanova",
    country: "USA",
    sections: {
      actionnariat: {
        name: "Kellanova",
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
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: {
        facts: [],
        conditions_travail: {
          facts: [
            { text: "En 2021, 1 400 employés ont fait grève dans 4 usines américaines pendant 10 semaines pour de meilleures conditions salariales.", source_name: "Reuters", source_year: 2021 },
          ],
        },
      },
    },
  },
  {
    id: "innocent-drinks",
    name: "Innocent Drinks",
    country: "Royaume-Uni",
    sections: {
      actionnariat: {
        name: "Innocent Drinks",
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
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: {
        facts: [],
        conditions_travail: {
          facts: [
            { text: "Innocent s'engage à payer ses fournisseurs de fruits au prix Fairtrade ou équivalent. Audits sociaux annuels sur les sites fournisseurs.", source_name: "Innocent Sustainability Report", source_year: 2023 },
          ],
        },
      },
    },
  },
  {
    id: "nestle",
    name: "Nestlé",
    country: "Suisse",
    sections: {
      actionnariat: {
        name: "Nestlé",
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
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: {
        facts: [],
        conditions_travail: {
          facts: [
            { text: "Nestlé a fait l'objet de critiques récurrentes de l'OIT concernant ses pratiques d'approvisionnement en cacao.", source_name: "OIT", source_year: 2021 },
          ],
        },
      },
    },
  },
  {
    id: "unilever",
    name: "Unilever",
    country: "Royaume-Uni / Pays-Bas",
    sections: {
      actionnariat: {
        name: "Unilever",
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
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: {
        facts: [],
        conditions_travail: {
          facts: [
            { text: "Unilever s'est engagé à garantir un salaire vital à l'ensemble de sa chaîne d'approvisionnement d'ici 2030.", source_name: "Unilever Human Rights Report", source_year: 2023 },
          ],
        },
      },
    },
  },
  {
    id: "procter-gamble",
    name: "Procter & Gamble",
    country: "USA",
    sections: {
      actionnariat: {
        name: "Procter & Gamble",
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
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: {
        facts: [],
        conditions_travail: {
          facts: [
            { text: "P&G figure régulièrement dans le classement des meilleurs employeurs mondiaux (Forbes 2023). Des audits sociaux sont conduits annuellement chez 95% des fournisseurs.", source_name: "P&G Supplier Responsibility Report", source_year: 2023 },
            { text: "Engagement déclaré à un salaire vital pour tous les employés directs depuis 2022.", source_name: "P&G Annual Report", source_year: 2023 },
          ],
        },
      },
    },
  },
  {
    id: "loreal",
    name: "L'Oréal",
    country: "France",
    sections: {
      actionnariat: {
        name: "L'Oréal",
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
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: {
        facts: [],
        conditions_travail: {
          facts: [
            { text: "L'Oréal est régulièrement classé parmi les meilleures entreprises mondiales pour l'égalité des sexes (Bloomberg Gender-Equality Index 2023).", source_name: "Bloomberg", source_year: 2023 },
          ],
        },
      },
    },
  },
  {
    id: "beiersdorf",
    name: "Beiersdorf",
    country: "Allemagne",
    sections: {
      actionnariat: {
        name: "Beiersdorf",
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
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: {
        facts: [],
        conditions_travail: {
          facts: [
            { text: "Beiersdorf emploie 20 000 personnes dans 150 pays. L'entreprise a signé les principes directeurs des Nations Unies relatifs aux entreprises et aux droits de l'homme.", source_name: "Beiersdorf Human Rights Report", source_year: 2023 },
          ],
        },
      },
    },
  },
  {
    id: "inditex",
    name: "Inditex",
    country: "Espagne",
    sections: {
      actionnariat: {
        name: "Inditex",
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
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: {
        facts: [],
        conditions_travail: {
          facts: [
            { text: "En 2013, l'effondrement du Rana Plaza au Bangladesh a tué 1 138 ouvriers travaillant pour des sous-traitants de plusieurs marques dont Zara.", source_name: "Clean Clothes Campaign", source_year: 2013 },
          ],
        },
      },
    },
  },
  {
    id: "adidas",
    name: "Adidas",
    country: "Allemagne",
    sections: {
      actionnariat: {
        name: "Adidas",
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
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: {
        facts: [],
        conditions_travail: {
          facts: [
            { text: "Adidas a été épinglé par des ONG pour des conditions de travail insuffisantes chez des sous-traitants au Vietnam en 2019. Des améliorations ont été documentées depuis.", source_name: "Human Rights Watch", source_year: 2019 },
          ],
        },
      },
    },
  },
  // Independent / small brands — sparse data
  {
    id: "rigoni-di-asiago",
    name: "Rigoni di Asiago",
    country: "Italie",
    sections: {
      actionnariat: { name: "Rigoni di Asiago", type: "Marque" },
      politique: { facts: [] },
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: { facts: [] },
    },
  },
  {
    id: "ethiquable",
    name: "Ethiquable",
    country: "France",
    sections: {
      actionnariat: { name: "Ethiquable", type: "Marque" },
      politique: { facts: [] },
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: { facts: [] },
    },
  },
  {
    id: "jean-herve",
    name: "Jean Hervé",
    country: "France",
    sections: {
      actionnariat: { name: "Jean Hervé", type: "Marque" },
      politique: { facts: [] },
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: { facts: [] },
    },
  },
  {
    id: "kaoka",
    name: "Kaoka",
    country: "France",
    sections: {
      actionnariat: { name: "Kaoka", type: "Marque" },
      politique: { facts: [] },
      ecologie: { facts: [], matieres_premieres: { facts: [] } },
      fabrication: { facts: [] },
    },
  },
];

export const brandsById: Record<string, Brand> = Object.fromEntries(
  mockBrands.map((b) => [b.id, b]),
);

export function getBrandById(id: string): Brand | undefined {
  return brandsById[id];
}

export function searchBrandsByName(query: string): Brand[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return mockBrands.filter((b) => b.name.toLowerCase().includes(q));
}
