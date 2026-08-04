"use client";

interface MarqueeProps {
  items: string[];
  separator?: string;
  speed?: number; // seconds for one full loop
  variant?: "yellow" | "green" | "pink" | "cyan" | "white";
  reverse?: boolean;
}

const variantStyles: Record<string, { bg: string; text: string; border: string }> = {
  yellow: { bg: "#FFE500", text: "#000000", border: "#FFE500" },
  green:  { bg: "#39FF14", text: "#000000", border: "#39FF14" },
  pink:   { bg: "#FF2D78", text: "#ffffff", border: "#FF2D78" },
  cyan:   { bg: "#06b6d4", text: "#000000", border: "#06b6d4" },
  white:  { bg: "#f0f0f0", text: "#000000", border: "#f0f0f0" },
};

export default function Marquee({
  items,
  separator = "//",
  speed = 22,
  variant = "yellow",
  reverse = false,
}: MarqueeProps) {
  const style = variantStyles[variant];
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className="marquee-wrapper w-full overflow-hidden"
      style={{
        background: style.bg,
        borderTop: `2px solid ${style.border}`,
        borderBottom: `2px solid ${style.border}`,
        padding: "10px 0",
      }}
    >
      <div
        className="marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center shrink-0"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: style.text,
              textTransform: "uppercase",
              paddingRight: "2rem",
            }}
          >
            {item}
            <span
              style={{
                marginLeft: "2rem",
                opacity: 0.5,
                fontSize: "14px",
              }}
            >
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
