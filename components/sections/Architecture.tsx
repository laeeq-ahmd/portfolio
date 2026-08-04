"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";

// ─── Architecture Node types ───────────────────────────────────────────────────

type ArchNode = {
  id: string;
  label: string;
  description: string;
};

// ─── Vertical stack diagram ────────────────────────────────────────────────────

function StackDiagram({
  nodes,
  title,
  projectId,
}: {
  nodes: ArchNode[];
  title: string;
  projectId: string;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="terminal-window p-5 h-full">
      <div className="terminal-titlebar -mx-5 -mt-5 mb-5">
        <div className="traffic-dot bg-red-500" />
        <div className="traffic-dot bg-yellow-400" />
        <div className="traffic-dot bg-green-500" />
        <span
          className="ml-2 text-xs text-[#52525b]"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          {projectId}.arch
        </span>
      </div>

      <p
        className="text-sm font-semibold text-[#e4e4e7] mb-5"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        {title}
      </p>

      {/* SVG diagram */}
      <div className="relative flex flex-col items-center gap-0">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex flex-col items-center w-full">
            {/* Node */}
            <motion.button
              className="arch-node w-full max-w-[220px] text-center relative z-10"
              style={{
                borderColor: active === node.id ? "var(--color-cyan)" : undefined,
                color: active === node.id ? "var(--color-cyan)" : undefined,
                boxShadow:
                  active === node.id
                    ? "0 0 16px rgba(6,182,212,0.25)"
                    : undefined,
              }}
              onClick={() => setActive(active === node.id ? null : node.id)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              [ {node.label} ]
            </motion.button>

            {/* Tooltip */}
            <AnimatePresence>
              {active === node.id && (
                <motion.div
                  className="w-full max-w-[280px] px-3 py-2 rounded text-xs text-[#a1a1aa] z-20"
                  style={{
                    background: "rgba(6,182,212,0.06)",
                    border: "1px solid rgba(6,182,212,0.2)",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                  initial={{ opacity: 0, height: 0, y: -4 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {node.description}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Connector line */}
            {i < nodes.length - 1 && (
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.08 }}
              >
                {/* Animated pulse dot travelling down */}
                <div className="relative w-px h-6 bg-[#1f1f23]">
                  <motion.div
                    className="absolute w-1 h-1 rounded-full -left-0.5"
                    style={{ background: "#06b6d4" }}
                    animate={{ top: ["0%", "100%"], opacity: [1, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "linear",
                    }}
                  />
                </div>
                <div
                  className="text-[10px] text-[#3f3f46]"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  |
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <p
        className="text-[10px] text-[#3f3f46] mt-4 text-center"
        style={{ fontFamily: "JetBrains Mono, monospace" }}
      >
        Click node to inspect
      </p>
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="section-container"
      style={{ zIndex: 1, position: "relative" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p
          className="text-xs text-[#06b6d4] tracking-widest mb-2"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          cat architecture.json
        </p>
        <h2
          className="text-3xl font-semibold text-[#e4e4e7]"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Architecture
        </h2>
        <p
          className="text-sm text-[#52525b] mt-2"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          System design diagrams. Click any node to inspect.
        </p>
      </motion.div>

      {/* Diagrams grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.slice(0, 2).map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <StackDiagram
              nodes={project.architectureNodes}
              title={project.title}
              projectId={project.id}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
