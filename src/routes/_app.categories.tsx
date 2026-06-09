import { createFileRoute } from "@tanstack/react-router";
import {
  Utensils,
  CupSoda,
  Droplets,
  Sparkles,
  Sofa,
  Shirt,
  Laptop,
  Dumbbell,
  Gamepad2,
  Leaf,
  Search,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/_app/categories")({
  component: Categories,
});

const AVAILABLE = [
  { icon: Utensils, label: "Alimentation", emoji: "🍔" },
  { icon: CupSoda, label: "Boissons", emoji: "🥤" },
  { icon: Droplets, label: "Hygiène & Soins", emoji: "🧴" },
  { icon: Sparkles, label: "Cosmétiques", emoji: "💄" },
  { icon: Sofa, label: "Entretien maison", emoji: "🏠" },
  { icon: Shirt, label: "Mode & Textile", emoji: "👗" },
];

const COMING_SOON = [
  { icon: Laptop, label: "Tech & Électronique", emoji: "💻" },
  { icon: Dumbbell, label: "Sport & Outdoor", emoji: "⚽" },
  { icon: Gamepad2, label: "Jouets & Enfants", emoji: "🧸" },
  { icon: Leaf, label: "Bio & Écolo", emoji: "🌿" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: "10px",
        fontWeight: 500,
        color: "#AAC0AA",
        textTransform: "uppercase",
        paddingLeft: "16px",
      }}
    >
      {children}
    </div>
  );
}

function AvailableRow({ icon: Icon, label }: { icon: typeof Utensils; label: string }) {
  return (
    <button
      className="flex items-center"
      style={{
        width: "100%",
        height: "64px",
        background: "#FFFFFF",
        borderBottom: "0.5px solid #F4F7F4",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: "40px",
          height: "40px",
          background: "#EAF3DE",
          borderRadius: "10px",
          marginLeft: "16px",
          flexShrink: 0,
        }}
      >
        <Icon size={20} color="#5B8C6A" strokeWidth={1.75} />
      </div>
      <span
        style={{
          fontSize: "15px",
          fontWeight: 500,
          color: "#1A2E1A",
          marginLeft: "14px",
          flex: 1,
          textAlign: "left",
        }}
      >
        {label}
      </span>
      <ChevronRight size={16} color="#DDE8DD" strokeWidth={1.75} style={{ marginRight: "16px", flexShrink: 0 }} />
    </button>
  );
}

function ComingSoonRow({ icon: Icon, label }: { icon: typeof Utensils; label: string }) {
  return (
    <div
      className="flex items-center"
      style={{
        width: "100%",
        height: "64px",
        background: "#FFFFFF",
        borderBottom: "0.5px solid #F4F7F4",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: "40px",
          height: "40px",
          background: "#F4F7F4",
          borderRadius: "10px",
          marginLeft: "16px",
          flexShrink: 0,
        }}
      >
        <Icon size={20} color="#AAC0AA" strokeWidth={1.75} />
      </div>
      <span
        style={{
          fontSize: "15px",
          fontWeight: 500,
          color: "#AAC0AA",
          marginLeft: "14px",
          flex: 1,
          textAlign: "left",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: "10px",
          fontWeight: 400,
          color: "#7A9A7A",
          background: "#F4F7F4",
          border: "0.5px solid #DDE8DD",
          borderRadius: "20px",
          padding: "3px 10px",
          marginRight: "16px",
          flexShrink: 0,
        }}
      >
        Bientôt
      </span>
    </div>
  );
}

function Categories() {
  return (
    <div style={{ background: "#FFFFFF", paddingBottom: "24px" }}>
      <header style={{ padding: "20px 16px 0" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 500, color: "#1A2E1A" }}>
          Catégories
        </h1>
      </header>

      <div
        className="flex items-center"
        style={{
          height: "48px",
          background: "#F4F7F4",
          border: "0.5px solid #DDE8DD",
          borderRadius: "12px",
          margin: "16px 16px 8px",
          padding: "0 14px",
          gap: "10px",
        }}
      >
        <Search size={18} color="#7A9A7A" strokeWidth={1.75} />
        <input
          type="text"
          placeholder="Rechercher une catégorie..."
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            fontSize: "14px",
            fontWeight: 400,
            color: "#1A2E1A",
            fontFamily: "'DM Sans', sans-serif",
          }}
        />
      </div>

      <div style={{ marginTop: "8px", marginBottom: "4px" }}>
        <SectionLabel>Disponible</SectionLabel>
      </div>
      {AVAILABLE.map((c) => (
        <AvailableRow key={c.label} icon={c.icon} label={`${c.emoji} ${c.label}`} />
      ))}

      <div style={{ marginTop: "16px", marginBottom: "4px" }}>
        <SectionLabel>Bientôt disponible</SectionLabel>
      </div>
      {COMING_SOON.map((c) => (
        <ComingSoonRow key={c.label} icon={c.icon} label={`${c.emoji} ${c.label}`} />
      ))}
    </div>
  );
}
