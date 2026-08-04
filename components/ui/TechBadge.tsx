"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  delay?: number;
  className?: string;
};

export default function TechBadge({ label, delay = 0, className }: Props) {
  return (
    <motion.span
      className={cn("tech-badge", className)}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
    >
      {label}
    </motion.span>
  );
}
