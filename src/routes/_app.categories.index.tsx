import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Utensils,
  CupSoda,
  Droplets,
  Sparkles,
  Sofa,
  Shirt,
  Laptop,
  Dumbbell,
  Gamepad2,
  Leaf,
  Search,
  ChevronRight,
  SmilePlus,
  Cookie,
  Building2,
} from "lucide-react";
import { searchProductsByName, mockProducts } from "@/lib/mockProducts";
import { getBrandById, searchBrandsByName } from "@/lib/mockBrands";

export const Route = createFileRoute("/_app/categories/")({
  validateSearch: (search: Record<string, unknown>) => ({
    focus: search.focus === "1" || search.focus === 1 ? "1" : undefined,
  }),
  component: Categories,
});

const AVAILABLE = [
  { icon: Utensils, label: "Alimentation", slug: "alimentation", emoji: "🍔" },
  { icon: CupSoda, label: "Boissons", slug: "boissons", emoji: "🥤" },
  { icon: Droplets, label: "Hygiène & Soins", slug: "hygiene-soins", emoji: "🧴" },
  { icon: Sparkles, label: "Cosmétiques", slug: "cosmetiques", emoji: "💄" },
  { icon: Sofa, label: "Entretien maison", slug: "entretien-maison", emoji: "🏠" },
  { icon: Shirt, label: "Mode & Textile", slug: "mode-textile", emoji: "👗" },
];

const COMING_SOON = [
  { icon: Laptop, label: "Tech & Électronique", emoji: "💻" },
  { icon: Dumbbell, label: "Sport & Outdoor", emoji: "⚽" },
  { icon: Gamepad2, label: "Jouets & Enfants", emoji: "🧸" },
  { icon: Leaf, label: "Bio & Écolo", emoji: "🌿" },
];

const CATEGORY_ICON: Record<string, React.ElementType> = {
  alimentation: Cookie,
  boissons: CupSoda,
  "hygiene-soins": Droplets,
  cosmetiques: Sparkles,
  "entretien-maison": Sofa,
  "mode-textile": Shirt,
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: "10px",
        fontWeight: 500,
        color: "#AAC0AA",
        textTransform: "uppercase",
        paddingLeft: "16px",
      }}
    >
      {children}
    </div>
  );
}

function AvailableRow({ icon: Icon, label, slug }: { icon: typeof Utensils; label: string; slug: string }) {
  return (
    <Link
      to="/categories/$slug"
      params={{ slug }}
      className="flex items-center"
      style={{
        width: "100%",
        height: "64px",
        background: "#FFFFFF",
        borderBottom: "0.5px solid #F4F7F4",
        textDecoration: "none",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: "40px",
          height: "40px",
          background: "#EAF3DE",
          borderRadius: "10px",
          marginLeft: "16px",
          flexShrink: 0,
        }}
      >
        <Icon size={20} color="#5B8C6A" strokeWidth={1.75} />
      </div>
      <span
        style={{
          fontSize: "15px",
          fontWeight: 500,
          color: "#1A2E1A",
          marginLeft: "14px",
          flex: 1,
          textAlign: "left",
        }}
      >
        {label}
      </span>
      <ChevronRight size={16} color="#DDE8DD" strokeWidth={1.75} style={{ marginRight: "16px", flexShrink: 0 }} />
    </Link>
  );
}

function ComingSoonRow({ icon: Icon, label }: { icon: typeof Utensils; label: string }) {
  return (
    <div
      className="flex items-center"
      style={{
        width: "100%",
        height: "64px",
        background: "#FFFFFF",
        borderBottom: "0.5px solid #F4F7F4",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: "40px",
          height: "40px",
          background: "#F4F7F4",
          borderRadius: "10px",
          marginLeft: "16px",
          flexShrink: 0,
        }}
      >
        <Icon size={20} color="#AAC0AA" strokeWidth={1.75} />
      </div>
      <span
        style={{
          fontSize: "15px",
          fontWeight: 500,
          color: "#AAC0AA",
          marginLeft: "14px",
          flex: 1,
          textAlign: "left",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: "10px",
          fontWeight: 400,
          color: "#7A9A7A",
          background: "#F4F7F4",
          border: "0.5px solid #DDE8DD",
          borderRadius: "20px",
          padding: "3px 10px",
          marginRight: "16px",
          flexShrink: 0,
        }}
      >
        Bientôt
      </span>
    </div>
  );
}

