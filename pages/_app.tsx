import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Instrument_Serif, Archivo, JetBrains_Mono } from "next/font/google";

const display = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
