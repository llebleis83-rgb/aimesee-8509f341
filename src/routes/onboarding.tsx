import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, ScanLine, BarChart3, Check, Shield, Building2, Leaf, Users, Landmark, AlertTriangle, ScanSearch, Search, Heart, History, Bell } from "lucide-react";

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
              fontSize: "13px",
              fontWeight: 400,
              color: "#7A9A7A",
              textAlign: "center",
              marginTop: "12px",
              maxWidth: "300px",
              lineHeight: 1.5,
            }}
          >
            aimesee te montre les faits sourcés sur les produits et les marques :
          </div>
          <div
            className="flex flex-wrap justify-center"
            style={{ marginTop: "12px", gap: "8px", maxWidth: "300px" }}
          >
            {[
              { icon: <Building2 size={14} color="#5B8C6A" strokeWidth={1.75} />, label: "Actionnariat" },
              { icon: <Leaf size={14} color="#5B8C6A" strokeWidth={1.75} />, label: "Écologie" },
              { icon: <Users size={14} color="#5B8C6A" strokeWidth={1.75} />, label: "Conditions de travail" },
              { icon: <Landmark size={14} color="#5B8C6A" strokeWidth={1.75} />, label: "Dons politiques" },
              { icon: <AlertTriangle size={14} color="#5B8C6A" strokeWidth={1.75} />, label: "Scandales" },
            ].map((chip) => (
              <div
                key={chip.label}
                className="flex items-center"
                style={{
                  background: "#EAF3DE",
                  borderRadius: "20px",
                  padding: "6px 12px",
                  gap: "6px",
                }}
              >
                {chip.icon}
                <span style={{ fontSize: "13px", fontWeight: 500, color: "#3A503A" }}>
                  {chip.label}
                </span>
              </div>
            ))}
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
      desc: React.ReactNode;
    }> = [
      {
        icon: <ScanLine size={22} color="#5B8C6A" strokeWidth={1.75} />,
        label: "Scanner",
        desc: "Scanne un code barres ou cherche dans Explorer",
      },
      {
        icon: <BarChart3 size={22} color="#5B8C6A" strokeWidth={1.75} />,
        label: "S'informer",
        desc: "Faits sourcés et actualités vérifiées",
      },
      {
        icon: <Check size={22} color="#5B8C6A" strokeWidth={1.75} />,
        label: "Mieux consommer",
        desc: "Fais des choix qui te ressemblent",
      },
    ];
    return (
      <Shell>
        <div
          className="flex flex-col items-center"
          style={{ flex: 1, justifyContent: "center" }}
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
            <ScanSearch size={40} color="#5B8C6A" strokeWidth={1.75} />
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
            Ce que tu vas découvrir
          </div>
          <div
            className="flex flex-col w-full"
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
        <div className="flex w-full" style={{ gap: "12px", marginTop: "8px" }}>
          <button
            onClick={() => setStep(0)}
            style={{
              flex: 1,
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
            ← Retour
          </button>
          <button
            onClick={() => setStep(2)}
            style={{
              flex: 2,
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
            Suivant
          </button>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div style={{ flex: 1 }} />
      <div
        className="flex flex-col items-center"
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
          <Shield size={40} color="#5B8C6A" strokeWidth={1.75} />
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
          Tes favoris, ton historique, tes choix, sauvegardés.
        </div>
      </div>
      <div className="flex flex-col w-full" style={{ marginTop: "32px", marginBottom: "32px", gap: "10px" }}>
        {[
          { icon: <Heart size={18} color="#5B8C6A" strokeWidth={1.75} />, label: "Favoris", desc: "Retrouve tes produits préférés à tout moment" },
          { icon: <History size={18} color="#5B8C6A" strokeWidth={1.75} />, label: "Historique", desc: "Accède à tous les produits que tu as consultés" },
          { icon: <Bell size={18} color="#5B8C6A" strokeWidth={1.75} />, label: "Actualités", desc: "Sois alerté des nouvelles infos sur tes marques" },
        ].map((pill) => (
          <div key={pill.label} className="flex items-center" style={{ background: "#F4F7F4", borderRadius: "12px", padding: "14px 16px", gap: "12px" }}>
            {pill.icon}
            <div className="flex flex-col">
              <span style={{ fontSize: "14px", fontWeight: 500, color: "#1A2E1A" }}>{pill.label}</span>
              <span style={{ fontSize: "12px", fontWeight: 400, color: "#7A9A7A" }}>{pill.desc}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ flex: 2 }} />
      <Dots active={2} />
      <div
        className="flex flex-col w-full"
        style={{ gap: "12px" }}
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
    </Shell>
  );
}