function Categories() {
  const { focus } = Route.useSearch();
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus === "1") inputRef.current?.focus();
  }, [focus]);

  const results = useMemo(() => searchProductsByName(q), [q]);
  const brandResults = useMemo(() => searchBrandsByName(q), [q]);
  const productCountByBrand = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of mockProducts) counts[p.brand_id] = (counts[p.brand_id] ?? 0) + 1;
    return counts;
  }, []);
  const hasQuery = q.trim().length > 0;
  const noResults = results.length === 0 && brandResults.length === 0;
  const showProductsLabel = brandResults.length > 0 && results.length > 0;

  return (
    <div style={{ background: "#FFFFFF", paddingBottom: "24px" }}>
      <header style={{ padding: "32px 20px 28px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 500, color: "#1A2E1A", letterSpacing: "-0.4px" }}>
          Explorer
        </h1>
      </header>

      <div
        className="flex items-center"
        style={{
          height: "48px",
          background: "#F4F7F4",
          border: "0.5px solid #DDE8DD",
          borderRadius: "12px",
          margin: "16px 16px 8px",
          padding: "0 14px",
          gap: "10px",
        }}
      >
        <Search size={18} color="#7A9A7A" strokeWidth={1.75} />
        <input
          ref={inputRef}
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher un produit ou une catégorie..."
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            fontSize: "14px",
            fontWeight: 400,
            color: "#1A2E1A",
            fontFamily: "'DM Sans', sans-serif",
          }}
        />
      </div>

      {!hasQuery ? (
        <>
          {AVAILABLE.map((c) => (
            <AvailableRow key={c.label} icon={c.icon} label={c.label} slug={c.slug} />
          ))}

          <div style={{ marginTop: "16px", marginBottom: "4px" }}>
            <SectionLabel>Bientôt disponible</SectionLabel>
          </div>
          {COMING_SOON.map((c) => (
            <ComingSoonRow key={c.label} icon={c.icon} label={c.label} />
          ))}
        </>
      ) : noResults ? (
        <div
          className="flex flex-col items-center justify-center"
          style={{ padding: "64px 24px 0" }}
        >
          <SmilePlus size={48} color="#DDE8DD" strokeWidth={1.5} />
          <div style={{ fontSize: "16px", fontWeight: 500, color: "#1A2E1A", marginTop: "16px", textAlign: "center" }}>
            Aucun produit trouvé
          </div>
          <div style={{ fontSize: "13px", fontWeight: 400, color: "#7A9A7A", marginTop: "8px", textAlign: "center" }}>
            Essaie un autre nom ou scanne le code-barres
          </div>
        </div>
      ) : (
        <div style={{ marginTop: "8px" }}>
          {results.length > 0 && (
            <>
              {showProductsLabel && (
                <div style={{ marginTop: "8px", marginBottom: "4px" }}>
                  <SectionLabel>Produits</SectionLabel>
                </div>
              )}
              {results.map((p) => {
                const Icon = CATEGORY_ICON[p.category_slug] || Cookie;
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
                      borderBottom: "0.5px solid #F4F7F4",
                      background: "#FFFFFF",
                      textDecoration: "none",
                    }}
                  >
                    {p.thumbnail_url ? (
                      <img
                        src={p.thumbnail_url}
                        alt={p.name}
                        className="shrink-0"
                        style={{ width: "44px", height: "44px", borderRadius: "10px", objectFit: "cover" }}
                      />
                    ) : (
                      <div
                        className="flex items-center justify-center shrink-0"
                        style={{ width: "44px", height: "44px", background: "#EAF3DE", borderRadius: "10px" }}
                      >
                        <Icon size={20} color="#5B8C6A" strokeWidth={1.5} />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A2E1A" }}>{p.name}</div>
                      <div style={{ fontSize: "12px", fontWeight: 400, color: "#7A9A7A", marginTop: "4px" }}>
                        {getBrandById(p.brand_id)?.name ?? ""} · {p.country}
                      </div>
                    </div>
                    <ChevronRight size={18} color="#DDE8DD" strokeWidth={1.5} />
                  </Link>
                );
              })}
            </>
          )}

          {brandResults.length > 0 && (
            <>
              <div style={{ marginTop: "16px", marginBottom: "4px" }}>
                <SectionLabel>Marques</SectionLabel>
              </div>
              {brandResults.map((b) => {
                const count = productCountByBrand[b.id] ?? 0;
                return (
                  <Link
                    key={b.id}
                    to="/marque/$brandId"
                    params={{ brandId: b.id }}
                    className="flex items-center"
                    style={{
                      width: "100%",
                      height: "68px",
                      gap: "14px",
                      padding: "0 16px",
                      borderBottom: "0.5px solid #F4F7F4",
                      background: "#FFFFFF",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{ width: "44px", height: "44px", background: "#EAF3DE", borderRadius: "10px" }}
                    >
                      <Building2 size={20} color="#5B8C6A" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A2E1A" }}>{b.name}</div>
                      <div style={{ fontSize: "12px", fontWeight: 400, color: "#7A9A7A", marginTop: "4px" }}>
                        {b.country}
                      </div>
                    </div>
                    <span style={{ fontSize: "12px", fontWeight: 400, color: "#AAC0AA", marginRight: "8px" }}>
                      {count} produit{count > 1 ? "s" : ""}
                    </span>
                    <ChevronRight size={18} color="#DDE8DD" strokeWidth={1.5} />
                  </Link>
                );
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
}

