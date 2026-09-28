import { Html, Head, Main, NextScript } from "next/document";

/* Applied before first paint so a returning visitor never sees a flash of
 * the wrong theme. Wrapped because storage throws in some private modes. */
const themeBoot = `
(function(){try{var t=localStorage.getItem("theme");
if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}
document.documentElement.setAttribute("data-theme",t);}catch(e){
document.documentElement.setAttribute("data-theme","light");}})();
`;

export default function Document() {
  return (
    <Html lang="en" data-theme="light">
      <Head>
        <meta name="theme-color" content="#f3f0e8" />
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
