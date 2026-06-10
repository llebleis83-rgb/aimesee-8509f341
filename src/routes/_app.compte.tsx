import { createFileRoute } from "@tanstack/react-router";
import {
  Bell,
  Shield,
  LogOut,
  User,
  ChevronRight,
  Languages,
  Package,
  Mail,
  Star,
  FileText,
} from "lucide-react";

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

const ROW_STYLE = {
  height: "52px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "0 16px",
  borderBottom: "0.5px solid #F4F7F4",
  background: "white",
  cursor: "pointer",
  width: "100%",
  fontFamily: "'DM Sans', sans-serif",
} as const;

const LABEL_STYLE = {
  fontSize: "14px",
  fontWeight: 400,
  color: "#1A2E1A",
  flex: 1,
  textAlign: "left" as const,
};

const SECTION_LABEL_STYLE = {
  fontSize: "10px",
  fontWeight: 500,
  color: "#AAC0AA",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  padding: "16px 16px 6px",
};

function Row({
  icon,
  label,
  iconBg = "#EAF3DE",
  iconColor = "#5B8C6A",
  labelColor = "#1A2E1A",
  rightValue,
  showChevron = true,
}: {
  icon: React.ReactNode;
  label: string;
  iconBg?: string;
  iconColor?: string;
  labelColor?: string;
  rightValue?: string;
  showChevron?: boolean;
}) {
  return (
    <button style={ROW_STYLE}>
      <div style={{ ...ICON_CONTAINER, background: iconBg }}>{icon}</div>
      <span style={{ ...LABEL_STYLE, color: labelColor }}>{label}</span>
      {rightValue && (
        <span style={{ fontSize: "12px", color: "#7A9A7A", fontWeight: 400 }}>
          {rightValue}
        </span>
      )}
      {showChevron && <ChevronRight size={14} color="#DDE8DD" />}
    </button>
  );
}

function Compte() {
  const iconProps = { size: 16, color: "#5B8C6A", strokeWidth: 1.75 };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "white", minHeight: "100%" }}>
      {/* Hero */}
      <div
        style={{
          background: "#F4F7F4",
          padding: "24px 16px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "999px",
            background: "#DDE8DD",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <User size={28} color="#5B8C6A" strokeWidth={1.75} />
        </div>
        <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A2E1A", marginTop: "12px" }}>
          Marie Dupont
        </div>
        <div style={{ fontSize: "13px", fontWeight: 400, color: "#7A9A7A", marginTop: "4px" }}>
          marie@email.com
        </div>
        <button
          style={{
            fontSize: "12px",
            fontWeight: 400,
            color: "#5B8C6A",
            marginTop: "8px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Modifier le profil
        </button>
      </div>

      {/* PRÉFÉRENCES */}
      <div style={SECTION_LABEL_STYLE}>Préférences</div>
      <Row
        icon={<Languages {...iconProps} />}
        label="Langue de l'app"
        rightValue="Français"
      />
      <Row icon={<Bell {...iconProps} />} label="Notifications" />
      <Row icon={<Shield {...iconProps} />} label="Confidentialité & données" />

      {/* PARAMÈTRES */}
      <div style={SECTION_LABEL_STYLE}>Paramètres</div>
      <Row icon={<Package {...iconProps} />} label="Proposer un produit manquant" />
      <Row icon={<Mail {...iconProps} />} label="Nous contacter" />
      <Row icon={<Star {...iconProps} />} label="Noter l'app" />
      <Row icon={<FileText {...iconProps} />} label="Mentions légales" />

      {/* COMPTE */}
      <div style={SECTION_LABEL_STYLE}>Compte</div>
      <Row
        icon={<LogOut size={16} color="#E57373" strokeWidth={1.75} />}
        label="Se déconnecter"
        iconBg="#FFF5F5"
        labelColor="#E57373"
        showChevron={false}
      />
    </div>
  );
}
