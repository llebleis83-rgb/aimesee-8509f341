import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  ArrowLeft,
  Search,
  ChevronRight,
  PackageSearch,
  Droplets,
  Shirt,
  CupSoda,
  Sparkles,
  Sofa,
  Utensils,
  Building2,
} from "lucide-react";
import { getProductsByCategory } from "@/lib/mockProducts";
import { getBrandById } from "@/lib/mockBrands";
import { CATEGORY_LABEL, type Brand, type Product } from "@/lib/types";

export const Route = createFileRoute("/_app/categories/$slug")({
  component: CategoryResult,
});

const CATEGORY_ICON: Record<string, React.ElementType> = {
  Alimentation: Utensils,
  Boissons: CupSoda,
  "Hygiène & Soins": Droplets,
  Cosmétiques: Sparkles,
  "Entretien maison": Sofa,
  "Mode & Textile": Shirt,
};

type BrandGroup = { brand: Brand | undefined; brandId: string; products: Product[] };

function CategoryResult() {
  const { slug } = Route.useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const categoryName = CATEGORY_LABEL[slug] || slug;
  const FallbackIcon = CATEGORY_ICON[categoryName] || PackageSearch;

  const allProducts = useMemo(() => getProductsByCategory(slug), [slug]);

  const allBrandGroups = useMemo<BrandGroup[]>(() => {
    const map = new Map<string, Product[]>();
    for (const p of allProducts) {
      const arr = map.get(p.brand_id);
      if (arr) arr.push(p);
      else map.set(p.brand_id, [p]);
    }
    return Array.from(map.entries()).map(([brandId, products]) => ({
      brandId,
      brand: getBrandById(brandId),
      products,
    }));
  }, [allProducts]);

  const filtered = useMemo<BrandGroup[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allBrandGroups;
    return allBrandGroups.filter((g) => {
      if (g.brand?.name.toLowerCase().includes(q)) return true;
      return g.products.some((p) => p.name.toLowerCase().includes(q));
    });
  }, [allBrandGroups, query]);

  const isEmpty = filtered.length === 0;

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
      {/* Sticky header */}
      <header
        className="shrink-0"
        style={{
          position: "sticky",
          top: 0,
          background: "#FFFFFF",
          zIndex: 10,
          padding: "16px 20px 12px",
        }}
      >
        <button
          onClick={() => window.history.back()}
          className="flex items-center"
          style={{
            background: "transparent",
            border: "none",
            color: "#7A9A7A",
            fontSize: "14px",
            fontWeight: 400,
            padding: "10px 0",
            cursor: "pointer",
            gap: "4px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <ArrowLeft size={16} strokeWidth={1.75} />
          Retour
        </button>
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 500,
            color: "#1A2E1A",
            letterSpacing: "-0.3px",
            marginTop: "4px",
          }}
        >
          {categoryName}
        </h1>
        <p style={{ fontSize: "13px", fontWeight: 400, color: "#7A9A7A", marginTop: "2px" }}>
          {allBrandGroups.length} marque{allBrandGroups.length > 1 ? "s" : ""}
        </p>

        {/* Search bar */}
        <div
          className="flex items-center"
          style={{
            height: "48px",
            background: "#F4F7F4",
            border: "0.5px solid #DDE8DD",
            borderRadius: "12px",
            marginTop: "16px",
            padding: "0 14px",
            gap: "10px",
          }}
        >
          <Search size={18} color="#7A9A7A" strokeWidth={1.75} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Rechercher dans ${categoryName}...`}
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
      </header>

      {/* Scrollable list */}
      <div
        className="cat-scroll flex-1"
        style={{
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "#DDE8DD transparent",
        }}
      >
        {isEmpty ? (
          <div
            className="flex flex-col items-center justify-center"
            style={{ height: "100%", padding: "0 24px" }}
          >
            <FallbackIcon size={64} color="#DDE8DD" strokeWidth={1.5} />
            <div
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#1A2E1A",
                marginTop: "16px",
                textAlign: "center",
              }}
            >
              Aucun produit trouvé
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 400,
                color: "#7A9A7A",
                marginTop: "8px",
                textAlign: "center",
                maxWidth: "240px",
                lineHeight: 1.6,
              }}
            >
              Essaie une autre recherche ou scanne un nouveau produit.
            </div>
            <button
              onClick={() => navigate({ to: "/" })}
              style={{
                height: "48px",
                background: "#5B8C6A",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#FFFFFF",
                padding: "0 24px",
                marginTop: "24px",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Scanner un produit
            </button>
          </div>
        ) : (
          <div>
            {filtered.map((g) => {
              const brandName = g.brand?.name ?? g.brandId;
              const country = g.brand?.country ?? "";
              const count = g.products.length;
              const handleClick = () => {
                navigate({ to: "/brand/$brandId", params: { brandId: g.brandId } });
              };
              return (
                <button
                  key={g.brandId}
                  onClick={handleClick}
                  className="flex items-center"
                  style={{
                    width: "100%",
                    height: "68px",
                    gap: "14px",
                    padding: "0 16px",
                    borderBottom: "0.5px solid #F4F7F4",
                    background: "#FFFFFF",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "#EAF3DE",
                      borderRadius: "10px",
                    }}
                  >
                    <Building2 size={20} color="#5B8C6A" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A2E1A" }}>
                      {brandName}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: 400,
                        color: "#7A9A7A",
                        marginTop: "4px",
                      }}
                    >
                      {country}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#AAC0AA",
                      flexShrink: 0,
                    }}
                  >
                    {count} produit{count > 1 ? "s" : ""}
                  </span>
                  <ChevronRight size={16} color="#DDE8DD" strokeWidth={1.75} />
                </button>
              );
            })}
            <div style={{ height: "24px" }} />
          </div>
        )}
      </div>

      <style>{`
        .cat-scroll::-webkit-scrollbar { width: 3px; }
        .cat-scroll::-webkit-scrollbar-track { background: transparent; }
        .cat-scroll::-webkit-scrollbar-thumb { background: #DDE8DD; border-radius: 3px; }
      `}</style>
    </div>
  );
}
