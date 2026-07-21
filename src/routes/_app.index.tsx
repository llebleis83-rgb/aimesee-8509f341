import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, User, Flashlight } from "lucide-react";
import { useProduct } from "@/hooks/useProduct";

export const Route = createFileRoute("/_app/")({
  component: Scanner,
});

function Scanner() {
  const navigate = useNavigate();
  const { state, lookup } = useProduct();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    try {
      if (localStorage.getItem("aimesee_onboarded") !== "true") {
        navigate({ to: "/onboarding" });
      }
    } catch {
      /* noop */
    }
  }, [navigate]);

  // Quand un produit est trouvé → naviguer vers la fiche
  useEffect(() => {
    console.log('state:', JSON.stringify(state));
    if (state.status === "found") {
      navigate({
        to: "/produit/$id",
        params: { id: state.product.barcode },
      });
    }
    if (state.status === "not_found") {
      navigate({ to: "/produit-non-trouve" });
    }
    if (state.status === "error") {
      console.error('Erreur lookup:', state.message);
    }
  }, [state, navigate]);

  const handleSearch = () => {
    if (searchInput.trim()) lookup(searchInput.trim());
  };

  // Expose pour intégration scanner caméra future
  if (typeof window !== "undefined") {
    (window as unknown as { __aimeseeScan?: (b: string) => void }).__aimeseeScan = lookup;
  }

  const Corner = ({ style }: { style: React.CSSProperties }) => (
    <div
      style={{
        position: "absolute",
        width: "32px",
        height: "32px",
        borderColor: "#FFFFFF",
        borderStyle: "solid",
        ...style,
      }}
    />
  );

  const isLoading = state.status === "loading";

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
      {/* Header */}
      <header
        className="flex items-center justify-between shrink-0"
        style={{ background: "#FFFFFF", padding: "32px 20px 28px" }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 500,
            color: "#1A2E1A",
            letterSpacing: "-0.4px",
          }}
        >
          aimesee
        </h1>
        <button
          onClick={() => navigate({ to: "/compte" })}
          aria-label="Mon compte"
          className="flex items-center justify-center shrink-0"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "9999px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "9999px",
              background: "#EAF3DE",
            }}
          >
            <User size={18} color="#5B8C6A" strokeWidth={1.75} />
          </div>
        </button>
      </header>

      {/* Viewfinder */}
      <div className="flex-1 flex items-center justify-center" style={{ padding: "0 16px" }}>
        <div
          className="relative w-full"
          style={{
            background: "#1A2E1A",
            borderRadius: "20px",
            height: "100%",
            maxHeight: "560px",
          }}
        >
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "240px",
              height: "240px",
            }}
          >
            <Corner style={{ top: 0, left: 0, borderWidth: "2px 0 0 2px" }} />
            <Corner style={{ top: 0, right: 0, borderWidth: "2px 2px 0 0" }} />
            <Corner style={{ bottom: 0, left: 0, borderWidth: "0 0 2px 2px" }} />
            <Corner style={{ bottom: 0, right: 0, borderWidth: "0 2px 2px 0" }} />
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 16px)",
                left: 0,
                right: 0,
                textAlign: "center",
                fontSize: "12px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {isLoading ? "Recherche en cours…" : "Pointez vers un code-barres"}
            </div>
          </div>

          <button
            aria-label="Lampe torche"
            className="absolute flex items-center justify-center"
            style={{
              bottom: "16px",
              right: "16px",
              width: "36px",
              height: "36px",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.15)",
            }}
          >
            <Flashlight size={18} color="#FFFFFF" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Search CTA */}
      <div className="shrink-0" style={{ margin: "24px 16px" }}>
        <div
          className="flex items-center gap-2 w-full"
          style={{
            background: "#3A503A",
            borderRadius: "12px",
            height: "48px",
            padding: "0 16px",
          }}
        >
          <Search size={18} color="#FFFFFF" />
          <input
            type="text"
            inputMode="numeric"
            placeholder="Entrer un code-barres…"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            disabled={isLoading}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: "14px",
              fontWeight: 500,
              color: "#FFFFFF",
              fontFamily: "'DM Sans', system-ui, sans-serif",
            }}
          />
          {searchInput.trim() && (
            <button
              onClick={handleSearch}
              disabled={isLoading}
              style={{
                background: "transparent",
                border: "none",
                color: "#FFFFFF",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                padding: "0 4px",
              }}
            >
              {isLoading ? "…" : "OK"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
