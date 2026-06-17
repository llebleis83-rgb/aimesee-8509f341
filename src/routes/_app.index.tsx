import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search, User, Flashlight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_app/")({
  component: Scanner,
});

function Scanner() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const go = (name: string) => {
    const slug = name.toLowerCase().includes("nike")
      ? "nike-airmax"
      : name.toLowerCase().includes("evian") || name.toLowerCase().includes("danone")
      ? "evian"
      : "nutella";
    navigate({ to: "/produit/$id", params: { id: slug } });
  };

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

      {/* Viewfinder (dominant, centered) */}
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
          {/* Scan frame: 4 corner brackets */}
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
              Pointez vers un code-barres
            </div>
          </div>

          {/* Torch */}
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

      {/* Search (pinned bottom) */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (q.trim()) go(q.trim());
        }}
        className="shrink-0"
        style={{ margin: "24px 16px" }}
      >
        <div
          className="flex items-center gap-2"
          style={{
            background: "#F4F7F4",
            border: "0.5px solid #DDE8DD",
            borderRadius: "14px",
            height: "52px",
            padding: "0 16px",
          }}
        >
          <Search size={18} color="#7A9A7A" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ou recherchez par nom de produit..."
            className="flex-1 bg-transparent outline-none"
            style={{ fontSize: "15px", color: "#1A2E1A" }}
          />
        </div>
      </form>
    </div>
  );
}

