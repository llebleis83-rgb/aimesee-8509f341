import { createFileRoute } from "@tanstack/react-router";
import { Bell, Shield, Info, LogOut, User, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/_app/compte")({
  component: Compte,
});

const ICON_CONTAINER = {
  width: "34px",
  height: "34px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
} as const;

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
            width: "80px",
            height: "80px",
            borderRadius: "999px",
            background: "var(--border)",
          }}
        >
          <User size={36} color="var(--primary)" strokeWidth={1.5} />
        </div>
        <div
          className="mt-3"
          style={{ fontSize: "16px", fontWeight: 500, color: "var(--dark-text)" }}
        >
          Marie Dupont
        </div>
        <div style={{ fontSize: "12px", color: "var(--muted-text)", marginTop: "2px" }}>
          marie@email.com
        </div>
      </div>

      <div className="px-5 mt-2">
        {/* Notifications */}
        <button
          className="w-full flex items-center gap-3 py-3.5"
          style={{ borderTop: "none" }}
        >
          <div style={{ ...ICON_CONTAINER, background: "#EAF3DE" }}>
            <Bell size={18} color="#5B8C6A" strokeWidth={1.75} />
          </div>
          <span
            className="flex-1 text-left"
            style={{ fontSize: "13px", color: "var(--dark-text)" }}
          >
            Notifications
          </span>
          <ChevronRight size={16} color="var(--border)" />
        </button>

        {/* Confidentialité */}
        <button
          className="w-full flex items-center gap-3 py-3.5"
          style={{ borderTop: "0.5px solid var(--surface)" }}
        >
          <div style={{ ...ICON_CONTAINER, background: "#EAF3DE" }}>
            <Shield size={18} color="#5B8C6A" strokeWidth={1.75} />
          </div>
          <span
            className="flex-1 text-left"
            style={{ fontSize: "13px", color: "var(--dark-text)" }}
          >
            Confidentialité
          </span>
          <ChevronRight size={16} color="var(--border)" />
        </button>

        {/* À propos de l'app */}
        <button
          className="w-full flex items-center gap-3 py-3.5"
          style={{ borderTop: "0.5px solid var(--surface)" }}
        >
          <div style={{ ...ICON_CONTAINER, background: "#EAF3DE" }}>
            <Info size={18} color="#5B8C6A" strokeWidth={1.75} />
          </div>
          <span
            className="flex-1 text-left"
            style={{ fontSize: "13px", color: "var(--dark-text)" }}
          >
            À propos de l&apos;app
          </span>
          <ChevronRight size={16} color="var(--border)" />
        </button>

        {/* Se déconnecter */}
        <button
          className="w-full flex items-center gap-3 py-3.5 mt-4"
          style={{ borderTop: "0.5px solid var(--surface)" }}
        >
          <div style={{ ...ICON_CONTAINER, background: "#FFF5F5" }}>
            <LogOut size={18} color="#E57373" strokeWidth={1.75} />
          </div>
          <span
            className="flex-1 text-left"
            style={{ fontSize: "13px", color: "#E57373" }}
          >
            Se déconnecter
          </span>
          <ChevronRight size={16} color="#DDE8DD" />
        </button>
      </div>
    </div>
  );
}
