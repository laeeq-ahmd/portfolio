"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { identity } from "@/lib/data";
import TerminalWindow from "@/components/ui/TerminalWindow";
import TypewriterText from "@/components/ui/TypewriterText";

const bootLines = [
  { text: "$ ./initialize_portfolio.sh", delay: 0.3, color: "#06b6d4" },
  { text: "Loading AI Systems...         [OK]", delay: 1.0, color: "#22c55e" },
  { text: "Calibrating Mission Control... [OK]", delay: 1.7, color: "#22c55e" },
  { text: "Connecting to orbit...         [OK]", delay: 2.4, color: "#22c55e" },
  { text: "guest@laeeq:~$ whoami", delay: 3.1, color: "#06b6d4" },
];

const IDENTITY_DELAY = 4000;

export default function Hero() {
  const [showIdentity, setShowIdentity] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIdentity(true), IDENTITY_DELAY);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="mission"
      className="relative min-h-screen flex flex-col justify-center pt-24"
      style={{ zIndex: 1 }}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ─── Left: Identity ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p
              className="section-label"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              PORTFOLIO / v3.0
            </p>

            <h1
              className="text-6xl md:text-7xl font-bold leading-none tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              <span className="block text-[#f0f0f0]">Laeeq</span>
              <span
                className="block"
                style={{ color: "var(--color-cyan)" }}
              >
                Ahmed
              </span>
            </h1>

            {/* Role tags — neubrutalism pills */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {identity.taglines.map((tag) => (
                <span
                  key={tag}
                  className="nb-btn text-xs"
                  style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px" }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {identity.profiles.map((p) => (
                <a
                  key={p.label}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nb-btn"
                >
                  [ {p.label} ]
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── Right: Terminal Window ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TerminalWindow title="initialize_portfolio.sh">
              <div
                className="space-y-0.5 min-h-[200px]"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                {bootLines.map((line, i) => (
                  <TypewriterText
                    key={i}
                    text={line.text}
                    delay={line.delay}
                    className="text-sm"
                    color={line.color}
                  />
                ))}

                {showIdentity && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="pt-3 space-y-1 border-t-2"
                    style={{ borderColor: "var(--color-border-dim)" }}
                  >
                    <p className="text-xs text-[#888]">
                      {identity.bio}
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                      LAT 33.68 N &nbsp;|&nbsp; LON 73.04 E &nbsp;|&nbsp; India
                    </p>
                  </motion.div>
                )}

                <span className="cursor-blink text-[#06b6d4] text-sm inline-block mt-1">_</span>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>

        {/* ─── Scroll hint ────────────────────────────────────────────── */}
        <motion.div
          className="mt-16 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
        >
          <div
            className="h-px flex-1 max-w-[60px]"
            style={{ background: "var(--color-cyan)" }}
          />
          <p
            className="text-xs text-[#888] tracking-widest"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            SCROLL DOWN
          </p>
        </motion.div>
      </div>
    </section>
  );
}
