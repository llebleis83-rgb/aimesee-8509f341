import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import {
  ArrowLeft,
  ChevronRight,
  PackageSearch,
  Cookie,
  Droplets,
  Shirt,
  Sparkles,
  Sofa,
  Building2,
} from "lucide-react";
import { getProductsByBrandId } from "@/lib/mockProducts";
import { getBrandById } from "@/lib/mockBrands";
import { ProductThumb } from "@/components/ProductThumb";

export const Route = createFileRoute("/_app/marque/$brandId")({
  component: BrandResult,
});

const ROW_ICON: Record<string, React.ElementType> = {
  alimentation: Cookie,
  boissons: Droplets,
  "hygiene-soins": Droplets,
  cosmetiques: Sparkles,
  "entretien-maison": Sofa,
  "mode-textile": Shirt,
};

function BrandResult() {
  const { brandId } = Route.useParams();
  const navigate = useNavigate();

  const brand = getBrandById(brandId);
  const products = useMemo(() => getProductsByBrandId(brandId), [brandId]);
  const isEmpty = products.length === 0;

  const brandName = brand?.name ?? brandId;

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
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
          {brandName}
        </h1>
        <p style={{ fontSize: "13px", fontWeight: 400, color: "#7A9A7A", marginTop: "2px" }}>
          {products.length} produit{products.length > 1 ? "s" : ""}
        </p>
      </header>

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
            <PackageSearch size={64} color="#DDE8DD" strokeWidth={1.5} />
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
            {products.map((p) => {
              const Icon = ROW_ICON[p.category_slug] || Cookie;
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
                  <ProductThumb
                    src={p.thumbnail_url}
                    alt={p.name}
                    Icon={Icon}
                    width={44}
                    height={44}
                    radius={8}
                  />
                  <div className="flex-1 min-w-0">
                    <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A2E1A" }}>
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: 400,
                        color: "#7A9A7A",
                        marginTop: "4px",
                      }}
                    >
                      {brandName} · {p.country}
                    </div>
                  </div>
                  <ChevronRight size={16} color="#DDE8DD" strokeWidth={1.75} />
                </Link>
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
