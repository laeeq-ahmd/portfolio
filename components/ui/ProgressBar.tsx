"use client";
import { motion } from "framer-motion";

type Props = {
  label: string;
  active: boolean;
  delay?: number;
};

export default function ProgressBar({ label, active, delay = 0 }: Props) {
  return (
    <div className="flex items-center gap-4" style={{ fontFamily: "JetBrains Mono, monospace" }}>
      <span className="text-[#71717a] text-xs w-44 shrink-0">{label}...</span>
      <div className="h-[6px] w-32 rounded-sm overflow-hidden" style={{ background: "#1f1f23" }}>
        <motion.div
          className="h-full rounded-sm"
          style={{ background: "#22c55e" }}
          initial={{ width: "0%" }}
          animate={{ width: active ? "100%" : "0%" }}
          transition={{ duration: 0.25, delay, ease: "easeOut" }}
        />
      </div>
      <motion.span
        className="text-xs"
        style={{ color: "#22c55e" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ delay: delay + 0.25 }}
      >
        100%
      </motion.span>
    </div>
  );
}
