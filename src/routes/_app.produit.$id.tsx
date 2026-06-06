import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Heart, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { PRODUCTS } from "@/lib/aimesee-data";
import { favStore, useFavorites } from "@/lib/favorites-store";

export const Route = createFileRoute("/_app/produit/$id")({
  component: ProductSheet,
});

const FILTERS = [
  { id: "ecologique", label: "🌿 Écologique" },
  { id: "france", label: "🇫🇷 Made in France" },
  { id: "equitable", label: "🤝 Équitable" },
  { id: "independant", label: "🏢 Indépendant" },
];

function ProductSheet() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const product = PRODUCTS[id] ?? PRODUCTS.nutella;
  const favorites = useFavorites();
  const isFav = favorites.has(product.id);
  const [activeFilter, setActiveFilter] = useState<string>("ecologique");

  const filtered = useMemo(
    () => product.alternatives.filter((a) => a.filters.includes(activeFilter)),
    [product, activeFilter],
  );

  return (
    <div>
      {/* Sticky header */}
      <div
        className="sticky top-0 bg-background z-10 px-5 pt-3 pb-3"
        style={{ borderBottom: "0.5px solid var(--border)" }}
      >
        <button
          onClick={() => navigate({ to: "/" })}
          className="flex items-center gap-1 mb-3"
          style={{ color: "var(--muted-text)", fontSize: "13px" }}
        >
          <ArrowLeft size={16} />
          Retour
        </button>

        <div className="flex items-center gap-3">
          <div
            style={{
              width: "44px",
              height: "44px",
              background: "var(--border)",
              borderRadius: "10px",
            }}
          />
          <div className="flex-1 min-w-0">
            <div
              style={{ fontSize: "18px", fontWeight: 500, color: "var(--dark-text)" }}
            >
              {product.name}
            </div>
            <div style={{ fontSize: "13px", color: "var(--muted-text)" }}>
              {product.brand} · {product.country}
            </div>
          </div>
          <button onClick={() => favStore.toggle(product.id)} aria-label="favori">
            <Heart
              size={22}
              color="var(--primary)"
              fill={isFav ? "var(--primary)" : "none"}
              strokeWidth={1.75}
            />
          </button>
        </div>
      </div>

      {/* Facts */}
      <div className="px-5 pt-5">
        <p
          className="uppercase mb-3"
          style={{
            fontSize: "11px",
            fontWeight: 500,
            color: "var(--primary)",
            letterSpacing: "0.8px",
          }}
        >
          Les faits
        </p>

        <div className="flex flex-col" style={{ gap: "10px" }}>
          {product.facts.map((f) => (
            <div
              key={f.category}
              style={{
                background: "white",
                border: "0.5px solid var(--border)",
                borderRadius: "14px",
                padding: "14px",
              }}
            >
              <div
                className="flex items-center gap-1.5 mb-1.5"
                style={{ fontSize: "13px", fontWeight: 500, color: "var(--primary)" }}
              >
                <span style={{ fontSize: "14px" }}>{f.emoji}</span>
                <span>{f.category}</span>
              </div>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--body-text)",
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                {f.text}
              </p>
              <div
                className="flex items-center gap-1 mt-2"
                style={{ fontSize: "12px", color: "var(--placeholder)" }}
              >
                <ExternalLink size={14} />
                <span>
                  {f.source} · {f.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-6 mb-5" style={{ borderTop: "0.5px solid var(--border)", marginInline: "12px" }} />

      {/* Similar products */}
      <div className="px-5">
        <p
          className="uppercase mb-3"
          style={{
            fontSize: "11px",
            fontWeight: 500,
            color: "var(--primary)",
            letterSpacing: "0.8px",
          }}
        >
          Produits similaires
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {FILTERS.map((f) => {
            const active = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  background: active ? "var(--primary)" : "var(--surface)",
                  border: active ? "0.5px solid var(--primary)" : "0.5px solid var(--border)",
                  color: active ? "white" : "var(--muted-text)",
                  borderRadius: "20px",
                  height: "34px",
                  padding: "0 14px",
                  fontSize: "12px",
                  fontWeight: active ? 500 : 400,
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          {filtered.length === 0 && (
            <p style={{ fontSize: "13px", color: "var(--muted-text)" }}>
              Aucune alternative dans cette catégorie.
            </p>
          )}
          {filtered.map((a) => (
            <Link
              key={a.id}
              to="/produit/$id"
              params={{ id: "nutella" }}
              className="flex items-center gap-3"
              style={{
                border: "0.5px solid var(--border)",
                borderRadius: "14px",
                padding: "14px",
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--light-green)",
                  borderRadius: "8px",
                  fontSize: "18px",
                  color: "var(--primary)",
                }}
              >
                {a.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  style={{ fontSize: "14px", fontWeight: 500, color: "var(--dark-text)" }}
                >
                  {a.name}
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span
                    style={{
                      background: "var(--light-green)",
                      color: "var(--primary)",
                      borderRadius: "20px",
                      padding: "2px 8px",
                      fontSize: "10px",
                    }}
                  >
                    {a.tag}
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--muted-text)" }}>
                    {a.note}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
