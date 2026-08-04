"use client";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { motion } from "framer-motion";

const cursorLabels: Record<string, string> = {
  launch: "Launch",
  "view-code": "View Code",
  download: "Download",
  inspect: "Inspect",
  pointer: "",
  default: "",
};

export default function CustomCursor() {
  const { position, cursorState, isVisible } = useCustomCursor();
  const label = cursorLabels[cursorState] || "";

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border border-[#06b6d4]"
        style={{
          left: position.x,
          top: position.y,
          width: label ? 72 : 36,
          height: label ? 72 : 36,
          x: label ? "-50%" : "-50%",
          y: label ? "-50%" : "-50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          width: label ? 72 : 36,
          height: label ? 72 : 36,
          opacity: isVisible ? 1 : 0,
          borderColor: cursorState === "default" ? "#06b6d4" : "#06b6d4",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
      {/* Dot */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full bg-[#06b6d4]"
        style={{
          left: position.x,
          top: position.y,
          width: 4,
          height: 4,
          transform: "translate(-50%, -50%)",
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      />
      {/* Label */}
      {label && (
        <motion.span
          className="fixed pointer-events-none z-[9998] text-[10px] text-[#06b6d4]"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        >
          {label}
        </motion.span>
      )}
    </>
  );
}
