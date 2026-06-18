import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { History, Cookie, Droplets, Shirt, ChevronRight, CupSoda, Sparkles, Sofa, Utensils } from "lucide-react";
import { useState } from "react";
import { getProductById } from "@/lib/mockProducts";
import { historyStore, useHistory } from "@/lib/history-store";
import { CATEGORY_LABEL } from "@/lib/types";

export const Route = createFileRoute("/_app/historique")({
  component: Historique,
});

const CATEGORY_ICON: Record<string, React.ElementType> = {
  alimentation: Cookie,
  boissons: CupSoda,
  "hygiene-soins": Droplets,
  cosmetiques: Sparkles,
  "entretien-maison": Sofa,
  "mode-textile": Shirt,
};

function formatWhen(ts: number): string {
  const d = new Date(ts);
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = d.toDateString() === yesterday.toDateString();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  if (sameDay) return `aujourd'hui · ${hh}h${mm}`;
  if (isYesterday) return `hier · ${hh}h${mm}`;
  const months = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
  return `${d.getDate()} ${months[d.getMonth()]} · ${hh}h${mm}`;
}

function Historique() {
  const navigate = useNavigate();
  const history = useHistory();
  const [showConfirm, setShowConfirm] = useState(false);

  const resolved = history
    .map((h) => {
      const product = getProductById(h.product_id);
      return product ? { product, timestamp: h.timestamp } : null;
    })
    .filter((x): x is { product: NonNullable<ReturnType<typeof getProductById>>; timestamp: number } => !!x);

  const isEmpty = resolved.length === 0;

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
      <header className="flex items-center justify-between shrink-0" style={{ padding: "32px 20px 28px" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: 500, color: "#1A2E1A", letterSpacing: "-0.4px" }}>
            Historique
          </h1>
          <p style={{ fontSize: "13px", color: "#7A9A7A", marginTop: "2px" }}>Tes dernières recherches</p>
        </div>
        {!isEmpty && (
          <button
            onClick={() => setShowConfirm(true)}
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

      <div
        className="hist-scroll flex-1"
        style={{ overflowY: "auto", scrollbarWidth: "thin", scrollbarColor: "#DDE8DD transparent" }}
      >
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center" style={{ height: "100%", padding: "0 24px" }}>
            <History size={64} color="#DDE8DD" strokeWidth={1.5} />
            <div style={{ fontSize: "16px", fontWeight: 500, color: "#1A2E1A", marginTop: "16px", textAlign: "center" }}>
              Aucune recherche pour l'instant
            </div>
            <div style={{ fontSize: "13px", fontWeight: 400, color: "#7A9A7A", marginTop: "8px", textAlign: "center", maxWidth: "240px", lineHeight: 1.6 }}>
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
            {resolved.map((h, i) => {
              const Icon = CATEGORY_ICON[h.product.category_slug] || Cookie;
              const categoryLabel = CATEGORY_LABEL[h.product.category_slug] ?? h.product.category_slug;
              return (
                <Link
                  key={`${h.product.id}-${h.timestamp}-${i}`}
                  to="/produit/$id"
                  params={{ id: h.product.id }}
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
                    <Icon size={20} color="#5B8C6A" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                      <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A2E1A" }}>{h.product.name}</div>
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
                      {formatWhen(h.timestamp)}
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

      {showConfirm && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.4)",
              zIndex: 50,
            }}
            onClick={() => setShowConfirm(false)}
          />
          <div
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              background: "#FFFFFF",
              borderRadius: "20px 20px 0 0",
              padding: "24px 16px 32px",
              zIndex: 51,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A2E1A" }}>
                Effacer l'historique ?
              </div>
              <div style={{ fontSize: "14px", fontWeight: 400, color: "#7A9A7A", marginTop: "8px" }}>
                Cette action est irréversible.
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "24px" }}>
              <button
                onClick={() => {
                  historyStore.clear();
                  setShowConfirm(false);
                }}
                style={{
                  height: "48px",
                  borderRadius: "12px",
                  background: "#FFF5F5",
                  color: "#E57373",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Tout effacer
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                style={{
                  height: "48px",
                  borderRadius: "12px",
                  background: "#F4F7F4",
                  color: "#3A503A",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Annuler
              </button>
            </div>
          </div>
        </>
      )}

      <style>{`
        .hist-scroll::-webkit-scrollbar { width: 3px; }
        .hist-scroll::-webkit-scrollbar-track { background: transparent; }
        .hist-scroll::-webkit-scrollbar-thumb { background: #DDE8DD; border-radius: 3px; }
      `}</style>
    </div>
  );
}
