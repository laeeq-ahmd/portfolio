"use client";
import { motion } from "framer-motion";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="section-container" style={{ zIndex: 1, position: "relative" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="section-label section-label-cyan">CERTIFICATIONS.log</p>
        <h2
          className="text-5xl font-black text-[#f0f0f0] mt-2"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Certifications
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="nb-card p-6 flex flex-col h-full"
          >
            <div className="flex-1">
              <span
                className="inline-block px-2 py-1 mb-3 text-[10px] font-black tracking-widest"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  background: "var(--color-cyan)",
                  color: "#000",
                  border: "2px solid var(--color-cyan)",
                }}
              >
                {cert.context}
              </span>
              <h3 className="text-xl font-bold text-[#f0f0f0] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {cert.label}
              </h3>
              <p className="text-sm text-[#888] mb-6">
                {cert.description}
              </p>
            </div>
            
            {cert.certLink && (
              <div className="mt-auto pt-4 border-t-2" style={{ borderColor: "#222" }}>
                <a
                  href={cert.certLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold transition-colors hover:text-cyan-400"
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    color: "var(--color-cyan)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <span className="text-lg">→</span> VIEW CERTIFICATE
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
