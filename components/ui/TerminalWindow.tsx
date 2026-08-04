"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
};

export default function TerminalWindow({
  title = "terminal",
  children,
  className,
  glowOnHover = true,
}: Props) {
  return (
    <motion.div
      className={cn("terminal-window", className)}
      whileHover={glowOnHover ? { scale: 1.005 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Title bar */}
      <div className="terminal-titlebar">
        <div className="traffic-dot bg-red-500" />
        <div className="traffic-dot bg-yellow-400" />
        <div className="traffic-dot bg-green-500" />
        <span
          className="ml-2 text-xs text-[#52525b]"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          {title}
        </span>
      </div>
      {/* Content */}
      <div className="p-4">{children}</div>
    </motion.div>
  );
}
