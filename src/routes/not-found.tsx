import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PackageSearch } from "lucide-react";

export const Route = createFileRoute("/not-found")({
  component: NotFound,
});

function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        height: "100vh",
        padding: "0 24px",
        background: "#FFFFFF",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <PackageSearch size={64} color="#DDE8DD" strokeWidth={1.5} />
      <div
        style={{
          fontSize: "16px",
          fontWeight: 500,
          color: "#1A2E1A",
          marginTop: "16px",
          textAlign: "center",
        }}
      >
        Produit introuvable
      </div>
      <div
        style={{
          fontSize: "13px",
          fontWeight: 400,
          color: "#7A9A7A",
          marginTop: "8px",
          textAlign: "center",
          maxWidth: "260px",
          lineHeight: 1.6,
        }}
      >
        Nous n'avons pas trouvé ce produit. Essaie une autre recherche ou scanne un nouveau code-barres.
      </div>
      <button
        onClick={() => navigate({ to: "/" })}
        style={{
          height: "48px",
          background: "#5B8C6A",
          borderRadius: "12px",
          fontSize: "14px",
          fontWeight: 500,
          color: "#FFFFFF",
          padding: "0 24px",
          marginTop: "24px",
          border: "none",
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Scanner un produit
      </button>
    </div>
  );
}
