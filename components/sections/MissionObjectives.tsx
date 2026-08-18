"use client";
import { motion } from "framer-motion";
import { missionObjectives } from "@/lib/data";

export default function MissionObjectives() {
  return (
    <section className="section-container" style={{ zIndex: 1, position: "relative" }}>
      <div className="max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="section-label section-label-green">MISSIONS.md</p>
          <h2
            className="text-5xl font-black text-[#f0f0f0] mt-2"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Missions
          </h2>
        </motion.div>

        {/* Objectives as bold bordered cards */}
        <div className="space-y-4">
          {missionObjectives.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, type: "spring", stiffness: 300, damping: 24 }}
              className={`nb-card p-4 flex items-center gap-5 ${obj.completed ? "" : "opacity-50"}`}
              style={
                obj.completed
                  ? {}
                  : { borderColor: "#333", boxShadow: "5px 5px 0px #333" }
              }
            >
              {/* Index number */}
              <span
                className="text-2xl font-black shrink-0 w-10 text-center"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: obj.completed ? "#FFE500" : "#333",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Divider */}
              <div
                className="w-0.5 self-stretch shrink-0"
                style={{ background: obj.completed ? "#FFE500" : "#333" }}
              />

              {/* Text */}
              <span
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: obj.completed ? "#f0f0f0" : "#555",
                }}
              >
                {obj.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
