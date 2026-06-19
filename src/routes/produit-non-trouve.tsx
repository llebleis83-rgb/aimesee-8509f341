import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ScanBarcode } from "lucide-react";

export const Route = createFileRoute("/produit-non-trouve")({
  component: ProduitNonTrouve,
});

const FONT = "'DM Sans', system-ui, sans-serif";

function ProduitNonTrouve() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: FONT,
        background: "#FFFFFF",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF",
        }}
      >
        {/* Header */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            background: "#FFFFFF",
            borderBottom: "0.5px solid #DDE8DD",
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            height: "54px",
          }}
        >
          <button
            onClick={() => window.history.back()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontFamily: FONT,
              fontSize: "15px",
              fontWeight: 500,
              color: "#7A9A7A",
              background: "transparent",
              border: "none",
              padding: "10px 8px",
              marginLeft: "-8px",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={16} strokeWidth={1.75} />
            Retour
          </button>
        </div>

        {/* Body */}
        <div
          className="flex flex-col items-center"
          style={{ flex: 1, padding: "32px" }}
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: "80px",
              height: "80px",
              background: "#EAF3DE",
              borderRadius: "20px",
            }}
          >
            <ScanBarcode size={36} color="#5B8C6A" strokeWidth={1.75} />
          </div>

          <div
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#1A2E1A",
              marginTop: "24px",
              textAlign: "center",
            }}
          >
            Produit non trouvé
          </div>

          <div
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#7A9A7A",
              marginTop: "8px",
              textAlign: "center",
              maxWidth: "280px",
              lineHeight: 1.5,
            }}
          >
            Ce code-barres ne correspond à aucun produit dans notre base.
          </div>

          <div
            className="flex flex-col w-full"
            style={{ marginTop: "40px", gap: "12px" }}
          >
            <button
              onClick={() =>
                navigate({ to: "/categories", search: { focus: "1" } })
              }
              style={{
                width: "100%",
                height: "52px",
                background: "#5B8C6A",
                borderRadius: "14px",
                fontFamily: FONT,
                fontSize: "14px",
                fontWeight: 500,
                color: "#FFFFFF",
                border: "none",
                cursor: "pointer",
              }}
            >
              Rechercher manuellement
            </button>

            <button
              onClick={() => window.history.back()}
              style={{
                width: "100%",
                height: "52px",
                background: "#F4F7F4",
                borderRadius: "14px",
                fontFamily: FONT,
                fontSize: "14px",
                fontWeight: 500,
                color: "#3A503A",
                border: "none",
                cursor: "pointer",
              }}
            >
              Scanner à nouveau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
