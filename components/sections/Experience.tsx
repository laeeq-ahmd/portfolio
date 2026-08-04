"use client";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import TechBadge from "@/components/ui/TechBadge";

export default function Experience() {
  return (
    <section id="experience" className="section-container" style={{ zIndex: 1, position: "relative" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="section-label">EXPERIENCE.json</p>
        <h2
          className="text-4xl font-bold text-[#f0f0f0]"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Experience
        </h2>
      </motion.div>

      <div className="space-y-6">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="nb-card p-6"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              {/* Left */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="text-xs px-2 py-0.5"
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      background: "rgba(6,182,212,0.08)",
                      border: "1px solid var(--color-cyan)",
                      color: "var(--color-cyan)",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {exp.type.toUpperCase()}
                  </span>
                  <span
                    className="text-xs text-[#888]"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {exp.period}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold text-[#f0f0f0] mb-0.5"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {exp.role}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{ color: "var(--color-cyan)", fontFamily: "JetBrains Mono, monospace" }}
                >
                  @ {exp.company}
                </p>
                <p className="text-sm text-[#888] leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag) => (
                    <TechBadge key={tag} label={tag} />
                  ))}
                </div>
              </div>

              {/* Right: Cert link */}
              {exp.certLink && (
                <div className="shrink-0">
                  <a
                    href={exp.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nb-btn block text-center"
                    style={{ fontSize: "11px" }}
                  >
                    [ {exp.certLabel} ]
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
