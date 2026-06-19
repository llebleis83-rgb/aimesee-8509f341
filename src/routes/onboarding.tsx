import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, ScanLine, BarChart3, Check, User } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  component: Onboarding,
});

const FONT = "'DM Sans', system-ui, sans-serif";

function Dots({ active }: { active: 0 | 1 | 2 }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ gap: "6px", marginBottom: "32px" }}
    >
      {[0, 1, 2].map((i) => {
        const isActive = i === active;
        return (
          <span
            key={i}
            style={{
              width: isActive ? "8px" : "6px",
              height: isActive ? "8px" : "6px",
              borderRadius: "9999px",
              background: isActive ? "#5B8C6A" : "#DDE8DD",
            }}
          />
        );
      })}
    </div>
  );
}

function PrimaryButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
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
      {label}
    </button>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
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
          background: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          padding: "32px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState<0 | 1 | 2>(0);

  const finish = () => {
    try {
      localStorage.setItem("aimesee_onboarded", "true");
    } catch {
      /* noop */
    }
    navigate({ to: "/" });
  };

  if (step === 0) {
    return (
      <Shell>
        <div
          className="flex flex-col items-center justify-center"
          style={{ flex: 1 }}
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: "88px",
              height: "88px",
              background: "#EAF3DE",
              borderRadius: "24px",
            }}
          >
            <Eye size={40} color="#5B8C6A" strokeWidth={1.75} />
          </div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "#1A2E1A",
              textAlign: "center",
              marginTop: "24px",
              lineHeight: 1.3,
            }}
          >
            Savoir ce qu'il y a vraiment derrière ce que tu achètes.
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#7A9A7A",
              textAlign: "center",
              marginTop: "12px",
              maxWidth: "300px",
              lineHeight: 1.5,
            }}
          >
            aimesee te montre les faits sourcés sur les produits que tu scannes et les marques que tu consommes : actionnariat, écologie, conditions de travail, dons politiques, scandales.
          </div>
        </div>
        <Dots active={0} />
        <PrimaryButton label="Suivant" onClick={() => setStep(1)} />
      </Shell>
    );
  }

  if (step === 1) {
    const rows: Array<{
      icon: React.ReactNode;
      label: string;
      desc: string;
    }> = [
      {
        icon: <ScanLine size={22} color="#5B8C6A" strokeWidth={1.75} />,
        label: "Scanner",
        desc: "Pointe ta caméra sur n'importe quel code-barres",
      },
      {
        icon: <BarChart3 size={22} color="#5B8C6A" strokeWidth={1.75} />,
        label: "Découvrir",
        desc: "Accède aux faits sourcés et datés sur le produit",
      },
      {
        icon: <Check size={22} color="#5B8C6A" strokeWidth={1.75} />,
        label: "Décider",
        desc: "Tire tes propres conclusions. Aucun jugement.",
      },
    ];
    return (
      <Shell>
        <div
          className="flex flex-col"
          style={{ flex: 1, justifyContent: "center" }}
        >
          <div
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "#1A2E1A",
              textAlign: "center",
            }}
          >
            Comment ça marche
          </div>
          <div
            className="flex flex-col"
            style={{ marginTop: "32px", gap: "16px" }}
          >
            {rows.map((r) => (
              <div
                key={r.label}
                className="flex items-start"
                style={{ gap: "14px" }}
              >
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "#EAF3DE",
                    borderRadius: "12px",
                  }}
                >
                  {r.icon}
                </div>
                <div className="flex flex-col" style={{ paddingTop: "4px" }}>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#1A2E1A",
                    }}
                  >
                    {r.label}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "#7A9A7A",
                      marginTop: "2px",
                      lineHeight: 1.5,
                    }}
                  >
                    {r.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Dots active={1} />
        <PrimaryButton label="Suivant" onClick={() => setStep(2)} />
      </Shell>
    );
  }

  return (
    <Shell>
      <div
        className="flex flex-col items-center justify-center"
        style={{ flex: 1 }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: "88px",
            height: "88px",
            background: "#EAF3DE",
            borderRadius: "24px",
          }}
        >
          <User size={40} color="#5B8C6A" strokeWidth={1.75} />
        </div>
        <div
          style={{
            fontSize: "22px",
            fontWeight: 500,
            color: "#1A2E1A",
            textAlign: "center",
            marginTop: "24px",
          }}
        >
          Rejoindre aimesee
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#7A9A7A",
            textAlign: "center",
            marginTop: "12px",
            maxWidth: "280px",
            lineHeight: 1.5,
          }}
        >
          Crée un compte pour sauvegarder tes favoris et retrouver ton
          historique.
        </div>
        <div
          className="flex flex-col w-full"
          style={{ marginTop: "40px", gap: "12px" }}
        >
          <PrimaryButton label="Créer un compte" onClick={finish} />
          <button
            onClick={finish}
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
            Se connecter
          </button>
          <button
            onClick={finish}
            style={{
              background: "transparent",
              border: "none",
              fontFamily: FONT,
              fontSize: "13px",
              fontWeight: 400,
              color: "#7A9A7A",
              textAlign: "center",
              padding: "12px",
              cursor: "pointer",
            }}
          >
            Continuer sans compte
          </button>
        </div>
      </div>
      <Dots active={2} />
    </Shell>
  );
}
