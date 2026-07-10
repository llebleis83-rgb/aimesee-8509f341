import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Building2,
  ChevronRight,
  ExternalLink,
  Droplet,
  Milk,
  Baby,
} from "lucide-react";
import type { ElementType } from "react";

export const Route = createFileRoute("/_app/entreprise/$companyId")({
  component: CompanyPage,
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

type Company = {
  name: string;
  sector: string;
  country: string;
  founded: number;
  status: string;
  stats: { value: string; label: string }[];
  headquarters: string;
  index: string;
  shareholders: {
    name: string;
    detail: string;
    percentage: string;
    faint?: boolean;
  }[];
  ownershipSource: string;
  subsidiaries: {
    id: string;
    name: string;
    category: string;
    country: string;
    Icon: ElementType;
  }[];
  subsidiariesSource: string;
};

const COMPANIES: Record<string, Company> = {
  danone: {
    name: "Danone",
    sector: "Agroalimentaire",
    country: "France",
    founded: 1919,
    status: "Société cotée — CAC 40",
    stats: [
      { value: "27,6Md€", label: "Chiffre d'affaires 2023" },
      { value: "99 000", label: "Employés dans le monde" },
      { value: "120", label: "Pays de présence" },
    ],
    headquarters: "Siège social · Paris, France",
    index: "CAC 40",
    shareholders: [
      { name: "BlackRock", detail: "États-Unis", percentage: "8,2%" },
      { name: "Artisan Partners", detail: "États-Unis", percentage: "5,1%" },
      { name: "Flottant public", detail: "Bourse de Paris", percentage: "86,7%", faint: true },
    ],
    ownershipSource: "SEC Filings · Euronext · 2024",
    subsidiaries: [
      { id: "evian", name: "Evian", category: "Eau minérale", country: "France", Icon: Droplet },
      { id: "activia", name: "Activia", category: "Produits laitiers", country: "International", Icon: Milk },
      { id: "bledina", name: "Blédina", category: "Nutrition infantile", country: "France", Icon: Baby },
    ],
    subsidiariesSource: "OpenCorporates · 2024",
  },
};

function SectionLabel({ children, mt = 0 }: { children: React.ReactNode; mt?: number }) {
  return (
    <div
      style={{
        fontFamily: FONT,
        fontSize: "10px",
        fontWeight: 500,
        color: C.faint,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        padding: `${14 + mt}px 14px 10px`,
      }}
    >
      {children}
    </div>
  );
}

function SourceLine({ children, pb = 0 }: { children: React.ReactNode; pb?: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        fontFamily: FONT,
        fontSize: "10px",
        color: C.faint,
        padding: `10px 14px ${pb}px`,
      }}
    >
      <ExternalLink size={10} strokeWidth={1.75} />
      <span>{children}</span>
    </div>
  );
}

function CompanyPage() {
  const { companyId } = Route.useParams();
  const company = COMPANIES[companyId] ?? COMPANIES.danone;

  return (
    <div
      className="cmp-scroll"
      style={{
        fontFamily: FONT,
        background: "#FFFFFF",
        minHeight: "calc(100vh - 64px)",
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: `${C.border} transparent`,
      }}
    >
      {/* Sticky header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: C.bg,
          borderBottom: `0.5px solid ${C.border}`,
        }}
      >
        <button
          onClick={() => window.history.back()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontFamily: FONT,
            fontSize: "13px",
            fontWeight: 500,
            color: C.primary,
            background: "transparent",
            border: "none",
            padding: "10px 14px",
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
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "16px 14px",
          borderBottom: `0.5px solid ${C.border}`,
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "12px",
            background: C.lightGreen,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Building2 size={24} color={C.primary} strokeWidth={1.75} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: "18px", fontWeight: 500, color: C.dark, lineHeight: 1.2 }}>
            {company.name}
          </div>
          <div style={{ fontSize: "12px", fontWeight: 400, color: C.muted, marginTop: "3px" }}>
            {company.sector} · {company.country} · {company.founded}
          </div>
          <div
            style={{
              display: "inline-block",
              fontSize: "10px",
              color: C.primary,
              background: C.lightGreen,
              borderRadius: "20px",
              padding: "2px 10px",
              marginTop: "5px",
            }}
          >
            {company.status}
          </div>
        </div>
      </div>

      {/* Key stats */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          padding: "14px",
          borderBottom: `0.5px solid ${C.border}`,
        }}
      >
        {company.stats.map((s) => (
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
      <SectionLabel>Structure actionnariale</SectionLabel>
      <div style={{ padding: "0 14px 14px" }}>
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
            <div style={{ fontSize: "12px", fontWeight: 500, color: C.dark }}>{company.name}</div>
            <div style={{ fontSize: "10px", color: C.muted }}>{company.headquarters}</div>
          </div>
          <div style={{ fontSize: "12px", fontWeight: 500, color: C.primary }}>{company.index}</div>
        </div>

        {/* Vertical connector below root */}
        <div
          style={{
            width: "2px",
            height: "20px",
            background: C.border,
            margin: "0 auto",
          }}
        />

        {/* Horizontal line spanning children */}
        <div
          style={{
            position: "relative",
            height: "1px",
            background: C.border,
            marginLeft: `${100 / (company.shareholders.length * 2)}%`,
            marginRight: `${100 / (company.shareholders.length * 2)}%`,
          }}
        />

        {/* Children row */}
        <div style={{ display: "flex", gap: "8px" }}>
          {company.shareholders.map((s) => (
            <div key={s.name} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "stretch" }}>
              <div
                style={{
                  width: "2px",
                  height: "16px",
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
                <div style={{ fontSize: "9px", color: C.muted, marginTop: "2px" }}>{s.detail}</div>
                <div style={{ fontSize: "11px", fontWeight: 500, color: C.primary, marginTop: "3px" }}>
                  {s.percentage}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SourceLine>{company.ownershipSource}</SourceLine>

      {/* Subsidiaries */}
      <SectionLabel mt={8}>Filiales principales</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "0 14px 14px" }}>
        {company.subsidiaries.map((sub) => {
          const Icon = sub.Icon;
          return (
            <Link
              key={sub.id}
              to="/produit/$id"
              params={{ id: sub.id }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: C.bg,
                border: `0.5px solid ${C.border}`,
                borderRadius: "10px",
                padding: "8px 12px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "7px",
                  background: C.lightGreen,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={13} color={C.primary} strokeWidth={1.75} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "12px", fontWeight: 500, color: C.dark }}>{sub.name}</div>
                <div style={{ fontSize: "10px", color: C.muted, marginTop: "2px" }}>
                  {sub.category} · {sub.country}
                </div>
              </div>
              <ChevronRight size={14} color={C.border} strokeWidth={1.75} />
            </Link>
          );
        })}
      </div>
      <SourceLine pb={16}>{company.subsidiariesSource}</SourceLine>

      <style>{`
        .cmp-scroll::-webkit-scrollbar { width: 3px; }
        .cmp-scroll::-webkit-scrollbar-track { background: transparent; }
        .cmp-scroll::-webkit-scrollbar-thumb { background: #DDE8DD; border-radius: 3px; }
      `}</style>
    </div>
  );
}
