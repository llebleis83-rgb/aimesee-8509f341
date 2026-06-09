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
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { PRODUCTS } from "@/lib/aimesee-data";
import { favStore, useFavorites } from "@/lib/favorites-store";

export const Route = createFileRoute("/_app/produit/$id")({
  component: ProductSheet,
});

const COLORS = {
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

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: FONT,
        fontSize: "10px",
        fontWeight: 500,
        color: COLORS.faint,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        padding: "14px 14px 6px",
      }}
    >
      {children}
    </div>
  );
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        border: `0.5px solid ${COLORS.border}`,
        borderRadius: "14px",
        padding: "12px",
        margin: "0 12px 8px",
        background: "white",
      }}
    >
      {children}
    </div>
  );
}

function CardHeader({ Icon, label }: { Icon: LucideIcon; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
      <div
        style={{
          width: "28px",
          height: "28px",
          background: COLORS.lightGreen,
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={16} color={COLORS.primary} strokeWidth={1.75} />
      </div>
      <span style={{ fontFamily: FONT, fontSize: "12px", fontWeight: 500, color: COLORS.primary }}>
        {label}
      </span>
    </div>
  );
}

function SourceLine({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        marginTop: "8px",
        fontFamily: FONT,
        fontSize: "10px",
        color: COLORS.faint,
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
        gap: "8px",
        padding: "8px 0",
        borderBottom: last ? "none" : `0.5px solid ${COLORS.borderSoft}`,
      }}
    >
      <div
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: COLORS.primary,
          marginTop: "5px",
          flexShrink: 0,
        }}
      />
      <p
        style={{
          fontFamily: FONT,
          fontSize: "11px",
          fontWeight: 400,
          color: COLORS.body,
          lineHeight: 1.6,
        }}
      >
        {children}
      </p>
    </div>
  );
}

function K({ children }: { children: ReactNode }) {
  return <span style={{ fontWeight: 500, color: COLORS.dark }}>{children}</span>;
}

// Tree node row for actionnariat
function TreeRow({
  indent,
  bgGreen,
  left,
  leftSub,
  right,
}: {
  indent?: boolean;
  bgGreen?: boolean;
  left: string;
  leftSub?: string;
  right: ReactNode;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", height: "36px" }}>
      {indent && <CornerDownRight size={12} color={COLORS.border} strokeWidth={1.75} />}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: bgGreen ? COLORS.lightGreen : COLORS.borderSoft,
          border: `0.5px solid ${bgGreen ? COLORS.primary : COLORS.border}`,
          borderRadius: "8px",
          padding: "5px 10px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: FONT, fontSize: "11px", fontWeight: 500, color: COLORS.dark }}>
            {left}
          </span>
          {leftSub && (
            <span style={{ fontFamily: FONT, fontSize: "10px", color: COLORS.muted }}>
              {leftSub}
            </span>
          )}
        </div>
        <span style={{ fontFamily: FONT, fontSize: "10px", color: COLORS.muted }}>{right}</span>
      </div>
    </div>
  );
}

const FILTERS = [
  { id: "ecologique", label: "Écologique" },
  { id: "france", label: "Made in France" },
  { id: "equitable", label: "Équitable" },
  { id: "independant", label: "Indépendant" },
];

const ALTS: Record<string, { name: string; tag: string; note: string }[]> = {
  ecologique: [
    { name: "Nocciolata Bio", tag: "Sans huile de palme", note: "Rigoni di Asiago · Italie" },
    { name: "Ethiquable Noisette", tag: "Bio certifié", note: "SCOP · Équitable" },
  ],
  france: [
    { name: "Jean Hervé", tag: "Fabriqué en France", note: "PME · Drôme" },
    { name: "Kaoka", tag: "Origine Drôme", note: "Cacao équitable" },
  ],
  equitable: [{ name: "Kaoka Noisette", tag: "Fairtrade certifié", note: "Filière équitable" }],
  independant: [
    { name: "Jean Hervé", tag: "PME indépendante", note: "Drôme · France" },
    { name: "Nocciolata", tag: "Groupe familial", note: "Rigoni di Asiago" },
  ],
};

