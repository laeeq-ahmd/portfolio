"use client";
import { motion } from "framer-motion";
import { skillCategories, techRadar } from "@/lib/data";
import TerminalWindow from "@/components/ui/TerminalWindow";

// Solid chip colors cycling by category
const categoryChipColors = [
  "chip-yellow",
  "chip-green",
  "chip-pink",
  "chip-cyan",
  "chip-white",
  "chip-yellow",
];

// Updated JSON lines (no stale skills)
const jsonLines = [
  { text: "$ cat skills.json", color: "#06b6d4" },
  { text: "{", color: "#f0f0f0" },
  { text: '  "languages":  ["C++", "Java", "Python", "JavaScript"],', color: "#f0f0f0" },
  { text: '  "frontend":   ["React.js", "HTML5", "CSS3"],', color: "#f0f0f0" },
  { text: '  "backend":    ["FastAPI", "Node.js", "Express.js"],', color: "#f0f0f0" },
  { text: '  "databases":  ["MongoDB", "MySQL", "ChromaDB", "Redis"],', color: "#f0f0f0" },
  { text: '  "cloud":      ["AWS", "Kubernetes", "Docker"],', color: "#f0f0f0" },
  { text: '  "ai_ml":      ["LangChain", "LangGraph", "RAG",', color: "#FFE500" },
  { text: '               "LLMs", "Gemini API"]', color: "#FFE500" },
  { text: "}", color: "#f0f0f0" },
];

// Stagger container
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const chipItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 20 } },
};

export default function Systems() {
  return (
    <section id="systems" className="section-container" style={{ zIndex: 1, position: "relative" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-label">SKILLS.json</p>
        <h2
          className="text-5xl font-black text-[#f0f0f0] mt-2"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Tech Stack
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
                <p key={i} className="text-xs leading-relaxed" style={{ color: line.color }}>
                  {line.text}
                </p>
              ))}
            </div>
          </TerminalWindow>

          {/* Tech Radar bars */}
          <div className="nb-card p-5 mt-6">
            <p
              className="text-xs mb-5 tracking-widest font-bold"
              style={{ fontFamily: "JetBrains Mono, monospace", color: "#FFE500" }}
            >
              PROFICIENCY_RADAR
            </p>
            <div className="space-y-4">
              {techRadar.map((item, i) => (
                <div key={item.axis} className="flex items-center gap-3">
                  <span
                    className="text-xs w-24 shrink-0 text-[#888]"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {item.axis}
                  </span>
                  <div
                    className="flex-1 h-3 overflow-hidden"
                    style={{ background: "#1a1a1a", border: "2px solid #222" }}
                  >
                    <motion.div
                      className="h-full"
                      style={{ background: "#FFE500" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
                    />
                  </div>
                  <span
                    className="text-xs w-8 text-right shrink-0 font-bold"
                    style={{ fontFamily: "JetBrains Mono, monospace", color: "#FFE500" }}
                  >
                    {item.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── Right: Solid skill chips ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          {skillCategories.map((cat, ci) => (
            <div key={cat.category}>
              {/* Category label */}
              <p
                className={`section-label mb-3 ${
                  ci === 0 ? "" :
                  ci === 1 ? "section-label-green" :
                  ci === 2 ? "section-label-pink" :
                  ci === 3 ? "section-label-cyan" :
                  ci === 4 ? "" : "section-label-green"
                }`}
              >
                {cat.category}
              </p>

              {/* Solid fill chips */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={chipItem}
                    className={`skill-chip ${categoryChipColors[ci % categoryChipColors.length]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
