import type { Metadata } from "next";
import { Archivo_Black, EB_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import OrbitsBackground from "@/components/OrbitsBackground";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Portfolio | Rishabh Kankariya",
  description: "Cloud & DevOps Explorer",
  icons: {
    icon: "/images/rk.png",
    shortcut: "/images/rk.png",
    apple: "/images/rk.png", 
  },
};

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ebgaramond",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo-black",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spacemono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${spaceMono.variable} ${archivoBlack.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <OrbitsBackground />
          <BackgroundCanvas />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
