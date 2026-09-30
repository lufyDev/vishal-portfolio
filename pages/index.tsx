import Head from "next/head";
import { Masthead, Footer } from "@/components/Chrome";
import Brief from "@/components/Brief";
import Approach from "@/components/Approach";
import CaseFiles from "@/components/CaseFiles";
import Leverage from "@/components/Leverage";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Loader from "@/components/Loader";
import Contact from "@/components/Contact";
import { personalInfo, masthead } from "@/data/portfolio";

const description =
  "Vishal Pundhir — software engineer. I build backends that hold up: queues, pipelines and event-driven systems. BITS Pilani, 2024. Recent problems with how I solved and measured each one.";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${personalInfo.name} — Engineer`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${personalInfo.name} — ${masthead.role}`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Loader />
      <Masthead />
      <main>
        <Brief />
        <Approach />
        <Skills />
        <CaseFiles />
        <Leverage />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
