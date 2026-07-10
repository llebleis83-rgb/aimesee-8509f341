import { createFileRoute, Link } from "@tanstack/react-router";
import { type ReactNode, type ElementType } from "react";
import {
  ArrowLeft,
  Building2,
  ChevronRight,
  Clock,
  ExternalLink,
  Cookie,
  Droplets,
  Droplet,
  Milk,
  Baby,
  Shirt,
  CupSoda,
  Sparkles,
  Sofa,
} from "lucide-react";

import { getBrandById } from "@/lib/mockBrands";
import { getProductsByBrandId } from "@/lib/mockProducts";
import { CATEGORY_LABEL, type ProductFact, type ShareholderNode } from "@/lib/types";
import { ProductThumb } from "@/components/ProductThumb";


export const Route = createFileRoute("/brand/$brandId")({
  component: BrandPage,
});

const C = {
  bg: "#F4F7F4",
  border: "#DDE8DD",
  primary: "#5B8C6A",
  lightGreen: "#EAF3DE",
  dark: "#1A2E1A",
  muted: "#7A9A7A",
  faint: "#AAC0AA",
};

const FONT = "'DM Sans', system-ui, sans-serif";

const ROW_ICON: Record<string, ElementType> = {
  alimentation: Cookie,
  boissons: CupSoda,
  "hygiene-soins": Droplets,
  cosmetiques: Sparkles,
  "entretien-maison": Sofa,
  "mode-textile": Shirt,
};

// Per-product icon overrides (subsidiary-style icons).
const PRODUCT_ICON: Record<string, ElementType> = {
  evian: Droplet,
  volvic: Droplet,
  activia: Milk,
  bledina: Baby,
  aptamil: Baby,
};


function SourceLine({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        fontFamily: FONT,
        fontSize: "11px",
        color: C.faint,
        background: C.bg,
        borderRadius: "20px",
        padding: "3px 10px",
      }}
    >
      <ExternalLink size={10} strokeWidth={1.75} />
      <span>{children}</span>
    </div>
  );
}

function EmptyState() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        padding: "16px 0",
      }}
    >
      <Clock size={20} color={C.faint} strokeWidth={1.75} />
      <span style={{ fontFamily: FONT, fontSize: "13px", fontWeight: 400, color: C.faint }}>
        Données en cours de collecte
      </span>
      <span style={{ fontFamily: FONT, fontSize: "12px", fontWeight: 400, color: C.faint }}>
        Cette section sera disponible prochainement.
      </span>
    </div>
  );
}

