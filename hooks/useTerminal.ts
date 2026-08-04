"use client";
import { useState, useCallback } from "react";
import { terminalCommands } from "@/lib/data";

export type HistoryEntry = {
  type: "input" | "output" | "error";
  text: string;
};

export type TerminalTheme = "default" | "matrix" | "cyberpunk";

export function useTerminal(onClose?: () => void) {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { type: "output", text: 'Mission Control Terminal v3.0 — type "help" for commands.' },
  ]);
  const [theme, setTheme] = useState<TerminalTheme>("default");

  const execute = useCallback(
    (raw: string) => {
      const input = raw.trim().toLowerCase();

      setHistory((prev) => [...prev, { type: "input", text: `guest@laeeq:~$ ${raw}` }]);

      if (input === "clear") {
        setHistory([{ type: "output", text: 'Mission Control Terminal v3.0 — type "help" for commands.' }]);
        return;
      }

      if (input === "theme matrix") {
        setTheme("matrix");
        setHistory((prev) => [...prev, { type: "output", text: "Theme switched: matrix" }]);
        return;
      }

      if (input === "theme cyberpunk") {
        setTheme("cyberpunk");
        setHistory((prev) => [...prev, { type: "output", text: "Theme switched: cyberpunk" }]);
        return;
      }

      if (input === "theme default") {
        setTheme("default");
        setHistory((prev) => [...prev, { type: "output", text: "Theme reset: default" }]);
        return;
      }

      if (input === "github") {
        setHistory((prev) => [
          ...prev,
          { type: "output", text: terminalCommands.github },
        ]);
        window.open("https://github.com/laeeq-ahmd/", "_blank");
        return;
      }

      if (input === "leetcode") {
        setHistory((prev) => [
          ...prev,
          { type: "output", text: terminalCommands.leetcode },
        ]);
        window.open("https://leetcode.com/u/Laeeq-Ahmed/", "_blank");
        return;
      }

      if (input === "resume") {
        setHistory((prev) => [
          ...prev,
          { type: "output", text: terminalCommands.resume },
        ]);
        window.open("/resume.pdf", "_blank");
        return;
      }

      if (input === "contact") {
        setHistory((prev) => [
          ...prev,
          { type: "output", text: terminalCommands.contact },
        ]);
        // Close terminal first, then scroll after a short delay so section is visible
        setTimeout(() => {
          onClose?.();
          setTimeout(() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }, 400);
        return;
      }

      if (input === "experience") {
        setHistory((prev) => [
          ...prev,
          { type: "output", text: terminalCommands.experience },
        ]);
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      if (input === "education") {
        setHistory((prev) => [
          ...prev,
          { type: "output", text: terminalCommands.education },
        ]);
        document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      if (input === "achievements") {
        setHistory((prev) => [
          ...prev,
          { type: "output", text: terminalCommands.achievements },
        ]);
        document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      if (input === "certifications") {
        setHistory((prev) => [
          ...prev,
          { type: "output", text: terminalCommands.certifications },
        ]);
        document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      const output = terminalCommands[input];
      if (output) {
        setHistory((prev) => [...prev, { type: "output", text: output }]);
      } else {
        setHistory((prev) => [
          ...prev,
          { type: "error", text: `bash: ${raw}: command not found. Type "help" for commands.` },
        ]);
      }
    },
    [onClose]
  );

  return { history, execute, theme };
}
