import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";

/* Newsreader and Inter are both noticeably wider and more open than the
 * fonts they replaced, which is most of the fix for text feeling cramped. */

const display = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-grotesk",
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
