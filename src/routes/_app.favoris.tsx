import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { FAVORITES_MOCK } from "@/lib/aimesee-data";

export const Route = createFileRoute("/_app/favoris")({
  component: Favoris,
});

function Favoris() {
  return (
    <div className="px-5 pt-12">
      <h1 style={{ fontSize: "17px", fontWeight: 500, color: "var(--dark-text)" }}>
        Favoris
      </h1>
      <p style={{ fontSize: "11px", color: "var(--muted-text)", marginTop: "2px" }}>
        Tes produits sauvegardés
      </p>

      <div className="mt-6">
        {FAVORITES_MOCK.map((p, i) => (
          <Link
            key={p.id}
            to="/produit/$id"
            params={{ id: p.id }}
            className="flex items-center gap-3 py-3"
            style={{
              borderTop: i === 0 ? "none" : "0.5px solid var(--surface)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "var(--border)",
                borderRadius: "8px",
              }}
            />
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: "12px", fontWeight: 500, color: "var(--dark-text)" }}>
                {p.name}
              </div>
              <div style={{ fontSize: "10px", color: "var(--muted-text)" }}>
                {p.brand} · {p.country}
              </div>
            </div>
            <Heart size={18} color="var(--primary)" fill="var(--primary)" strokeWidth={1.5} />
          </Link>
        ))}
      </div>
    </div>
  );
}
