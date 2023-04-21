import Categories from "@/components/Homepage/Categories/Categories";
import Features from "@/components/Homepage/Features/Features";
import Hero from "@/components/Homepage/Hero/Hero";
import ImpactSection from "@/components/Homepage/ImpactSection/ImpactSection";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <ImpactSection />
      <Categories />
    </Layout>
  );
}
