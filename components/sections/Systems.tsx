"use client";
import { motion } from "framer-motion";
import { skillCategories, techRadar } from "@/lib/data";
import TerminalWindow from "@/components/ui/TerminalWindow";
import TechBadge from "@/components/ui/TechBadge";

const jsonLines = [
  { text: "$ cat skills.json", color: "#06b6d4" },
  { text: "{", color: "#f0f0f0" },
  { text: '  "languages":  ["C++", "Java", "Python", "JavaScript"],', color: "#f0f0f0" },
  { text: '  "frontend":   ["React.js", "Next.js", "Tailwind CSS"],', color: "#f0f0f0" },
  { text: '  "backend":    ["FastAPI", "Node.js", "Express.js"],', color: "#f0f0f0" },
  { text: '  "databases":  ["MongoDB", "MySQL", "ChromaDB"],', color: "#f0f0f0" },
  { text: '  "cloud":      ["AWS", "Kubernetes", "Docker"],', color: "#f0f0f0" },
  { text: '  "ai_ml":      ["LangChain", "LangGraph", "RAG",', color: "#06b6d4" },
  { text: '               "LLMs", "YOLOv8", "XGBoost", "Fine-tuning"]', color: "#06b6d4" },
  { text: "}", color: "#f0f0f0" },
];

export default function Systems() {
  return (
    <section id="systems" className="section-container" style={{ zIndex: 1, position: "relative" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="section-label">SYSTEM_DIAGNOSTICS.sh</p>
        <h2
          className="text-4xl font-bold text-[#f0f0f0]"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Systems
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ─── Left: JSON terminal ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <TerminalWindow title="cat skills.json">
            <div className="space-y-0.5" style={{ fontFamily: "JetBrains Mono, monospace" }}>
              {jsonLines.map((line, i) => (
                <p
                  key={i}
                  className="text-xs leading-relaxed"
                  style={{ color: line.color }}
                >
                  {line.text}
                </p>
              ))}
            </div>
          </TerminalWindow>
        </motion.div>

        {/* ─── Right: Tech Radar + Badges ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Tech Radar bars */}
          <div className="nb-card p-4">
            <p className="text-xs text-[#888] mb-4 tracking-widest" style={{ fontFamily: "JetBrains Mono, monospace" }}>
              TECH_RADAR
            </p>
            <div className="space-y-3">
              {techRadar.map((item, i) => (
                <div key={item.axis} className="flex items-center gap-3">
                  <span
                    className="text-xs text-[#888] w-28 shrink-0"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {item.axis}
                  </span>
                  <div className="flex-1 h-2 overflow-hidden" style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}>
                    <motion.div
                      className="h-full"
                      style={{ background: "var(--color-cyan)" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                    />
                  </div>
                  <span
                    className="text-xs text-[#888] w-8 text-right shrink-0"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {item.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skill badges — show all categories */}
          {skillCategories.map((cat, ci) => (
            <div key={cat.category}>
              <p
                className="text-xs text-[#888] mb-2 tracking-widest"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                {cat.category.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <TechBadge key={skill} label={skill} delay={(ci * 4 + si) * 0.03} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
