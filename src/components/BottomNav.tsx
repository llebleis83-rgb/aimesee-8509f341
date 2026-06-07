import { Link, useRouterState } from "@tanstack/react-router";
import { ScanLine, Grid2x2, Heart, History } from "lucide-react";

const tabs = [
  { to: "/", label: "Scanner", icon: ScanLine },
  { to: "/categories", label: "Catégories", icon: Grid2x2 },
  { to: "/favoris", label: "Favoris", icon: Heart },
  { to: "/historique", label: "Historique", icon: History },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 flex justify-around"
      style={{
        background: "#FFFFFF",
        borderTop: "0.5px solid #DDE8DD",
        height: "64px",
        paddingBottom: "12px",
      }}
    >
      {tabs.map(({ to, label, icon: Icon }) => {
        const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
        const color = active ? "#5B8C6A" : "#AAC0AA";
        return (
          <Link
            key={to}
            to={to}
            className="flex flex-col items-center justify-center flex-1"
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
