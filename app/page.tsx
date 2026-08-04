"use client";

import dynamic from "next/dynamic";
import { useLenis } from "@/hooks/useLenis";
import { Suspense } from "react";

// ─── Static imports ────────────────────────────────────────────────────────────
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import MissionObjectives from "@/components/sections/MissionObjectives";
import Systems from "@/components/sections/Systems";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Marquee from "@/components/ui/Marquee";

// ─── Dynamic imports (heavy — overlays only) ───────────────────────────────────
const LoadingScreen = dynamic(
  () => import("@/components/layout/LoadingScreen"),
  { ssr: false }
);
const TerminalOverlay = dynamic(
  () => import("@/components/layout/TerminalOverlay"),
  { ssr: false }
);
const CommandPalette = dynamic(
  () => import("@/components/layout/CommandPalette"),
  { ssr: false }
);
const CustomCursor = dynamic(
  () => import("@/components/layout/CustomCursor"),
  { ssr: false }
);

export default function Home() {
  useLenis();

  return (
    <>
      {/* Loading screen */}
      <Suspense fallback={null}>
        <LoadingScreen />
      </Suspense>

      {/* Custom cursor */}
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* ─── Main Content ───────────────────────────────────────────────────── */}
      <main>
        {/* Hero */}
        <Hero />

        {/* Mission Objectives */}
        <MissionObjectives />

        {/* Systems / Skills */}
        <section id="systems">
          <Systems />
        </section>

        {/* Projects */}
        <section id="projects">
          <Projects />
        </section>

        {/* Section divider marquee */}
        <Marquee
          items={["Available for Work", "AI Engineer", "Full Stack Dev", "India", "Open Source", "Building in Public"]}
          variant="green"
          speed={18}
          reverse
        />

        {/* Experience */}
        <section id="experience">
          <Experience />
        </section>

        {/* Education */}
        <section id="education">
          <Education />
        </section>

        {/* Achievements */}
        <section id="achievements">
          <Achievements />
        </section>

        {/* Certifications */}
        <section id="certifications">
          <Certifications />
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* ─── Persistent Overlays ────────────────────────────────────────────── */}
      <Suspense fallback={null}>
        <TerminalOverlay />
      </Suspense>
      <Suspense fallback={null}>
        <CommandPalette />
      </Suspense>
    </>
  );
}
