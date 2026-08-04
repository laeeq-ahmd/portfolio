"use client";
import { useState, useCallback } from "react";
import { useTerminal, type TerminalTheme } from "./useTerminal";

export function useTheme() {
  const [theme, setTheme] = useState<TerminalTheme>("default");

  const applyTheme = useCallback((t: TerminalTheme) => {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  return { theme, applyTheme };
}
