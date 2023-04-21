import ChallengeList from "@/components/Challenges/ChallengeList/ChallengeList";
import Head from "next/head";
import NoticeCard from "@/components/Challenges/NoticeCard/NoticeCard";
import Breadcrumb from "@/components/Common/Breadcrumb/Breadcrumb";
import Layout from "@/components/Layout/Layout";
import Loading from "@/components/Common/Loading/Loading";
import { useState } from "react";

export default function challenges() {
  const [loading, setLoading] = useState(false);
  return (
    <Layout>
      <Head>
        <title>Challenges | Launchpad</title>
        <meta name="description" content="Challenges | Launchpad" />
        <meta name="keywords" content="Challenges | Launchpad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Breadcrumb text="Challenges" classname={"bg-pink-800"} />
          <NoticeCard />
          <ChallengeList />
        </>
      )}
    </Layout>
  );
}
