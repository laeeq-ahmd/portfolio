import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laeeq Ahmed — Mission Control",
  description:
    "Portfolio of Laeeq Ahmed — Software Engineer, AI Engineer, and Full Stack Developer. Building AI-powered systems, cloud-native backends, and full-stack products.",
  keywords: [
    "Laeeq Ahmed",
    "Software Engineer",
    "AI Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Machine Learning",
  ],
  authors: [{ name: "Laeeq Ahmed", url: "https://github.com/laeeq-ahmd/" }],
  creator: "Laeeq Ahmed",
  openGraph: {
    title: "Laeeq Ahmed — Mission Control",
    description:
      "Software Engineer | AI Engineer | Full Stack Developer. Explore CareerX AI, SmartFirePredict, and more.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laeeq Ahmed — Mission Control",
    description: "Software Engineer | AI Engineer | Full Stack Developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(spaceGrotesk.variable, jetbrainsMono.variable)}
    >
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-[#09090b] text-[#e4e4e7] antialiased",
          spaceGrotesk.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
