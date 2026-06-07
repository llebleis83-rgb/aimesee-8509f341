import { createFileRoute } from "@tanstack/react-router";
import {
  Utensils,
  Coffee,
  Sparkles,
  Shirt,
  Laptop,
  Sofa,
  Droplets,
  Dumbbell,
  Gamepad2,
  Film,
  Leaf,
  Plane,
} from "lucide-react";

export const Route = createFileRoute("/_app/categories")({
  component: Categories,
});

const CATEGORIES = [
  { icon: Utensils, label: "Alimentation" },
  { icon: Coffee, label: "Boissons" },
  { icon: Sparkles, label: "Cosmétiques" },
  { icon: Shirt, label: "Mode" },
  { icon: Laptop, label: "Tech" },
  { icon: Sofa, label: "Maison" },
  { icon: Droplets, label: "Hygiène" },
  { icon: Dumbbell, label: "Sport" },
  { icon: Gamepad2, label: "Jouets" },
  { icon: Film, label: "Divertissement" },
  { icon: Leaf, label: "Bio & Écolo" },
  { icon: Plane, label: "Voyage" },
];

function Categories() {
  return (
    <div>
      <header style={{ padding: "16px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 500, color: "#1A2E1A" }}>
          Catégories
        </h1>
      </header>

      <div
        className="grid grid-cols-4"
        style={{ gap: "10px", padding: "0 16px 32px" }}
      >
        {CATEGORIES.map((c) => {
          const Icon = c.icon;
          return (
            <button
              key={c.label}
              className="flex flex-col items-center"
              style={{
                background: "#F4F7F4",
                border: "0.5px solid #DDE8DD",
                borderRadius: "12px",
                padding: "14px 8px",
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "#EAF3DE",
                }}
              >
                <Icon size={24} color="#5B8C6A" strokeWidth={1.75} />
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#3A503A",
                  textAlign: "center",
                  marginTop: "6px",
                }}
              >
                {c.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
