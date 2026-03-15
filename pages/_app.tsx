import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useCallback } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} noise-overlay`}
      style={{ cursor: "none" }}
    >
      <Preloader onComplete={handlePreloaderComplete} />
      <CustomCursor />
      <div aria-hidden={loading}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
