import ChallengeList from "@/components/Challenges/ChallengeList/ChallengeList";
import NoticeCard from "@/components/Challenges/NoticeCard/NoticeCard";
import Breadcrumb from "@/components/Common/Breadcrumb/Breadcrumb";
import Layout from "@/components/Layout/Layout";

export default function challenges() {
  return (
    <Layout>
      <Breadcrumb text="Challenges" classname={"bg-pink-800"} />
      <NoticeCard />
      <ChallengeList />
    </Layout>
  );
}
