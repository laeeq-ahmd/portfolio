"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCommandPalette } from "@/hooks/useCommandPalette";
import { commandPaletteItems, identity } from "@/lib/data";

export default function CommandPalette() {
  const { isOpen, query, setQuery, close } = useCommandPalette();
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commandPaletteItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelected(0);
    }
  }, [isOpen]);

  useEffect(() => setSelected(0), [query]);

  const handleSelect = (action: string) => {
    close();
    switch (action) {
      case "download-resume":
        window.open("/resume.pdf", "_blank");
        break;
      case "navigate-projects":
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "navigate-contact":
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "navigate-experience":
        document.getElementById("logs")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "open-github":
        window.open(identity.profiles[0].url, "_blank");
        break;
      case "open-leetcode":
        window.open(identity.profiles[1].url, "_blank");
        break;
      case "open-careerx":
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "open-smartfire":
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && filtered[selected]) {
      handleSelect(filtered[selected].action);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9980] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          {/* Palette */}
          <motion.div
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[9981] w-full max-w-lg overflow-hidden rounded-lg"
            style={{
              background: "#111113",
              border: "1px solid var(--color-border)",
              boxShadow: "0 24px 48px rgba(0,0,0,0.6)",
              fontFamily: "JetBrains Mono, monospace",
            }}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1f1f23]">
              <span className="text-[#71717a] text-sm">{">"}</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command..."
                className="flex-1 bg-transparent outline-none text-sm text-[#e4e4e7] placeholder-[#52525b]"
                spellCheck={false}
              />
              <span className="text-xs text-[#52525b]">ESC</span>
            </div>

            {/* Results */}
            <div className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <div className="px-4 py-3 text-xs text-[#71717a]">No commands found.</div>
              )}
              {filtered.map((item, i) => (
                <button
                  key={item.label}
                  className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors"
                  style={{
                    background: i === selected ? "rgba(6,182,212,0.08)" : "transparent",
                    borderLeft: i === selected ? "2px solid #06b6d4" : "2px solid transparent",
                  }}
                  onMouseEnter={() => setSelected(i)}
                  onClick={() => handleSelect(item.action)}
                >
                  <span className="text-sm text-[#e4e4e7]">{item.label}</span>
                  <span className="text-xs text-[#71717a]">{item.description}</span>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-[#1f1f23] flex gap-4 text-[10px] text-[#52525b]">
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>ESC close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
