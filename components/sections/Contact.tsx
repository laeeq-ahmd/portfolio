"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import TerminalWindow from "@/components/ui/TerminalWindow";
import TypewriterText from "@/components/ui/TypewriterText";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-container" style={{ zIndex: 1, position: "relative" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-label section-label-pink">CONTACT.sh</p>
        <h2
          className="text-5xl font-black text-[#f0f0f0] mt-2"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Contact
        </h2>
      </motion.div>

      <div className="max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow title="establish_connection.sh">
            {status === "sent" ? (
              <div className="min-h-[200px] flex flex-col justify-center space-y-1">
                <TypewriterText
                  text="Transmission received."
                  delay={0}
                  className="text-[#22c55e]"
                />
                <TypewriterText
                  text="Response incoming."
                  delay={0.8}
                  className="text-[#22c55e]"
                />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                <p className="text-xs text-[#52525b]">
                  guest@laeeq:~$ establish_connection --interactive
                </p>

                {/* Name field */}
                <div className="flex items-center gap-3">
                  <label className="text-xs text-[#71717a] w-14 shrink-0">{">"} name:</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="flex-1 bg-transparent border-b text-sm text-[#e4e4e7] outline-none py-1 placeholder-[#3f3f46] transition-colors"
                    style={{ borderColor: "#1f1f23" }}
                    placeholder="your name"
                    id="contact-name"
                  />
                </div>

                {/* Email field */}
                <div className="flex items-center gap-3">
                  <label className="text-xs text-[#71717a] w-14 shrink-0">{">"} email:</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="flex-1 bg-transparent border-b text-sm text-[#e4e4e7] outline-none py-1 placeholder-[#3f3f46] transition-colors"
                    style={{ borderColor: "#1f1f23" }}
                    placeholder="your@email.com"
                    id="contact-email"
                  />
                </div>

                {/* Message field */}
                <div className="flex gap-3">
                  <label className="text-xs text-[#71717a] w-14 shrink-0 pt-1">{">"} msg:</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="flex-1 bg-transparent border text-sm text-[#e4e4e7] outline-none p-2 resize-none placeholder-[#3f3f46] rounded"
                    style={{ borderColor: "#1f1f23" }}
                    placeholder="your message..."
                    id="contact-message"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-400">Transmission failed. Try again.</p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-2 text-sm rounded transition-all"
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    border: "1px solid #06b6d4",
                    color: "#06b6d4",
                    background: "transparent",
                  }}
                  whileHover={{ background: "#06b6d4", color: "#09090b" }}
                  id="contact-submit"
                >
                  {status === "sending" ? "[ Transmitting... ]" : "[ Send Transmission ]"}
                </motion.button>
              </form>
            )}
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
