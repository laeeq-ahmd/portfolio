"use client";
import { motion } from "framer-motion";
import { achievements } from "@/lib/data";

const cardColors = [
  { cls: "nb-card-green", accent: "#22c55e" },
  { cls: "nb-card-amber", accent: "#f59e0b" },
  { cls: "nb-card", accent: "#06b6d4" },
  { cls: "nb-card-purple", accent: "#8b5cf6" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-container" style={{ zIndex: 1, position: "relative" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="section-label">ACHIEVEMENTS.txt</p>
        <h2
          className="text-5xl font-black text-[#f0f0f0] mt-2"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Achievements
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {achievements.map((a, i) => {
          const color = cardColors[i % cardColors.length];
          return (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`nb-card ${color.cls} p-5 flex flex-col justify-between gap-4`}
            >
              <div>
                <p
                  className="text-xs mb-2 tracking-widest"
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    color: color.accent,
                  }}
                >
                  {a.context.toUpperCase()}
                </p>
                <h3
                  className="text-lg font-bold text-[#f0f0f0] mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {a.label}
                </h3>
                <p className="text-xs text-[#888] leading-relaxed">
                  {a.description}
                </p>
              </div>

              {a.certLink && (
                <a
                  href={a.certLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nb-btn self-start text-center"
                  style={{
                    borderColor: color.accent,
                    color: color.accent,
                    boxShadow: `2px 2px 0px ${color.accent}`,
                    fontSize: "10px",
                  }}
                >
                  [ CERTIFICATE ]
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
