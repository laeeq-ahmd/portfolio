"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  text: string;
  delay?: number;
  className?: string;
  speed?: number;
  color?: string;
};

export default function TypewriterText({
  text,
  delay = 0,
  className = "",
  speed = 32,
  color,
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <motion.p
      className={`text-sm leading-relaxed ${className}`}
      style={{
        fontFamily: "JetBrains Mono, monospace",
        minHeight: "1.4em",
        color: color,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: started ? 1 : 0 }}
    >
      {displayed}
    </motion.p>
  );
}
