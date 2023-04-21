import Categories from "@/components/Homepage/Categories/Categories";
import Head from "next/head"
import Features from "@/components/Homepage/Features/Features";
import Hero from "@/components/Homepage/Hero/Hero";
import ImpactSection from "@/components/Homepage/ImpactSection/ImpactSection";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Launchpad</title>
        <meta
          name="description"
          content="Launchpad"
        />
        <meta
          name="keywords"
          content="Launchpad"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features />
      <ImpactSection />
      <Categories />
    </Layout>
  );
}
