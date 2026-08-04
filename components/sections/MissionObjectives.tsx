"use client";
import { motion } from "framer-motion";
import { missionObjectives } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function MissionObjectives() {
  return (
    <section className="section-container" style={{ zIndex: 1, position: "relative" }}>
      <div className="max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-xs text-[#06b6d4] tracking-widest mb-2" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            MISSION_OBJECTIVES.txt
          </p>
          <h2 className="text-3xl font-semibold text-[#e4e4e7]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Mission Objectives
          </h2>
        </motion.div>

        {/* Objectives list */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-3"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          {missionObjectives.map((obj, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex items-center gap-4"
            >
              {/* Checkbox */}
              <motion.span
                className="text-sm shrink-0"
                style={{ color: obj.completed ? "#22c55e" : "#52525b" }}
                animate={
                  obj.completed
                    ? { textShadow: ["0 0 8px #22c55e80", "0 0 16px #22c55e60", "0 0 8px #22c55e80"] }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              >
                {obj.completed ? "[x]" : "[ ]"}
              </motion.span>

              {/* Text */}
              <span
                className="text-sm"
                style={{ color: obj.completed ? "#e4e4e7" : "#52525b" }}
              >
                {obj.text}
              </span>

              {/* Completed marker */}
              {obj.completed && (
                <span className="text-xs text-[#22c55e] ml-auto shrink-0">COMPLETE</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
