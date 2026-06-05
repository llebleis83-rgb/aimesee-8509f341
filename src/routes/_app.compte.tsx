import { createFileRoute } from "@tanstack/react-router";
import { Bell, Shield, Info, LogOut, User, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/_app/compte")({
  component: Compte,
});

const settings = [
  { icon: Bell, label: "Notifications", emoji: "🔔" },
  { icon: Shield, label: "Confidentialité", emoji: "🛡️" },
  { icon: Info, label: "À propos de l'app", emoji: "ℹ️" },
];

function Compte() {
  return (
    <div>
      <div
        className="flex flex-col items-center pt-14 pb-8 px-5"
        style={{ background: "var(--surface)" }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "999px",
            background: "var(--border)",
          }}
        >
          <User size={32} color="var(--primary)" strokeWidth={1.5} />
        </div>
        <div
          className="mt-3"
          style={{ fontSize: "13px", fontWeight: 500, color: "var(--dark-text)" }}
        >
          Marie Dupont
        </div>
        <div style={{ fontSize: "10px", color: "var(--muted-text)", marginTop: "2px" }}>
          marie@email.com
        </div>
      </div>

      <div className="px-5 mt-2">
        {settings.map((s, i) => (
          <button
            key={s.label}
            className="w-full flex items-center gap-3 py-3.5"
            style={{ borderTop: i === 0 ? "none" : "0.5px solid var(--surface)" }}
          >
            <span style={{ fontSize: "16px" }}>{s.emoji}</span>
            <span
              className="flex-1 text-left"
              style={{ fontSize: "12px", color: "var(--dark-text)" }}
            >
              {s.label}
            </span>
            <ChevronRight size={16} color="var(--border)" />
          </button>
        ))}

        <button
          className="w-full flex items-center gap-3 py-3.5 mt-4"
          style={{ borderTop: "0.5px solid var(--surface)" }}
        >
          <LogOut size={16} color="var(--placeholder)" strokeWidth={1.5} />
          <span style={{ fontSize: "12px", color: "var(--placeholder)" }}>
            Se déconnecter
          </span>
        </button>
      </div>
    </div>
  );
}
