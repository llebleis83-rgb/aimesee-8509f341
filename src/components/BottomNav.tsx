import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Heart, History, User } from "lucide-react";

const tabs = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/favoris", label: "Favoris", icon: Heart },
  { to: "/historique", label: "Historique", icon: History },
  { to: "/compte", label: "Mon compte", icon: User },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-background flex justify-around pt-3"
      style={{
        borderTop: "0.5px solid var(--border)",
        paddingBottom: "12px",
      }}
    >
      {tabs.map(({ to, label, icon: Icon }) => {
        const active =
          to === "/" ? pathname === "/" : pathname.startsWith(to);
        const color = active ? "var(--primary)" : "var(--placeholder)";
        return (
          <Link
            key={to}
            to={to}
            className="flex flex-col items-center justify-center flex-1 py-1"
            style={{ color, gap: "4px" }}
          >
            <Icon size={24} strokeWidth={active ? 2 : 1.75} />
            <span style={{ fontSize: "11px", fontWeight: active ? 500 : 400 }}>
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
