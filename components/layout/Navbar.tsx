"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 8) {
        setVisible(false);
        setMobileOpen(false); // close mobile menu on scroll down
      } else if (currentY < lastScrollY.current - 8) {
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
    setMobileOpen(false);
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
            className="flex items-center justify-between w-full px-5 py-3"
            style={{
              background: scrolled || mobileOpen ? "rgba(10,10,10,0.97)" : "rgba(10,10,10,0.7)",
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
              style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-cyan)" }}
            >
              guest@laeeq:~$
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-5">
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

            {/* Desktop terminal hint — clickable */}
            <button
              onClick={() => window.dispatchEvent(new Event("open-terminal"))}
              className="hidden md:block text-xs text-[#888] nb-btn"
              style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px" }}
              title="Open terminal"
            >
              Ctrl+`
            </button>

            {/* Mobile right side: quick-action buttons + hamburger */}
            <div className="flex md:hidden items-center gap-2">
              {/* Terminal tap button */}
              <button
                onClick={() => window.dispatchEvent(new Event("open-terminal"))}
                className="text-[10px] font-black px-2 py-1"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  background: "#06b6d4",
                  color: "#000",
                  border: "2px solid #06b6d4",
                  boxShadow: "2px 2px 0 #000",
                }}
                title="Open terminal"
              >
                &gt;_
              </button>

              {/* Palette tap button */}
              <button
                onClick={() => window.dispatchEvent(new Event("open-palette"))}
                className="text-[10px] font-black px-2 py-1"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  background: "#FFE500",
                  color: "#000",
                  border: "2px solid #FFE500",
                  boxShadow: "2px 2px 0 #000",
                }}
                title="Open command palette"
              >
                ⌘K
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen((p) => !p)}
                className="flex flex-col gap-1 p-1"
                aria-label="Toggle menu"
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="block h-0.5 w-5 transition-all"
                    style={{ background: mobileOpen ? "#FFE500" : "#888" }}
                  />
                ))}
              </button>
            </div>
          </nav>

          {/* Mobile dropdown menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden"
                style={{
                  background: "rgba(10,10,10,0.97)",
                  borderBottom: "2px solid var(--color-border)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex flex-col px-5 py-3 gap-3">
                  {navLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => scrollTo(link.href)}
                      className="text-left text-xs tracking-widest text-[#888] py-1 transition-colors"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {link.label}
                    </button>
                  ))}
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nb-btn text-center mt-2"
                    style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", padding: "6px 12px" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    RESUME ↗
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
