"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { identity } from "@/lib/data";

const navLinks = [
  { label: "SKILLS", href: "#systems" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "CONTACT", href: "#contact" },
];

const RESUME_URL = "/resume.pdf";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentY < 80) {
        // Always show near the top
        setVisible(true);
      } else if (currentY > lastScrollY.current + 8) {
        // Scrolling down — hide
        setVisible(false);
      } else if (currentY < lastScrollY.current - 8) {
        // Scrolling up — show
        setVisible(true);
      }

      setScrolled(currentY > 40);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          className="fixed top-0 left-0 right-0 z-50"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <nav
            className="flex items-center justify-between w-full px-6 py-3"
            style={{
              background: scrolled ? "rgba(10,10,10,0.97)" : "rgba(10,10,10,0.7)",
              borderBottom: scrolled ? "2px solid var(--color-border)" : "2px solid transparent",
              transition: "background 0.3s, border-color 0.3s",
              backdropFilter: "blur(8px)",
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
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-yellow)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                >
                  {link.label}
                </button>
              ))}
              {/* Resume button */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nb-btn"
              style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", padding: "5px 12px" }}
            >
              RESUME ↗
            </a>
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
      )}
    </AnimatePresence>
  );
}
