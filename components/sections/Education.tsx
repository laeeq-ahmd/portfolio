"use client";
import { motion } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-container" style={{ zIndex: 1, position: "relative" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="section-label section-label-green">EDUCATION.log</p>
        <h2
          className="text-5xl font-black text-[#f0f0f0] mt-2"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Education
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-4 top-0 bottom-0 w-0.5"
          style={{ background: "var(--color-border)" }}
        />

        <div className="space-y-8">
          {education.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-4 w-8 h-8 flex items-center justify-center"
                style={{
                  background: "var(--color-bg)",
                  border: `2px solid ${entry.current ? "var(--color-cyan)" : "var(--color-border)"}`,
                  zIndex: 1,
                }}
              >
                <div
                  className="w-2.5 h-2.5"
                  style={{
                    background: entry.current ? "var(--color-cyan)" : "#333",
                  }}
                />
              </div>

              {/* Card */}
              <div
                className={`nb-card p-5 ${entry.current ? "" : "opacity-80"}`}
                style={entry.current ? {} : { borderColor: "#2a2a2a", boxShadow: "2px 2px 0px #2a2a2a" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    {/* Period + current badge */}
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs text-[#888] tracking-widest"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {entry.period}
                      </span>
                      {entry.current && (
                        <span
                          className="text-[10px] px-2 py-0.5 tracking-widest"
                          style={{
                            fontFamily: "JetBrains Mono, monospace",
                            background: "rgba(6,182,212,0.08)",
                            border: "1px solid var(--color-cyan)",
                            color: "var(--color-cyan)",
                          }}
                        >
                          CURRENT
                        </span>
                      )}
                    </div>

                    <h3
                      className="text-lg font-bold text-[#f0f0f0] mb-0.5"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {entry.degree}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-cyan)", fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {entry.institution}
                    </p>
                  </div>

                  {/* Grade badge */}
                  <div
                    className="nb-card shrink-0 px-4 py-3 text-center"
                    style={{ minWidth: "100px", borderColor: entry.current ? "var(--color-cyan)" : "#2a2a2a" }}
                  >
                    <p
                      className="text-xs text-[#888] tracking-widest mb-1"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {entry.gradeLabel}
                    </p>
                    <p
                      className="text-xl font-bold"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        color: entry.current ? "var(--color-cyan)" : "#f0f0f0",
                      }}
                    >
                      {entry.grade}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
