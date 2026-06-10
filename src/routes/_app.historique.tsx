import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { History, Cookie, Droplets, Shirt, ChevronRight } from "lucide-react";
import { HISTORY_MOCK } from "@/lib/aimesee-data";
import { useState } from "react";

export const Route = createFileRoute("/_app/historique")({
  component: Historique,
});

const CATEGORY_ICON: Record<string, React.ElementType> = {
  Alimentation: Cookie,
  Boissons: Droplets,
  "Mode & Textile": Shirt,
};

function Historique() {
  const navigate = useNavigate();
  const [history, setHistory] = useState(HISTORY_MOCK);
  const isEmpty = history.length === 0;

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
      {/* Header */}
      <header
        className="flex items-center justify-between shrink-0"
        style={{ padding: "32px 20px 28px" }}
      >
        <div>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 500,
              color: "#1A2E1A",
              letterSpacing: "-0.4px",
            }}
          >
            Historique
          </h1>
          <p style={{ fontSize: "13px", color: "#7A9A7A", marginTop: "2px" }}>
            Tes dernières recherches
          </p>
        </div>
        {!isEmpty && (
          <button
            onClick={() => setHistory([])}
            style={{
              fontSize: "12px",
              fontWeight: 400,
              color: "#7A9A7A",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "4px 0",
            }}
          >
            Tout effacer
          </button>
        )}
      </header>

      {/* Scrollable content */}
      <div
        className="hist-scroll flex-1"
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
            <History size={64} color="#DDE8DD" strokeWidth={1.5} />
            <div
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#1A2E1A",
                marginTop: "16px",
                textAlign: "center",
              }}
            >
              Aucune recherche pour l'instant
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
              Tes produits consultés apparaîtront ici.
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
            {history.map((h, i) => {
              const Icon = CATEGORY_ICON[h.category] || Cookie;
              return (
                <Link
                  key={`${h.id}-${i}`}
                  to="/produit/$id"
                  params={{ id: h.id }}
                  className="flex items-center"
                    style={{
                      width: "100%",
                      height: "80px",
                      gap: "14px",
                      padding: "0 16px",
                      borderBottom: "0.5px solid #F4F7F4",
                      background: "#FFFFFF",
                      textDecoration: "none",
                    }}
                >
                  {/* Thumbnail */}
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "#EAF3DE",
                      borderRadius: "10px",
                    }}
                  >
                    <Icon size={20} color="#5B8C6A" strokeWidth={1.5} />
                  </div>

                  {/* Center content */}
                  <div className="flex-1 min-w-0">
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#1A2E1A",
                      }}
                    >
                      {h.name}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: 400,
                        color: "#7A9A7A",
                        marginTop: "6px",
                      }}
                    >
                      {h.when}
                    </div>
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "10px",
                        fontWeight: 400,
                        color: "#5B8C6A",
                        background: "#EAF3DE",
                        borderRadius: "20px",
                        padding: "2px 8px",
                        marginTop: "4px",
                      }}
                    >
                      {h.category}
                    </div>
                  </div>

                  {/* Chevron */}
                  <ChevronRight size={16} color="#DDE8DD" strokeWidth={1.75} />
                </Link>
              );
            })}
            {/* Bottom padding */}
            <div style={{ height: "24px" }} />
          </div>
        )}
      </div>

      <style>{`
        .hist-scroll::-webkit-scrollbar { width: 3px; }
        .hist-scroll::-webkit-scrollbar-track { background: transparent; }
        .hist-scroll::-webkit-scrollbar-thumb { background: #DDE8DD; border-radius: 3px; }
      `}</style>
    </div>
  );
}
