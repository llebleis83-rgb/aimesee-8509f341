export type Fact = {
  emoji: string;
  category: string;
  text: string;
  source: string;
  year: string;
};

export type Alternative = {
  id: string;
  name: string;
  tag: string;
  note: string;
  filters: string[]; // ecologique | france | equitable | independant
  icon: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  country: string;
  facts: Fact[];
  alternatives: Alternative[];
};

export const PRODUCTS: Record<string, Product> = {
  nutella: {
    id: "nutella",
    name: "Nutella",
    brand: "Ferrero",
    country: "Italie",
    facts: [
      {
        emoji: "🌱",
        category: "Environnement",
        text: "Contient de l'huile de palme certifiée RSPO. Ferrero rapporte 100% d'approvisionnement ségrégué depuis 2015.",
        source: "Ferrero CSR Report",
        year: "2023",
      },
      {
        emoji: "👷",
        category: "Conditions de travail",
        text: "Ferrero emploie environ 47 000 personnes dans 31 pays. Aucune accusation majeure de travail forcé documentée sur les sites de production directe.",
        source: "Ferrero Annual Report",
        year: "2023",
      },
      {
        emoji: "🗳️",
        category: "Dons politiques",
        text: "Aucun don politique direct documenté en France. Lobbying déclaré auprès de la Commission européenne : 600 000 € en 2022.",
        source: "EU Transparency Register",
        year: "2022",
      },
      {
        emoji: "🏭",
        category: "Pays de fabrication",
        text: "Produit pour le marché français principalement dans l'usine de Villers-Écalles (Seine-Maritime), la plus grande usine Nutella au monde.",
        source: "Ferrero France",
        year: "2024",
      },
      {
        emoji: "💼",
        category: "Actionnaires",
        text: "Groupe familial Ferrero. Détenu à 100% par la famille Ferrero via Ferrero International S.A. (Luxembourg).",
        source: "Ferrero Group",
        year: "2023",
      },
      {
        emoji: "📰",
        category: "Scandales récents",
        text: "Salmonelle détectée à l'usine Kinder d'Arlon (Belgique) en avril 2022 — rappel mondial de produits Kinder, pas de Nutella.",
        source: "AFSCA / Le Monde",
        year: "2022",
      },
    ],
    alternatives: [
      { id: "nocciolata-bio", name: "Nocciolata Bio", tag: "Sans huile de palme", note: "Rigoni di Asiago · Italie", filters: ["ecologique", "independant"], icon: "🌰" },
      { id: "ethiquable", name: "Ethiquable Noisette", tag: "Bio certifié", note: "SCOP · Équitable", filters: ["ecologique", "equitable"], icon: "🍫" },
      { id: "jean-herve", name: "Jean Hervé", tag: "Fabriqué en France", note: "PME · Drôme", filters: ["france", "independant"], icon: "🥜" },
      { id: "kaoka-drome", name: "Kaoka", tag: "Origine Drôme", note: "Cacao équitable", filters: ["france"], icon: "🌿" },
      { id: "kaoka-noisette", name: "Kaoka Noisette", tag: "Fairtrade certifié", note: "Filière équitable", filters: ["equitable"], icon: "🤎" },
      { id: "nocciolata-fam", name: "Nocciolata", tag: "Groupe familial", note: "Rigoni di Asiago", filters: ["independant"], icon: "🌰" },
    ],
  },
  evian: {
    id: "evian",
    name: "Evian",
    brand: "Danone",
    country: "France",
    facts: [
      { emoji: "🌱", category: "Environnement", text: "Bouteilles 100% recyclables. Objectif Danone : 50% de plastique recyclé d'ici 2025.", source: "Danone Integrated Report", year: "2023" },
      { emoji: "👷", category: "Conditions de travail", text: "Site d'Évian-les-Bains : environ 1000 salariés. Accord d'entreprise renégocié en 2023.", source: "Danone France", year: "2023" },
      { emoji: "🗳️", category: "Dons politiques", text: "Lobbying UE déclaré : 1 500 000 € en 2022.", source: "EU Transparency Register", year: "2022" },
      { emoji: "🏭", category: "Pays de fabrication", text: "Embouteillée exclusivement à Évian-les-Bains, Haute-Savoie.", source: "Danone Waters", year: "2024" },
      { emoji: "💼", category: "Actionnaires", text: "Société cotée Euronext Paris. BlackRock et Vanguard parmi les principaux actionnaires institutionnels.", source: "Danone Reference Document", year: "2023" },
      { emoji: "📰", category: "Scandales récents", text: "Critiques répétées sur les prélèvements d'eau et tensions avec les collectivités locales sur les nappes phréatiques.", source: "Reporterre", year: "2023" },
    ],
    alternatives: [],
  },
  "nike-airmax": {
    id: "nike-airmax",
    name: "Nike Air Max",
    brand: "Nike",
    country: "USA",
    facts: [
      { emoji: "🌱", category: "Environnement", text: "Programme Move to Zero. Objectif : zéro carbone et zéro déchet.", source: "Nike Impact Report", year: "2023" },
      { emoji: "👷", category: "Conditions de travail", text: "Production majoritaire au Vietnam, en Indonésie et en Chine. Audits sociaux publiés annuellement.", source: "Nike Manufacturing Map", year: "2024" },
      { emoji: "🗳️", category: "Dons politiques", text: "Nike PAC : ~250 000 USD aux candidats fédéraux US, bipartisan.", source: "OpenSecrets", year: "2022" },
      { emoji: "🏭", category: "Pays de fabrication", text: "Aucune usine Nike détenue en propre. Sous-traitance dans ~500 usines partenaires.", source: "Nike Manufacturing Map", year: "2024" },
      { emoji: "💼", category: "Actionnaires", text: "Cotée NYSE. Famille Knight (fondateur) reste actionnaire significatif via Swoosh LLC.", source: "Nike Proxy Statement", year: "2023" },
      { emoji: "📰", category: "Scandales récents", text: "Enquête BBC 2020 sur le travail forcé Ouïghour dans la chaîne d'approvisionnement — Nike a coupé certains fournisseurs.", source: "BBC News", year: "2020" },
    ],
    alternatives: [],
  },
};

export const FAVORITES_MOCK: { id: string; name: string; brand: string; country: string }[] = [
  { id: "nutella", name: "Nutella", brand: "Ferrero", country: "Italie" },
  { id: "evian", name: "Evian", brand: "Danone", country: "France" },
  { id: "nike-airmax", name: "Nike Air Max", brand: "Nike", country: "USA" },
];

export const HISTORY_MOCK: { id: string; name: string; when: string }[] = [
  { id: "nutella", name: "Nutella", when: "aujourd'hui · 14h22" },
  { id: "evian", name: "Danone", when: "hier · 09h05" },
  { id: "nike-airmax", name: "Nike Air Max", when: "12 mai · 18h47" },
  { id: "nutella", name: "Nestlé Kit Kat", when: "10 mai · 11h30" },
];

export const RECENT_SEARCHES = ["Nutella", "Coca-Cola", "Danone", "Nike", "Zara"];
