"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bootSequence } from "@/lib/data";
import ProgressBar from "@/components/ui/ProgressBar";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const booted = sessionStorage.getItem("booted");
    if (booted) return;
    setVisible(true);

    let totalDelay = 200;
    bootSequence.forEach((item, index) => {
      setTimeout(() => setStep(index + 1), totalDelay);
      totalDelay += item.duration;
    });

    setTimeout(() => {
      setDone(true);
      setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("booted", "1");
      }, 400);
    }, totalDelay + 200);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col justify-center items-start px-8 md:px-24"
          style={{ background: "#09090b", fontFamily: "JetBrains Mono, monospace" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#22c55e] text-sm mb-8 tracking-widest">
            INITIALIZING MISSION CONTROL...
          </p>
          <div className="space-y-3 w-full max-w-sm">
            {bootSequence.map((item, index) => (
              <ProgressBar
                key={item.label}
                label={item.label}
                active={step > index}
                delay={index * 0.12}
              />
            ))}
          </div>
          {done && (
            <p className="mt-8 text-[#22c55e] text-sm tracking-widest">
              PORTFOLIO READY.
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
