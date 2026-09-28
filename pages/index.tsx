import Head from "next/head";
import { Masthead, Footer } from "@/components/Chrome";
import Brief from "@/components/Brief";
import Notes from "@/components/Notes";
import CaseFiles from "@/components/CaseFiles";
import Leverage from "@/components/Leverage";
import Instruments from "@/components/Instruments";
import Contact from "@/components/Contact";
import { personalInfo, masthead } from "@/data/portfolio";

const description =
  "Vishal Pundhir — software engineer. I turn business problems into systems that hold up in production, and prove they did. Six case files: the brief, the decomposition, the architecture, and the numbers with how they were measured.";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${personalInfo.name} — Engineer`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${personalInfo.name} — ${masthead.standfirst}`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Masthead />
      <main>
        <Brief />
        <Notes />
        <CaseFiles />
        <Leverage />
        <Instruments />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
