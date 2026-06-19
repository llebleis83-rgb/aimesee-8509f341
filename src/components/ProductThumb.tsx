import { useState, type CSSProperties, type ElementType } from "react";

type Props = {
  src?: string;
  alt: string;
  Icon: ElementType;
  width?: number | string;
  height?: number | string;
  radius?: number;
  /** Background shown behind the image when it loads. */
  imgBg?: string;
  /** Background shown for the fallback (icon) tile. */
  fallbackBg?: string;
  iconColor?: string;
  iconSize?: number;
  objectFit?: CSSProperties["objectFit"];
  className?: string;
  style?: CSSProperties;
};

export function ProductThumb({
  src,
  alt,
  Icon,
  width = 44,
  height = 44,
  radius = 8,
  imgBg = "#F4F7F4",
  fallbackBg = "#EAF3DE",
  iconColor = "#5B8C6A",
  iconSize = 20,
  objectFit = "cover",
  className,
  style,
}: Props) {
  const [errored, setErrored] = useState(false);
  const w = typeof width === "number" ? `${width}px` : width;
  const h = typeof height === "number" ? `${height}px` : height;

  if (src && !errored) {
    return (
      <img
        src={src}
        alt={alt}
        onError={() => setErrored(true)}
        className={className}
        style={{
          width: w,
          height: h,
          borderRadius: radius,
          objectFit,
          background: imgBg,
          display: "block",
          flexShrink: 0,
          ...style,
        }}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center ${className ?? ""}`}
      style={{
        width: w,
        height: h,
        background: fallbackBg,
        borderRadius: radius,
        flexShrink: 0,
        ...style,
      }}
    >
      <Icon size={iconSize} color={iconColor} strokeWidth={1.5} />
    </div>
  );
}
