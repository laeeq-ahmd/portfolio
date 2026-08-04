"use client";
import { useState, useEffect, useCallback } from "react";

export type CursorState =
  | "default"
  | "launch"
  | "view-code"
  | "download"
  | "inspect"
  | "pointer";

export function useCustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  const setCursor = useCallback((state: CursorState) => {
    setCursorState(state);
  }, []);

  const resetCursor = useCallback(() => {
    setCursorState("default");
  }, []);

  return { position, cursorState, isVisible, setCursor, resetCursor };
}
