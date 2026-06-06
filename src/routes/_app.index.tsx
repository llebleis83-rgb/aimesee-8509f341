import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search, ScanLine } from "lucide-react";
import { useState } from "react";
import { RECENT_SEARCHES } from "@/lib/aimesee-data";

export const Route = createFileRoute("/_app/")({
  component: Home,
});

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
      <h1
        style={{
          fontSize: "32px",
          fontWeight: 500,
          color: "var(--dark-text)",
          letterSpacing: "-0.5px",
        }}
      >
        aimesee
      </h1>
      <p style={{ fontSize: "14px", color: "var(--muted-text)", marginTop: "2px" }}>
        Faits. Sources. Tu décides.
      </p>

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
        className="mt-3 w-full flex items-center justify-center gap-2 active:opacity-80 transition-opacity"
        style={{
          background: "var(--primary)",
          color: "white",
          borderRadius: "14px",
          height: "54px",
          fontSize: "16px",
          fontWeight: 500,
        }}
      >
        <ScanLine size={20} />
        Scanner un code-barres
      </button>

      {/* Statistics section */}
      <div className="mt-5 flex gap-2.5">
        {[
          { num: "2 847", label: "produits analysés" },
          { num: "14 320", label: "faits sourcés" },
          { num: "312", label: "alternatives" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex-1 text-center"
            style={{
              background: "var(--surface)",
              border: "0.5px solid var(--border)",
              borderRadius: "12px",
              padding: "14px",
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: 500, color: "var(--dark-text)" }}>
              {stat.num}
            </div>
            <div style={{ fontSize: "11px", fontWeight: 400, color: "var(--muted-text)", marginTop: "4px" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <p
        className="mt-8 mb-3 uppercase"
        style={{
          fontSize: "11px",
          fontWeight: 500,
          color: "var(--placeholder)",
          letterSpacing: "0.8px",
        }}
      >
        Recherches récentes
      </p>

      <div className="flex flex-wrap gap-2">
        {RECENT_SEARCHES.map((name) => (
          <button
            key={name}
            onClick={() => go(name)}
            style={{
              background: "var(--surface)",
              border: "0.5px solid var(--border)",
              color: "var(--primary)",
              borderRadius: "18px",
              height: "36px",
              padding: "0 16px",
              fontSize: "13px",
              fontWeight: 400,
            }}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
