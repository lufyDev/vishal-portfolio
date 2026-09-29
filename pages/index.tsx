import Head from "next/head";
import { Masthead, Footer } from "@/components/Chrome";
import Brief from "@/components/Brief";
import Approach from "@/components/Approach";
import CaseFiles from "@/components/CaseFiles";
import Leverage from "@/components/Leverage";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { personalInfo, masthead } from "@/data/portfolio";

const description =
  "Vishal Pundhir — software engineer. I turn business problems into working systems, and then check the number actually moved. Six problems, with how I solved and measured each one.";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${personalInfo.name} — Engineer`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${personalInfo.name} — ${masthead.headline}`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Masthead />
      <main>
        <Brief />
        <Approach />
        <CaseFiles />
        <Leverage />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