function ProductSheet() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const product = PRODUCTS[id] ?? PRODUCTS.nutella;
  const favorites = useFavorites();
  const isFav = favorites.has(product.id);
  const [activeFilter, setActiveFilter] = useState<string>("ecologique");

  const alternatives = useMemo(() => ALTS[activeFilter] ?? [], [activeFilter]);

  return (
    <div style={{ fontFamily: FONT, background: "white", minHeight: "100vh" }}>
      {/* Sticky header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: COLORS.bg,
          borderBottom: `0.5px solid ${COLORS.border}`,
          padding: "12px 16px 14px",
        }}
      >
        <button
          onClick={() => navigate({ to: "/" })}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontFamily: FONT,
            fontSize: "11px",
            fontWeight: 400,
            color: COLORS.muted,
            marginBottom: "10px",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={13} strokeWidth={1.75} />
          Retour
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              background: COLORS.border,
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Building2 size={20} color={COLORS.primary} strokeWidth={1.75} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "16px", fontWeight: 500, color: COLORS.dark }}>
              {product.name}
            </div>
            <div style={{ fontSize: "11px", fontWeight: 400, color: COLORS.muted }}>
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
              border: `0.5px solid ${COLORS.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <Heart
              size={16}
              color={COLORS.primary}
              fill={isFav ? COLORS.primary : "none"}
              strokeWidth={1.75}
            />
          </button>
        </div>
      </div>

      <SectionLabel>Les faits</SectionLabel>

      {/* Card 1 — Actionnariat */}
      <Card>
        <CardHeader Icon={Building2} label="Actionnariat" />
        <div>
          <TreeRow bgGreen left="Nutella" right="Marque" />
          <TreeRow indent left="Ferrero SpA" right="Société mère · Italie" />
          <TreeRow indent left="Ferrero International SA" right="Holding · Luxembourg" />
          <TreeRow
            indent
            left="Famille Ferrero"
            leftSub="Giovanni Ferrero, PDG"
            right={<span style={{ fontWeight: 500, color: COLORS.primary, fontSize: "11px" }}>100%</span>}
          />
        </div>
        <SourceLine>OpenCorporates · 2024</SourceLine>
      </Card>

      {/* Card 2 — Politique & Lobbying */}
      <Card>
        <CardHeader Icon={Landmark} label="Politique & Lobbying" />
        <div>
          <FactRow>
            <K>Ferrero Group</K> est inscrit au registre de transparence de l'UE. Budget de lobbying déclaré : entre <K>500 000€ et 1M€</K> en 2023.
          </FactRow>
          <FactRow>
            <K>Giovanni Ferrero</K> a participé au financement du parti <K>Forza Italia</K> à hauteur de <K>100 000€</K> en 2021, selon le registre italien des dons politiques.
          </FactRow>
          <FactRow last>
            Ferrero est membre de <K>FoodDrinkEurope</K>, principal lobby agroalimentaire auprès de la <K>Commission européenne</K>.
          </FactRow>
        </div>
        <SourceLine>Registre de transparence UE · 2023 — Registre italien · 2021</SourceLine>
      </Card>

      {/* Card 3 — Écologie */}
      <Card>
        <CardHeader Icon={Leaf} label="Écologie" />
        <FactRow last>
          Contient <K>57% d'huile de palme</K>. La production est liée à la déforestation en Indonésie et Malaisie — <K>2,3M d'hectares perdus</K> entre 2000 et 2022.
        </FactRow>
        <SourceLine>WWF · Rapport forêts 2023</SourceLine>
      </Card>

      {/* Card 4 — Fabrication */}
      <Card>
        <CardHeader Icon={MapPin} label="Fabrication" />
        <FactRow last>
          Produit principalement en <K>Italie (Cuneo, Piémont)</K> et en <K>Allemagne</K>. Les noisettes proviennent à <K>70% de Turquie</K>. Aucun site de production en France.
        </FactRow>
        <SourceLine>Open Food Facts · 2024</SourceLine>
      </Card>

      {/* Card 5 — Conditions de travail */}
      <Card>
        <CardHeader Icon={Users} label="Conditions de travail" />
        <FactRow last>
          Les plantations fournisseurs font l'objet d'un suivi par l'<K>OIT</K> depuis 2019 pour des conditions insuffisantes sur <K>3 sites en Indonésie</K>.
        </FactRow>
        <SourceLine>OIT · Rapport Indonésie 2022</SourceLine>
      </Card>

      {/* Card 6 — Scandales */}
      <Card>
        <CardHeader Icon={Newspaper} label="Scandales" />
        <FactRow last>
          <K>Avril 2022</K> : rappel de plusieurs lots <K>Kinder</K> suite à une contamination à la <K>salmonelle</K> dans une usine belge. <K>150 cas</K> signalés en Europe.
        </FactRow>
        <SourceLine>DGCCRF · Avril 2022</SourceLine>
      </Card>

      {/* Divider */}
      <div style={{ borderTop: `0.5px solid ${COLORS.border}`, margin: "4px 12px 0" }} />

      <SectionLabel>Produits similaires</SectionLabel>

      {/* Filter chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", padding: "0 12px 8px" }}>
        {FILTERS.map((f) => {
          const active = activeFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              style={{
                height: "30px",
                padding: "0 12px",
                borderRadius: "20px",
                fontFamily: FONT,
                fontSize: "10px",
                fontWeight: active ? 500 : 400,
                background: active ? COLORS.primary : COLORS.borderSoft,
                color: active ? "white" : COLORS.muted,
                border: active ? `0.5px solid ${COLORS.primary}` : `0.5px solid ${COLORS.border}`,
                cursor: "pointer",
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Alternatives */}
      <div>
        {alternatives.map((a, i) => (
          <div
            key={`${a.name}-${i}`}
            style={{
              border: `0.5px solid ${COLORS.border}`,
              borderRadius: "14px",
              padding: "10px 12px",
              margin: "6px 12px",
              background: "white",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "34px",
                height: "34px",
                background: COLORS.lightGreen,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Leaf size={16} color={COLORS.primary} strokeWidth={1.75} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: "12px", fontWeight: 500, color: COLORS.dark }}>{a.name}</div>
              <div style={{ marginTop: "3px" }}>
                <span
                  style={{
                    fontSize: "10px",
                    color: COLORS.primary,
                    background: COLORS.lightGreen,
                    borderRadius: "20px",
                    padding: "2px 8px",
                  }}
                >
                  {a.tag}
                </span>
              </div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 400,
                  color: COLORS.muted,
                  marginTop: "3px",
                  lineHeight: 1.5,
                }}
              >
                {a.note}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: "24px" }} />
    </div>
  );
}
