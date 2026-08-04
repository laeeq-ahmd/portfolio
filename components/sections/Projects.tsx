"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import TechBadge from "@/components/ui/TechBadge";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="section-container" style={{ zIndex: 1, position: "relative" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-xs text-[#06b6d4] tracking-widest mb-2" style={{ fontFamily: "JetBrains Mono, monospace" }}>
          ls -la ./mission_modules/
        </p>
        <h2 className="text-3xl font-semibold text-[#e4e4e7]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          Projects
        </h2>
      </motion.div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            isExpanded={expanded === project.id}
            onExpand={() => setExpanded(expanded === project.id ? null : project.id)}
          />
        ))}
      </div>

      {/* Expanded overlay */}
      <AnimatePresence>
        {expanded && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpanded(null)}
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