function FactRow({ fact, last }: { fact: ProductFact; last?: boolean }) {
  return (
    <div style={{ marginBottom: last ? 0 : "20px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <div
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: C.border,
            marginTop: "7px",
            flexShrink: 0,
          }}
        />
        <p
          style={{
            fontFamily: FONT,
            fontSize: "13px",
            fontWeight: 400,
            color: "#3A503A",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {fact.text}
        </p>
      </div>
      <div style={{ marginTop: "6px" }}>
        <SourceLine>
          {fact.source_name} · {fact.source_year}
        </SourceLine>
      </div>
    </div>
  );
}

function FactsList({ facts }: { facts: ProductFact[] }) {
  if (facts.length === 0) return <EmptyState />;
  return (
    <>
      {facts.map((f, i, arr) => (
        <FactRow key={i} fact={f} last={i === arr.length - 1} />
      ))}
    </>
  );
}

function SubLabel({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: FONT,
        fontSize: "12px",
        fontWeight: 400,
        color: C.faint,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        margin: "18px 0 10px",
      }}
    >
      {children}
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
            return (
              <TreeRow
                key={`${d.name}-${i}`}
                indent
                left={d.name}
                right={right}
                rightStrong={rightStrong}
              />
            );
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

function BrandPage() {
  const { brandId } = Route.useParams();
  const brand = getBrandById(brandId);
  const products = getProductsByBrandId(brandId);
  

  if (!brand) {
    return (
      <div
        style={{
          fontFamily: FONT,
          background: "white",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: C.muted,
        }}
      >
        Marque introuvable
      </div>
    );
  }

  const stats = [
    { value: "27,6Md€", label: "Chiffre d'affaires 2023" },
    { value: "99 000", label: "Employés dans le monde" },
    { value: "120", label: "Pays de présence" },
  ];
  const shareholders = [
    { name: "BlackRock", detail: "États-Unis", percentage: "8,2%", faint: false },
    { name: "Artisan Partners", detail: "États-Unis", percentage: "5,1%", faint: false },
    { name: "Flottant public", detail: "Bourse de Paris", percentage: "86,7%", faint: true },
  ];


  return (
    <div
      style={{
        fontFamily: FONT,
        background: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          display: "flex",
          flexDirection: "column",
          background: "white",
        }}
      >
        {/* Sticky header */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            background: "white",
            borderBottom: `0.5px solid ${C.border}`,
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            height: "54px",
          }}
        >
          <button
            onClick={() => window.history.back()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontFamily: FONT,
              fontSize: "15px",
              fontWeight: 500,
              color: C.muted,
              background: "transparent",
              border: "none",
              padding: "10px 8px",
              marginLeft: "-8px",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={16} strokeWidth={1.75} />
            Retour
          </button>
        </div>

        {/* Hero */}
        <div
          style={{
            height: "100px",
            padding: "16px",
            background: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              background: C.lightGreen,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Building2 size={28} color={C.primary} strokeWidth={1.75} />
          </div>
          <div
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              paddingLeft: "14px",
            }}
          >
            <div style={{ fontSize: "18px", fontWeight: 500, color: C.dark, lineHeight: 1.25 }}>
              {brand.name}
            </div>
            <div style={{ fontSize: "13px", fontWeight: 400, color: C.muted }}>{brand.country}</div>
          </div>
        </div>

        {/* Key stats */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "14px",
            borderTop: `0.5px solid ${C.border}`,
            borderBottom: `0.5px solid ${C.border}`,
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                flex: 1,
                background: C.bg,
                border: `0.5px solid ${C.border}`,
                borderRadius: "12px",
                padding: "10px 8px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "15px", fontWeight: 500, color: C.dark }}>{s.value}</div>
              <div
                style={{
                  fontSize: "9px",
                  fontWeight: 400,
                  color: C.muted,
                  marginTop: "3px",
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Ownership tree */}
        <div
          style={{
            fontSize: "10px",
            fontWeight: 500,
            color: C.faint,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            padding: "14px 14px 10px",
          }}
        >
          Structure actionnariale
        </div>
        <div style={{ padding: "0 14px 4px" }}>
          {/* Root */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: C.lightGreen,
              border: `0.5px solid ${C.primary}`,
              borderRadius: "10px",
              padding: "8px 12px",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "7px",
                background: C.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Building2 size={13} color="#FFFFFF" strokeWidth={2} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: "12px", fontWeight: 500, color: C.dark }}>
                {brand.name} SA
              </div>
              <div style={{ fontSize: "10px", color: C.muted }}>Siège social · Paris, France</div>
            </div>
            <div style={{ fontSize: "12px", fontWeight: 500, color: C.primary }}>CAC 40</div>
          </div>

          {/* Vertical trunk */}
          <div style={{ width: "2px", height: "18px", background: C.border, margin: "0 auto" }} />

          {/* Horizontal spanning line */}
          <div
            style={{
              height: "1px",
              background: C.border,
              marginLeft: `${100 / (shareholders.length * 2)}%`,
              marginRight: `${100 / (shareholders.length * 2)}%`,
            }}
          />

          {/* Children */}
          <div style={{ display: "flex", gap: "8px" }}>
            {shareholders.map((s) => (
              <div
                key={s.name}
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    width: "2px",
                    height: "14px",
                    background: C.border,
                    margin: "0 auto",
                  }}
                />
                <div
                  style={{
                    background: s.faint ? C.bg : "#FFFFFF",
                    border: `0.5px solid ${s.faint ? C.border : C.primary}`,
                    borderRadius: "10px",
                    padding: "7px 10px",
                  }}
                >
                  <div style={{ fontSize: "11px", fontWeight: 500, color: C.dark }}>{s.name}</div>
                  <div style={{ fontSize: "9px", color: C.muted, marginTop: "2px" }}>
                    {s.detail}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      color: C.primary,
                      marginTop: "3px",
                    }}
                  >
                    {s.percentage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontFamily: FONT,
            fontSize: "10px",
            color: C.faint,
            padding: "10px 14px 16px",
          }}
        >
          <ExternalLink size={10} strokeWidth={1.75} />
          <span>SEC Filings · Euronext · 2024</span>
        </div>


        {/* Products section */}
        <div
          style={{
            fontSize: "11px",
            fontWeight: 400,
            color: C.faint,
            letterSpacing: "0.5px",
            padding: "16px 16px 8px",
          }}
        >
          PRODUITS DE CETTE MARQUE
        </div>
        <div>
          {products.map((p) => {
            const Icon = ROW_ICON[p.category_slug] || Cookie;
            const categoryLabel = CATEGORY_LABEL[p.category_slug] ?? p.category_slug;
            return (
              <Link
                key={p.id}
                to="/produit/$id"
                params={{ id: p.id }}
                className="flex items-center"
                style={{
                  width: "100%",
                  height: "68px",
                  gap: "14px",
                  padding: "0 16px",
                  borderBottom: `0.5px solid ${C.bg}`,
                  background: "white",
                  textDecoration: "none",
                }}
              >
                <ProductThumb
                  src={p.thumbnail_url}
                  alt={p.name}
                  Icon={Icon}
                  width={44}
                  height={44}
                  radius={10}
                />
                <div className="flex-1 min-w-0">
                  <div style={{ fontSize: "15px", fontWeight: 500, color: C.dark }}>{p.name}</div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: C.muted,
                      marginTop: "4px",
                    }}
                  >
                    {categoryLabel}
                  </div>
                </div>
                <ChevronRight size={16} color={C.border} strokeWidth={1.75} />
              </Link>
            );
          })}
          <div style={{ height: "32px" }} />
        </div>
      </div>
    </div>
  );
}
