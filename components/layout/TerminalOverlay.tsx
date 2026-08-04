"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTerminal } from "@/hooks/useTerminal";

export default function TerminalOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { history, execute, theme } = useTerminal(() => setIsOpen(false));
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  // Theme colors
  const themeColors = {
    default: { text: "#22c55e", bg: "#09090b", border: "#1f1f23", prompt: "#06b6d4" },
    matrix: { text: "#22c55e", bg: "#000", border: "#22c55e40", prompt: "#22c55e" },
    cyberpunk: { text: "#f0abfc", bg: "#0a0010", border: "#f0abfc40", prompt: "#fbbf24" },
  };
  const colors = themeColors[theme];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    execute(input);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9990] flex flex-col"
          style={{ background: colors.bg, fontFamily: "JetBrains Mono, monospace" }}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Title bar */}
          <div
            className="flex items-center justify-between px-6 py-3 border-b shrink-0"
            style={{ borderColor: colors.border }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="ml-3 text-xs" style={{ color: colors.text }}>
                Mission Control Terminal — v3.0
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs opacity-50 hover:opacity-100 transition-opacity"
              style={{ color: colors.text }}
            >
              [ESC]
            </button>
          </div>

          {/* History */}
          <div
            ref={historyRef}
            className="flex-1 overflow-y-auto px-6 py-4 space-y-1"
          >
            {history.map((entry, i) => (
              <div key={i} className="text-sm leading-relaxed whitespace-pre-wrap">
                {entry.type === "input" && (
                  <span style={{ color: colors.prompt }}>{entry.text}</span>
                )}
                {entry.type === "output" && (
                  <span style={{ color: colors.text }}>{entry.text}</span>
                )}
                {entry.type === "error" && (
                  <span style={{ color: "#f87171" }}>{entry.text}</span>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-6 py-4 border-t shrink-0"
            style={{ borderColor: colors.border }}
          >
            <span className="text-sm" style={{ color: colors.prompt }}>
              guest@laeeq:~$
            </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: colors.text, caretColor: colors.text }}
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal input"
            />
            <span
              className="cursor-blink text-sm"
              style={{ color: colors.text }}
            >
              |
            </span>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
