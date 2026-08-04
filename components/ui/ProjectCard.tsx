"use client";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/data";
import TechBadge from "./TechBadge";

// ─── Project-specific visuals ─────────────────────────────────────────────────

function NeuralNetworkVisual() {
  const nodes = [
    { x: 20, y: 50, color: "#06b6d4" },
    { x: 50, y: 20, color: "#3b82f6" },
    { x: 50, y: 80, color: "#8b5cf6" },
    { x: 80, y: 50, color: "#22c55e" },
  ];
  const edges = [
    [0, 1], [0, 2], [1, 3], [2, 3],
  ];

  return (
    <div className="relative w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={`${nodes[a].x}%`} y1={`${nodes[a].y}%`}
            x2={`${nodes[b].x}%`} y2={`${nodes[b].y}%`}
            stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={`${node.x}%`} cy={`${node.y}%`} r="3"
            fill={node.color}
            animate={{ r: [3, 4.5, 3], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </svg>
      <div className="absolute bottom-1 left-0 right-0 text-center">
        <span className="text-[10px] text-[#52525b]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
          RAG PIPELINE ACTIVE
        </span>
      </div>
    </div>
  );
}

function CCTVVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative" style={{ background: "#0a0a0a", border: "1px solid #1f1f23" }}>
        {/* Fake CCTV overlay */}
        <div className="absolute inset-2" style={{ background: "#111" }} />
        {/* Bounding box */}
        <motion.div
          className="absolute"
          style={{
            top: "20%", left: "25%", width: "40%", height: "45%",
            border: "2px solid #f59e0b",
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <div className="absolute top-2 right-2 text-[8px] text-[#f59e0b]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
          DETECTED: FIRE 94.2%
        </div>
        <div className="absolute bottom-2 left-2 text-[8px] text-[#22c55e]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
          ESP32: ALERT SENT
        </div>
        <div className="absolute top-2 left-2 flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 status-dot" />
          <span className="text-[8px] text-[#71717a]" style={{ fontFamily: "JetBrains Mono, monospace" }}>REC</span>
        </div>
      </div>
    </div>
  );
}

function WebSocketVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
        {/* Player 1 */}
        <rect x="5" y="20" width="20" height="20" rx="2" fill="#111113" stroke="#06b6d4" strokeWidth="0.8" />
        <text x="15" y="33" textAnchor="middle" fontSize="4" fill="#06b6d4" fontFamily="JetBrains Mono">P1</text>
        {/* Player 2 */}
        <rect x="75" y="20" width="20" height="20" rx="2" fill="#111113" stroke="#8b5cf6" strokeWidth="0.8" />
        <text x="85" y="33" textAnchor="middle" fontSize="4" fill="#8b5cf6" fontFamily="JetBrains Mono">P2</text>
        {/* Server */}
        <rect x="40" y="25" width="20" height="10" rx="2" fill="#111113" stroke="#22c55e" strokeWidth="0.8" />
        <text x="50" y="32" textAnchor="middle" fontSize="3" fill="#22c55e" fontFamily="JetBrains Mono">NODE</text>
        {/* Animated packets */}
        <motion.circle r="1.5" fill="#06b6d4"
          animate={{ cx: [25, 40], cy: 30 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle r="1.5" fill="#8b5cf6"
          animate={{ cx: [75, 60], cy: 30 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", delay: 0.4 }}
        />
      </svg>
    </div>
  );
}

function ChartVisual() {
  const bars = [40, 65, 45, 80, 55, 90, 70];
  return (
    <div className="relative w-full h-full flex items-end justify-around px-2 pb-2 pt-4">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-full mx-0.5 rounded-sm"
          style={{ background: "linear-gradient(180deg, #06b6d4, #3b82f6)" }}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function AgentGraphVisual() {
  const nodes = [
    { x: 50, y: 15, label: "INPUT", color: "#06b6d4" },
    { x: 50, y: 40, label: "LangChain", color: "#8b5cf6" },
    { x: 50, y: 65, label: "LangGraph", color: "#3b82f6" },
    { x: 25, y: 85, label: "LLM", color: "#22c55e" },
    { x: 75, y: 85, label: "OUTPUT", color: "#f59e0b" },
  ];
  const edges = [[0,1],[1,2],[2,3],[2,4]];
  return (
    <div className="relative w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={`${nodes[a].x}%`} y1={`${nodes[a].y}%`}
            x2={`${nodes[b].x}%`} y2={`${nodes[b].y}%`}
            stroke="#8b5cf6" strokeWidth="0.6" strokeOpacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={`${node.x}%`} cy={`${node.y}%`} r="3.5"
            fill={node.color}
            animate={{ r: [3.5, 5, 3.5], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </svg>
      <div className="absolute bottom-1 left-0 right-0 text-center">
        <span className="text-[10px] text-[#52525b]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
          AGENT PIPELINE
        </span>
      </div>
    </div>
  );
}

const visualMap = {
  "neural-network": NeuralNetworkVisual,
  "cctv-feed": CCTVVisual,
  "websocket-lines": WebSocketVisual,
  chart: ChartVisual,
  "agent-graph": AgentGraphVisual,
};

// ─── Status badge colors ───────────────────────────────────────────────────────
const statusColors = {
  OPERATIONAL: "#22c55e",
  MONITORING: "#06b6d4",
  ONLINE: "#22c55e",
};

// ─── Project Card ─────────────────────────────────────────────────────────────

type Props = {
  project: Project;
  index: number;
  isExpanded: boolean;
  onExpand: () => void;
};

export default function ProjectCard({ project, index, isExpanded, onExpand }: Props) {
  const Visual = visualMap[project.visualType];
  const statusColor = statusColors[project.status];

  return (
    <>
      {/* Compact card */}
      <motion.div
        layoutId={`project-${project.id}`}
        className="terminal-window cursor-pointer overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        onClick={onExpand}
        data-cursor="launch"
      >
        <div className="terminal-titlebar">
          <div className="traffic-dot bg-red-500" />
          <div className="traffic-dot bg-yellow-400" />
          <div className="traffic-dot bg-green-500" />
          <span className="ml-2 text-xs text-[#52525b] flex-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            {project.id}.module
          </span>
          <span className="text-[10px] ml-auto" style={{ color: statusColor, fontFamily: "JetBrains Mono, monospace" }}>
            [{project.status}]
          </span>
        </div>

        {/* Visual preview */}
        <div className="h-32 bg-[#0a0a0a] overflow-hidden">
          <Visual />
        </div>

        {/* Card content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="text-base font-semibold text-[#e4e4e7]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              {project.title}
            </h3>
            <p className="text-xs text-[#52525b]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
              {project.subtitle}
            </p>
          </div>

          <p className="text-xs text-[#71717a] leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((t) => (
              <TechBadge key={t} label={t} />
            ))}
            {project.tech.length > 5 && (
              <span className="tech-badge">+{project.tech.length - 5}</span>
            )}
          </div>

          <p className="text-[10px] text-[#06b6d4]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            Click to expand case study --&gt;
          </p>
        </div>
      </motion.div>

      {/* Expanded case study */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layoutId={`project-${project.id}-expanded`}
            className="fixed inset-4 md:inset-12 z-50 overflow-y-auto rounded-lg"
            style={{ background: "#111113", border: "1px solid var(--color-border)" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="terminal-titlebar sticky top-0 z-10" style={{ background: "#111113" }}>
              <div className="traffic-dot bg-red-500" />
              <div className="traffic-dot bg-yellow-400" />
              <div className="traffic-dot bg-green-500" />
              <span className="ml-2 text-xs flex-1 text-[#e4e4e7]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                {project.id}.module — CASE STUDY
              </span>
              <button
                onClick={onExpand}
                className="text-xs text-[#52525b] hover:text-[#e4e4e7] ml-auto transition-colors"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                [close]
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              {/* Title */}
              <div>
                <h2 className="text-2xl font-semibold text-[#e4e4e7]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {project.title}
                </h2>
                <p className="text-sm text-[#52525b] mt-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  {project.subtitle}
                </p>
              </div>

              {/* Visual */}
              <div className="h-40 bg-[#0a0a0a] rounded overflow-hidden">
                <Visual />
              </div>

              {/* Description */}
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{project.description}</p>

              {/* Metrics grid */}
              <div>
                <p className="text-xs text-[#52525b] mb-3 tracking-widest" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  METRICS
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="terminal-window p-3 text-center"
                    >
                      <p className="text-lg font-bold text-[#06b6d4]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                        {m.value}
                      </p>
                      <p className="text-[10px] text-[#52525b] mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full tech stack */}
              <div>
                <p className="text-xs text-[#52525b] mb-3 tracking-widest" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  TECH STACK
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-[#1f1f23] px-4 py-2 rounded hover:border-[#06b6d4] hover:text-[#06b6d4] text-[#71717a] transition-all"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                  data-cursor="view-code"
                >
                  [ View Code ]
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm border border-[#06b6d4] text-[#06b6d4] px-4 py-2 rounded hover:bg-[#06b6d4] hover:text-[#09090b] transition-all"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                    data-cursor="launch"
                  >
                    [ Launch ]
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
