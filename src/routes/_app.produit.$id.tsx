import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
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
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { getProductById } from "@/lib/mockProducts";
import { favStore, useFavorites } from "@/lib/favorites-store";
import { historyStore } from "@/lib/history-store";
import { CATEGORY_LABEL, type ProductFact, type ShareholderNode } from "@/lib/types";

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

function FactRow({ fact, last }: { fact: ProductFact; last?: boolean }) {
  return (
    <div
      style={{
        padding: "8px 0",
        borderBottom: last ? "none" : `0.5px solid ${C.border}`,
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
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
          {fact.text}
        </p>
      </div>
      <SourceLine>
        {fact.source_name} · {fact.source_year}
      </SourceLine>
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

function flattenTree(node: ShareholderNode): ShareholderNode[] {
  const out: ShareholderNode[] = [];
  const walk = (n: ShareholderNode) => {
    n.children?.forEach((c) => {
      out.push(c);
      walk(c);
    });
  };
  walk(node);
  return out;
}

function nodeRight(n: ShareholderNode): { right: string; rightStrong?: boolean } {
  if (n.percentage != null) return { right: `${n.percentage}%`, rightStrong: true };
  const parts: string[] = [n.type];
  if (n.country) parts.push(n.country);
  return { right: parts.join(" · ") };
}

function ActionnariatBlock({ root }: { root: ShareholderNode }) {
  const descendants = flattenTree(root);
  const sourceNode = [root, ...descendants].find((n) => n.source_name);
  return (
    <>
      <TreeRow bgGreen left={root.name} right={root.type} />
      {descendants.length > 0 && (
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "6px",
              top: "18px",
              bottom: "18px",
              width: "1px",
              background: C.border,
            }}
          />
          {descendants.map((d, i) => {
            const { right, rightStrong } = nodeRight(d);
            return <TreeRow key={`${d.name}-${i}`} indent left={d.name} right={right} rightStrong={rightStrong} />;
          })}
        </div>
      )}
      {sourceNode?.source_name && (
        <SourceLine>
          {sourceNode.source_name}
          {sourceNode.source_year ? ` · ${sourceNode.source_year}` : ""}
        </SourceLine>
      )}
    </>
  );
}

const FILTERS: { id: string; label: string; key: "is_ecological" | "is_made_in_france" | "is_fair_trade" | "is_independent"; tag: string }[] = [
  { id: "ecologique", label: "Écologique", key: "is_ecological", tag: "Écologique" },
  { id: "france", label: "Made in France", key: "is_made_in_france", tag: "Made in France" },
  { id: "equitable", label: "Équitable", key: "is_fair_trade", tag: "Équitable" },
  { id: "independant", label: "Indépendant", key: "is_independent", tag: "Indépendant" },
];

function ProductSheet() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const favorites = useFavorites();
  const [activeFilter, setActiveFilter] = useState<string>("ecologique");
  const [open, setOpen] = useState<Record<string, boolean>>({ actionnariat: true });
  const [loading, setLoading] = useState(true);
  const product = getProductById(id);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      if (!product) {
        navigate({ to: "/not-found" });
        return;
      }
      historyStore.record(product.id);
      setLoading(false);
    }, 150);
    return () => clearTimeout(t);
  }, [id, product, navigate]);

  if (loading || !product) {
    return (
      <div
        className="flex items-center justify-center"
        style={{
          height: "calc(100vh - 64px)",
          background: "white",
          fontFamily: FONT,
        }}
      >
        <Loader2 size={32} color={C.primary} strokeWidth={1.75} className="animate-spin" />
      </div>
    );
  }

  const isFav = favorites.has(product.id);
  const toggle = (sid: string) => setOpen((o) => ({ ...o, [sid]: !o[sid] }));

  const sections: { id: string; label: string; Icon: LucideIcon; content: ReactNode }[] = [
    {
      id: "actionnariat",
      label: "Actionnariat",
      Icon: Building2,
      content: <ActionnariatBlock root={product.sections.actionnariat} />,
    },
    {
      id: "politique",
      label: "Politique & Lobbying",
      Icon: Landmark,
      content: (
        <>
          {product.sections.politique.facts.map((f, i, arr) => (
            <FactRow key={i} fact={f} last={i === arr.length - 1} />
          ))}
        </>
      ),
    },
    {
      id: "ecologie",
      label: "Écologie",
      Icon: Leaf,
      content: (
        <>
          {product.sections.ecologie.facts.map((f, i, arr) => (
            <FactRow key={i} fact={f} last={i === arr.length - 1} />
          ))}
        </>
      ),
    },
    {
      id: "fabrication",
      label: "Fabrication",
      Icon: MapPin,
      content: (
        <>
          {product.sections.fabrication.facts.map((f, i, arr) => (
            <FactRow key={i} fact={f} last={i === arr.length - 1} />
          ))}
        </>
      ),
    },
    {
      id: "travail",
      label: "Conditions de travail",
      Icon: Users,
      content: (
        <>
          {product.sections.conditions_travail.facts.map((f, i, arr) => (
            <FactRow key={i} fact={f} last={i === arr.length - 1} />
          ))}
        </>
      ),
    },
    {
      id: "scandales",
      label: "Scandales",
      Icon: Newspaper,
      content: (
        <>
          {product.sections.scandales.facts.map((f, i, arr) => (
            <FactRow key={i} fact={f} last={i === arr.length - 1} />
          ))}
        </>
      ),
    },
  ];

  const activeFilterDef = FILTERS.find((f) => f.id === activeFilter)!;
  const alternatives = product.similar_product_ids
    .map((sid) => getProductById(sid))
    .filter((p): p is NonNullable<typeof p> => !!p)
    .filter((p) => p[activeFilterDef.key]);

  const categoryLabel = CATEGORY_LABEL[product.category_slug] ?? product.category_slug;

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
              {product.brand} · {product.country} · {categoryLabel}
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
        {sections.map(({ id: sid, label, Icon, content }) => {
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

        {alternatives.map((a) => (
          <Link
            key={a.id}
            to="/produit/$id"
            params={{ id: a.id }}
            style={{
              textDecoration: "none",
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
                  {activeFilterDef.tag}
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
                {a.brand} · {a.country}
              </div>
            </div>
          </Link>
        ))}

        <div style={{ height: "24px" }} />
      </div>
    </div>
  );
}
