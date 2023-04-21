import Head from "next/head"
import Breadcrumb from "@/components/Common/Breadcrumb/Breadcrumb";
import Layout from "@/components/Layout/Layout";
import ProjectFilter from "@/components/Projects/ProjectFilter/ProjectFilter";
import ProjectList from "@/components/Projects/ProjectsList/ProjectList";

export default function projects() {
  return (
    <Layout>
      <Head>
        <title>Projects | Launchpad</title>
        <meta
          name="description"
          content="Projects | Launchpad"
        />
        <meta
          name="keywords"
          content="Projects | Launchpad"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumb text="Projects" classname={"bg-sky-600"} />
      <ProjectFilter />
      <ProjectList />
    </Layout>
  );
}
