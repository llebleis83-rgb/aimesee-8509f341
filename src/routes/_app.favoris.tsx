import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Heart, Cookie, Droplets, Shirt, CupSoda, Sparkles, Sofa, Utensils } from "lucide-react";
import { getProductById } from "@/lib/mockProducts";
import { favStore, useFavorites } from "@/lib/favorites-store";
import { CATEGORY_LABEL } from "@/lib/types";

export const Route = createFileRoute("/_app/favoris")({
  component: Favoris,
});

const CATEGORY_ICON: Record<string, React.ElementType> = {
  alimentation: Cookie,
  boissons: CupSoda,
  "hygiene-soins": Droplets,
  cosmetiques: Sparkles,
  "entretien-maison": Sofa,
  "mode-textile": Shirt,
};

function Favoris() {
  const navigate = useNavigate();
  const favorites = useFavorites();
  const favProducts = Array.from(favorites)
    .map((id) => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => !!p);
  const isEmpty = favProducts.length === 0;

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
      <header style={{ padding: "32px 20px 28px", flexShrink: 0 }}>
        <h1 style={{ fontSize: "28px", fontWeight: 500, color: "#1A2E1A", letterSpacing: "-0.4px" }}>
          Favoris
        </h1>
        <p style={{ fontSize: "13px", color: "#7A9A7A", marginTop: "2px" }}>
          Tes produits sauvegardés
        </p>
      </header>

      <div
        className="favoris-scroll flex-1"
        style={{ overflowY: "auto", scrollbarWidth: "thin", scrollbarColor: "#DDE8DD transparent" }}
      >
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center" style={{ height: "100%", padding: "0 24px" }}>
            <Heart size={64} color="#DDE8DD" strokeWidth={1.5} />
            <div style={{ fontSize: "16px", fontWeight: 500, color: "#1A2E1A", marginTop: "16px", textAlign: "center" }}>
              Aucun favori pour l'instant
            </div>
            <div style={{ fontSize: "13px", fontWeight: 400, color: "#7A9A7A", marginTop: "8px", textAlign: "center", maxWidth: "240px", lineHeight: 1.6 }}>
              Sauvegarde des produits en appuyant sur le cœur lors d'une recherche.
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
              }}
            >
              Scanner un produit
            </button>
          </div>
        ) : (
          <div>
            {favProducts.map((p) => {
              const Icon = CATEGORY_ICON[p.category_slug] || Cookie;
              const categoryLabel = CATEGORY_LABEL[p.category_slug] ?? p.category_slug;
              return (
                <div
                  key={p.id}
                  className="flex items-center"
                  style={{
                    width: "100%",
                    height: "68px",
                    gap: "12px",
                    padding: "0 16px",
                    borderBottom: "0.5px solid #F4F7F4",
                    background: "#FFFFFF",
                  }}
                >
                  <Link
                    to="/produit/$id"
                    params={{ id: p.id }}
                    className="flex items-center flex-1"
                    style={{ gap: "14px", minWidth: 0, textDecoration: "none" }}
                  >
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{ width: "44px", height: "44px", background: "#EAF3DE", borderRadius: "10px" }}
                    >
                      <Icon size={20} color="#5B8C6A" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                        <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A2E1A" }}>{p.name}</div>
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: 400,
                            color: "#5B8C6A",
                            background: "#EAF3DE",
                            borderRadius: "20px",
                            padding: "2px 8px",
                            flexShrink: 0,
                          }}
                        >
                          {categoryLabel}
                        </span>
                      </div>
                      <div style={{ fontSize: "12px", fontWeight: 400, color: "#7A9A7A", marginTop: "4px" }}>
                        {p.brand} · {p.country}
                      </div>
                    </div>
                  </Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      favStore.toggle(p.id);
                    }}
                    aria-label="Retirer des favoris"
                    className="flex items-center justify-center shrink-0"
                    style={{ width: "32px", height: "32px", border: "none", background: "transparent", cursor: "pointer" }}
                  >
                    <Heart size={22} color="#5B8C6A" fill="#5B8C6A" strokeWidth={1.5} />
                  </button>
                </div>
              );
            })}
            <div style={{ height: "24px" }} />
          </div>
        )}
      </div>

      <style>{`
        .favoris-scroll::-webkit-scrollbar { width: 3px; }
        .favoris-scroll::-webkit-scrollbar-track { background: transparent; }
        .favoris-scroll::-webkit-scrollbar-thumb { background: #DDE8DD; border-radius: 3px; }
      `}</style>
    </div>
  );
}
