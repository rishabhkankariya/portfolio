import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import CommandPalette from "@/components/CommandPalette";
import Header from "@/components/Header";
import ParallaxBackground from "@/components/ParallaxBackground";

export const metadata: Metadata = {
  title: "Rishabh Kankariya // Cloud & DevOps Engineer",
  description: "Playful, high-performance portfolio of Rishabh Kankariya — Cloud Architectures, Kubernetes, CI/CD Automation, and Scalable Systems.",
  icons: {
    icon: "/images/rk.png",
    shortcut: "/images/rk.png",
    apple: "/images/rk.png", 
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
      className="light"
    >
      <body className="antialiased max-w-full bg-[#FFFDF5] dark:bg-[#0F172A] text-[#1E293B] dark:text-[#F8FAFC] transition-colors duration-300">
        <ThemeProvider>
          <SmoothScroll>
            {/* Playful Geometric Dot Grid & Parallax Background */}
            <ParallaxBackground />

            {/* Global Command Palette (⌘K) */}
            <CommandPalette />

            {/* Custom Interactive Cursor */}
            <CustomCursor />

            {/* Playful Geometric Sticker Pill Header */}
            <Header />

            {/* Main Content */}
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
