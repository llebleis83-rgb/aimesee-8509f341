import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  Heart,
  Building2,
  Landmark,
  Leaf,
  MapPin,
  Users,
  Newspaper,
  ExternalLink,
  CornerDownRight,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { PRODUCTS } from "@/lib/aimesee-data";
import { favStore, useFavorites } from "@/lib/favorites-store";

export const Route = createFileRoute("/_app/produit/$id")({
  component: ProductSheet,
});

const C = {
  bg: "#F4F7F4",
  border: "#DDE8DD",
  borderSoft: "#F4F7F4",
  primary: "#5B8C6A",
  lightGreen: "#EAF3DE",
  dark: "#1A2E1A",
  body: "#3A503A",
  muted: "#7A9A7A",
  faint: "#AAC0AA",
};

const FONT = "'DM Sans', system-ui, sans-serif";

const SCROLLBAR_CSS = `
.aim-scroll::-webkit-scrollbar { width: 3px; background: transparent; }
.aim-scroll::-webkit-scrollbar-track { background: transparent; }
.aim-scroll::-webkit-scrollbar-thumb { background: #DDE8DD; border-radius: 4px; }
.aim-scroll { scrollbar-width: thin; scrollbar-color: #DDE8DD transparent; }
`;

function K({ children }: { children: ReactNode }) {
  return <span style={{ fontWeight: 500, color: C.dark }}>{children}</span>;
}

function SourceLine({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        marginTop: "10px",
        fontFamily: FONT,
        fontSize: "11px",
        color: C.faint,
      }}
    >
      <ExternalLink size={11} strokeWidth={1.75} />
      <span>{children}</span>
    </div>
  );
}

