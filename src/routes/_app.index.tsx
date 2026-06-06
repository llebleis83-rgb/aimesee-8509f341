import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search, ScanLine, User } from "lucide-react";
import { useState } from "react";
import { RECENT_SEARCHES } from "@/lib/aimesee-data";

export const Route = createFileRoute("/_app/")({
  component: Home,
});

const CATEGORIES = [
  { emoji: "🍔", label: "Alimentation" },
  { emoji: "🥤", label: "Boissons" },
  { emoji: "💄", label: "Cosmétiques" },
  { emoji: "👗", label: "Mode" },
  { emoji: "💻", label: "Tech" },
  { emoji: "🏠", label: "Maison" },
  { emoji: "🧴", label: "Hygiène" },
  { emoji: "⚽", label: "Sport" },
  { emoji: "🧸", label: "Jouets" },
  { emoji: "🎮", label: "Divertissement" },
  { emoji: "🌿", label: "Bio & Écolo" },
  { emoji: "✈️", label: "Voyage" },
];

function Home() {
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

  return (
    <div className="px-5 pt-12">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: 500,
              color: "var(--dark-text)",
              letterSpacing: "-0.5px",
              lineHeight: 1.1,
            }}
          >
            aimesee
          </h1>
          <p style={{ fontSize: "14px", color: "var(--muted-text)", marginTop: "4px" }}>
            Faits. Sources. Tu décides.
          </p>
        </div>
        <button
          onClick={() => navigate({ to: "/compte" })}
          aria-label="Mon compte"
          className="flex items-center justify-center shrink-0"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "9999px",
            background: "var(--light-green)",
            marginTop: "4px",
          }}
        >
          <User size={18} color="var(--primary)" strokeWidth={1.75} />
        </button>
      </div>

      {/* Search + Scan */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (q.trim()) go(q.trim());
        }}
        className="mt-8"
      >
        <div
          className="flex items-center gap-2"
          style={{
            background: "var(--surface)",
            border: "0.5px solid var(--border)",
            borderRadius: "12px",
            height: "52px",
            padding: "0 16px",
          }}
        >
          <Search size={18} color="var(--muted-text)" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un produit ou une marque..."
            className="flex-1 bg-transparent outline-none"
            style={{ fontSize: "15px", color: "var(--dark-text)" }}
          />
        </div>
      </form>

      <button
        onClick={() => go("Nutella")}
        className="w-full flex items-center justify-center gap-2 active:opacity-80 transition-opacity"
        style={{
          background: "var(--primary)",
          color: "white",
          borderRadius: "14px",
          height: "54px",
          fontSize: "16px",
          fontWeight: 500,
          marginTop: "10px",
        }}
      >
        <ScanLine size={20} />
        Scanner un code-barres
      </button>

      {/* Categories */}
      <p
        className="uppercase"
        style={{
          fontSize: "11px",
          fontWeight: 500,
          color: "var(--placeholder)",
          letterSpacing: "0.8px",
          marginTop: "24px",
          marginBottom: "12px",
        }}
      >
        Catégories
      </p>
      <div className="grid grid-cols-4 gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.label}
            className="flex flex-col items-center"
            style={{
              background: "var(--surface)",
              border: "0.5px solid var(--border)",
              borderRadius: "12px",
              padding: "12px 8px",
            }}
          >
            <span style={{ fontSize: "20px", lineHeight: 1 }}>{c.emoji}</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 400,
                color: "var(--body-text)",
                marginTop: "4px",
                textAlign: "center",
              }}
            >
              {c.label}
            </span>
          </button>
        ))}
      </div>

      {/* Recent */}
      <p
        className="uppercase"
        style={{
          fontSize: "11px",
          fontWeight: 500,
          color: "var(--placeholder)",
          letterSpacing: "0.8px",
          marginTop: "24px",
          marginBottom: "12px",
        }}
      >
        Recherches récentes
      </p>
      <div
        className="flex gap-2 overflow-x-auto -mx-5 px-5"
        style={{ flexWrap: "nowrap", scrollbarWidth: "none" }}
      >
        {RECENT_SEARCHES.map((name) => (
          <button
            key={name}
            onClick={() => go(name)}
            className="shrink-0"
            style={{
              background: "var(--surface)",
              border: "0.5px solid var(--border)",
              color: "var(--primary)",
              borderRadius: "18px",
              height: "36px",
              padding: "0 16px",
              fontSize: "13px",
              fontWeight: 400,
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
