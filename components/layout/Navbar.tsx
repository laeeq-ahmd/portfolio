"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { identity } from "@/lib/data";

const navLinks = [
  { label: "SYSTEMS", href: "#systems" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <nav
        className="flex items-center justify-between w-full px-6 py-3"
        style={{
          background: scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0.7)",
          borderBottom: scrolled ? "2px solid var(--color-border)" : "2px solid transparent",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        {/* Logo */}
        <a
          href="#mission"
          onClick={(e) => { e.preventDefault(); scrollTo("#mission"); }}
          className="text-sm tracking-widest transition-colors"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: "var(--color-cyan)",
          }}
        >
          guest@laeeq:~$
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-xs tracking-widest text-[#888] transition-colors"
              style={{
                fontFamily: "JetBrains Mono, monospace",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cyan)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Terminal hint */}
        <span
          className="hidden md:block text-xs text-[#888] nb-btn"
          style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px" }}
        >
          Ctrl+`
        </span>
      </nav>
    </motion.header>
  );
}