function FactRow({ children, last }: { children: ReactNode; last?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "8px 0",
        borderBottom: last ? "none" : `0.5px solid ${C.border}`,
      }}
    >
      <div
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: C.primary,
          marginTop: "7px",
          flexShrink: 0,
        }}
      />
      <p
        style={{
          fontFamily: FONT,
          fontSize: "13px",
          fontWeight: 400,
          color: C.body,
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

function TreeRow({
  indent,
  bgGreen,
  left,
  leftSub,
  right,
  rightStrong,
}: {
  indent?: boolean;
  bgGreen?: boolean;
  left: string;
  leftSub?: string;
  right: string;
  rightStrong?: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0", padding: "4px 0" }}>
      {indent ? (
        <>
          <div style={{ width: "6px", flexShrink: 0 }} />
          <div style={{ width: "8px", height: "1px", background: C.border, flexShrink: 0 }} />
          <div style={{ width: "10px", flexShrink: 0 }} />
        </>
      ) : null}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: bgGreen ? C.lightGreen : "white",
          border: `0.5px solid ${bgGreen ? C.primary : C.border}`,
          borderRadius: "8px",
          padding: "7px 12px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: FONT, fontSize: "13px", fontWeight: 500, color: C.dark }}>
            {left}
          </span>
          {leftSub && (
            <span style={{ fontFamily: FONT, fontSize: "11px", color: C.muted }}>{leftSub}</span>
          )}
        </div>
        <span
          style={{
            fontFamily: FONT,
            fontSize: rightStrong ? "13px" : "11px",
            fontWeight: rightStrong ? 500 : 400,
            color: rightStrong ? C.primary : C.muted,
          }}
        >
          {right}
        </span>
      </div>
    </div>
  );
}

type SectionDef = { id: string; label: string; Icon: LucideIcon; content: ReactNode };

const SECTIONS: SectionDef[] = [
  {
    id: "actionnariat",
    label: "Actionnariat",
    Icon: Building2,
    content: (
      <>
        <TreeRow bgGreen left="Nutella" right="Marque" />
        <TreeRow indent left="Ferrero SpA" right="Société mère · Italie" />
        <TreeRow indent left="Ferrero International SA" right="Holding · Luxembourg" />
        <TreeRow
          indent
          left="Famille Ferrero"
          leftSub="Giovanni Ferrero, PDG"
          right="100%"
          rightStrong
        />
        <SourceLine>OpenCorporates · 2024</SourceLine>
      </>
    ),
  },
  {
    id: "politique",
    label: "Politique & Lobbying",
    Icon: Landmark,
    content: (
      <>
        <FactRow>
          <K>Ferrero Group</K> est inscrit au registre de transparence de l'UE. Budget de lobbying
          déclaré : entre <K>500 000€ et 1M€</K> en 2023.
        </FactRow>
        <FactRow>
          <K>Giovanni Ferrero</K> a participé au financement du parti <K>Forza Italia</K> à hauteur
          de <K>100 000€</K> en 2021, selon le registre italien des dons politiques.
        </FactRow>
        <FactRow last>
          Ferrero est membre de <K>FoodDrinkEurope</K>, principal lobby agroalimentaire auprès de la{" "}
          <K>Commission européenne</K>.
        </FactRow>
        <SourceLine>Registre de transparence UE · 2023 — Registre italien · 2021</SourceLine>
      </>
    ),
  },
  {
    id: "ecologie",
    label: "Écologie",
    Icon: Leaf,
    content: (
      <>
        <FactRow last>
          Contient <K>57% d'huile de palme</K>. La production est liée à la déforestation en
          Indonésie et Malaisie — <K>2,3M d'hectares</K> de forêts perdus entre 2000 et 2022.
        </FactRow>
        <SourceLine>WWF · Rapport forêts 2023</SourceLine>
      </>
    ),
  },
  {
    id: "fabrication",
    label: "Fabrication",
    Icon: MapPin,
    content: (
      <>
        <FactRow last>
          Produit principalement en <K>Italie (Cuneo, Piémont)</K> et en <K>Allemagne</K>. Les
          noisettes proviennent à <K>70% de Turquie</K>. Aucun site de production en France.
        </FactRow>
        <SourceLine>Open Food Facts · 2024</SourceLine>
      </>
    ),
  },
  {
    id: "travail",
    label: "Conditions de travail",
    Icon: Users,
    content: (
      <>
        <FactRow last>
          Les plantations fournisseurs font l'objet d'un suivi par l'<K>OIT</K> depuis 2019 pour des
          conditions insuffisantes sur <K>3 sites en Indonésie</K>.
        </FactRow>
        <SourceLine>OIT · Rapport Indonésie 2022</SourceLine>
      </>
    ),
  },
  {
    id: "scandales",
    label: "Scandales",
    Icon: Newspaper,
    content: (
      <>
        <FactRow last>
          <K>Avril 2022</K> : rappel de plusieurs lots <K>Kinder</K> suite à une contamination à la{" "}
          <K>salmonelle</K> dans une usine belge. <K>150 cas</K> signalés en Europe.
        </FactRow>
        <SourceLine>DGCCRF · Avril 2022</SourceLine>
      </>
    ),
  },
];

const FILTERS = [
  { id: "ecologique", label: "Écologique" },
  { id: "france", label: "Made in France" },
  { id: "equitable", label: "Équitable" },
  { id: "independant", label: "Indépendant" },
];

const ALTS: Record<string, { name: string; tag: string; note: string }[]> = {
  ecologique: [
    {
      name: "Nocciolata Bio",
      tag: "Sans huile de palme",
      note: "Certifié bio, huile de tournesol, cacao équitable.",
    },
    {
      name: "Ethiquable Noisette",
      tag: "Bio certifié",
      note: "Ingrédients biologiques, emballage recyclable.",
    },
  ],
  france: [
    {
      name: "Jean Hervé",
      tag: "Fabriqué en France",
      note: "PME bretonne, fabrication 100% française.",
    },
    {
      name: "Kaoka Noisette",
      tag: "Origine Drôme",
      note: "Cacao Fairtrade, fabrication dans la Drôme.",
    },
  ],
  equitable: [
    {
      name: "Kaoka Noisette",
      tag: "Fairtrade certifié",
      note: "Cacao acheté directement auprès de coopératives.",
    },
  ],
  independant: [
    {
      name: "Jean Hervé",
      tag: "PME indépendante",
      note: "Aucun fonds d'investissement au capital.",
    },
    {
      name: "Nocciolata",
      tag: "Groupe familial",
      note: "Rigoni di Asiago, entreprise familiale italienne.",
    },
  ],
};

function ProductSheet() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const product = PRODUCTS[id] ?? PRODUCTS.nutella;
  const favorites = useFavorites();
  const isFav = favorites.has(product.id);
  const [open, setOpen] = useState<Record<string, boolean>>({ actionnariat: true });
  const [activeFilter, setActiveFilter] = useState<string>("ecologique");
  const alternatives = ALTS[activeFilter] ?? [];

  const toggle = (sid: string) => setOpen((o) => ({ ...o, [sid]: !o[sid] }));

  return (
    <div
      style={{
        fontFamily: FONT,
        background: "white",
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{SCROLLBAR_CSS}</style>

      {/* Sticky header */}
      <div
        style={{
          background: C.bg,
          borderBottom: `0.5px solid ${C.border}`,
          padding: "10px 14px 14px",
          flexShrink: 0,
        }}
      >
        <button
          onClick={() => navigate({ to: "/" })}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontFamily: FONT,
            fontSize: "15px",
            fontWeight: 500,
            color: C.primary,
            marginBottom: "10px",
            background: "transparent",
            border: "none",
            padding: "10px 8px",
            marginLeft: "-8px",
            height: "44px",
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={16} strokeWidth={1.75} />
          Retour
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              background: C.border,
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Building2 size={20} color={C.primary} strokeWidth={1.75} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "16px", fontWeight: 500, color: C.dark }}>{product.name}</div>
            <div style={{ fontSize: "11px", fontWeight: 400, color: C.muted }}>
              {product.brand} · {product.country} · Pâte à tartiner
            </div>
          </div>
          <button
            onClick={() => favStore.toggle(product.id)}
            aria-label="favori"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "white",
              border: `0.5px solid ${C.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <Heart
              size={16}
              color={isFav ? C.primary : C.faint}
              fill={isFav ? C.primary : "none"}
              strokeWidth={1.75}
            />
          </button>
        </div>
      </div>

      {/* Scrollable area */}
      <div className="aim-scroll" style={{ flex: 1, overflowY: "auto" }}>
        {SECTIONS.map(({ id: sid, label, Icon, content }) => {
          const isOpen = !!open[sid];
          return (
            <div key={sid}>
              <button
                onClick={() => toggle(sid)}
                style={{
                  width: "100%",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "0 14px",
                  borderBottom: `0.5px solid ${C.borderSoft}`,
                  background: "white",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: FONT,
                }}
              >
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    background: C.lightGreen,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} color={C.primary} strokeWidth={1.75} />
                </div>
                <span style={{ flex: 1, fontSize: "14px", fontWeight: 500, color: C.dark }}>
                  {label}
                </span>
                <ChevronRight
                  size={16}
                  color={isOpen ? C.primary : C.border}
                  strokeWidth={1.75}
                  style={{
                    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>
              {isOpen && (
                <div
                  style={{
                    background: C.bg,
                    padding: "14px",
                    borderBottom: `0.5px solid ${C.border}`,
                  }}
                >
                  {content}
                </div>
              )}
            </div>
          );
        })}

        {/* Divider */}
        <div
          style={{
            height: "8px",
            background: C.bg,
            borderTop: `0.5px solid ${C.border}`,
            borderBottom: `0.5px solid ${C.border}`,
          }}
        />

        {/* Produits similaires */}
        <div
          style={{
            fontSize: "10px",
            fontWeight: 500,
            color: C.faint,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            padding: "14px 14px 8px",
          }}
        >
          Produits similaires
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            padding: "0 14px 12px",
          }}
        >
          {FILTERS.map((f) => {
            const active = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  height: "32px",
                  padding: "0 14px",
                  borderRadius: "20px",
                  fontFamily: FONT,
                  fontSize: "11px",
                  fontWeight: active ? 500 : 400,
                  background: active ? C.primary : "white",
                  color: active ? "white" : C.muted,
                  border: `0.5px solid ${active ? C.primary : C.border}`,
                  cursor: "pointer",
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {alternatives.map((a, i) => (
          <div
            key={`${a.name}-${i}`}
            style={{
              border: `0.5px solid ${C.border}`,
              borderRadius: "14px",
              padding: "12px",
              margin: "0 12px 8px",
              background: "white",
              display: "flex",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                background: C.lightGreen,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Leaf size={18} color={C.primary} strokeWidth={1.75} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: "13px", fontWeight: 500, color: C.dark }}>{a.name}</div>
              <div style={{ marginTop: "4px" }}>
                <span
                  style={{
                    fontSize: "11px",
                    color: C.primary,
                    background: C.lightGreen,
                    borderRadius: "20px",
                    padding: "3px 10px",
                  }}
                >
                  {a.tag}
                </span>
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 400,
                  color: C.muted,
                  marginTop: "4px",
                  lineHeight: 1.5,
                }}
              >
                {a.note}
              </div>
            </div>
          </div>
        ))}

        <div style={{ height: "24px" }} />
      </div>
    </div>
  );
}
