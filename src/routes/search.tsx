import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronRight, Search, SmilePlus, Cookie, Droplets, Shirt, CupSoda, Sparkles, Sofa } from "lucide-react";
import { searchProductsByName } from "@/lib/mockProducts";

export const Route = createFileRoute("/search")({
  component: SearchScreen,
});

const CATEGORY_ICON: Record<string, React.ElementType> = {
  alimentation: Cookie,
  boissons: CupSoda,
  "hygiene-soins": Droplets,
  cosmetiques: Sparkles,
  "entretien-maison": Sofa,
  "mode-textile": Shirt,
};

function SearchScreen() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => searchProductsByName(q), [q]);
  const hasQuery = q.trim().length > 0;

  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-[480px] relative" style={{ background: "#FFFFFF", minHeight: "100vh" }}>
        {/* Header */}
        <header
          className="flex items-center justify-end"
          style={{ padding: "20px 20px 8px" }}
        >
          <button
            onClick={() => navigate({ to: "/" })}
            style={{
              fontSize: "15px",
              fontWeight: 400,
              color: "#7A9A7A",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px 4px",
            }}
          >
            Annuler
          </button>
        </header>

        {/* Search bar */}
        <div style={{ padding: "8px 16px 16px" }}>
          <div
            className="flex items-center gap-2"
            style={{
              background: "#F4F7F4",
              border: "0.5px solid #DDE8DD",
              borderRadius: "12px",
              height: "48px",
              padding: "0 16px",
            }}
          >
            <Search size={18} color="#7A9A7A" />
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Rechercher un produit..."
              className="flex-1 bg-transparent outline-none"
              style={{ fontSize: "15px", color: "#1A2E1A" }}
            />
          </div>
        </div>

        {/* Body */}
        {!hasQuery ? (
          <div
            className="flex flex-col items-center justify-center"
            style={{ padding: "80px 24px 0" }}
          >
            <Search size={48} color="#DDE8DD" strokeWidth={1.5} />
            <div style={{ fontSize: "14px", fontWeight: 400, color: "#7A9A7A", marginTop: "16px", textAlign: "center" }}>
              Recherchez par nom de produit
            </div>
          </div>
        ) : results.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center"
            style={{ padding: "80px 24px 0" }}
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
          <div>
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
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: "44px", height: "44px", background: "#EAF3DE", borderRadius: "10px" }}
                  >
                    <Icon size={20} color="#5B8C6A" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A2E1A" }}>{p.name}</div>
                    <div style={{ fontSize: "12px", fontWeight: 400, color: "#7A9A7A", marginTop: "4px" }}>
                      {p.brand} · {p.country}
                    </div>
                  </div>
                  <ChevronRight size={18} color="#DDE8DD" strokeWidth={1.5} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
