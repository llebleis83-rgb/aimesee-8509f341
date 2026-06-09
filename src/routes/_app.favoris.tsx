import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { FAVORITES_MOCK } from "@/lib/aimesee-data";

export const Route = createFileRoute("/_app/favoris")({
  component: Favoris,
});

function Favoris() {
  return (
    <div style={{ padding: "32px 20px 28px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: 500, color: "#1A2E1A", letterSpacing: "-0.4px" }}>
        Favoris
      </h1>
      <p style={{ fontSize: "13px", color: "var(--muted-text)", marginTop: "2px" }}>
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
                width: "44px",
                height: "44px",
                background: "var(--border)",
                borderRadius: "8px",
              }}
            />
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--dark-text)" }}>
                {p.name}
              </div>
              <div style={{ fontSize: "12px", color: "var(--muted-text)" }}>
                {p.brand} · {p.country}
              </div>
            </div>
            <Heart size={20} color="var(--primary)" fill="var(--primary)" strokeWidth={1.5} />
          </Link>
        ))}
      </div>
    </div>
  );
}
