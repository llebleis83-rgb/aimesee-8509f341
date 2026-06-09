import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ChevronRight } from "lucide-react";
import { HISTORY_MOCK } from "@/lib/aimesee-data";

export const Route = createFileRoute("/_app/historique")({
  component: Historique,
});

function Historique() {
  return (
    <div style={{ padding: "32px 20px 28px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: 500, color: "#1A2E1A", letterSpacing: "-0.4px" }}>
        Historique
      </h1>
      <p style={{ fontSize: "13px", color: "var(--muted-text)", marginTop: "2px" }}>
        Tes dernières recherches
      </p>

      <div className="mt-6">
        {HISTORY_MOCK.map((h, i) => (
          <Link
            key={i}
            to="/produit/$id"
            params={{ id: h.id }}
            className="flex items-center gap-3 py-3"
            style={{
              borderTop: i === 0 ? "none" : "0.5px solid var(--surface)",
            }}
          >
            <Clock size={18} color="var(--placeholder)" strokeWidth={1.5} />
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: "13px", color: "var(--dark-text)" }}>{h.name}</div>
              <div style={{ fontSize: "11px", color: "var(--placeholder)", marginTop: "1px" }}>
                {h.when}
              </div>
            </div>
            <ChevronRight size={16} color="var(--border)" />
          </Link>
        ))}
      </div>
    </div>
  );
}
