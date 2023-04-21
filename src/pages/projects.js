import ChallengeList from "@/components/Challenges/ChallengeList/ChallengeList";
import NoticeCard from "@/components/Challenges/NoticeCard/NoticeCard";
import Breadcrumb from "@/components/Common/Breadcrumb/Breadcrumb";
import Layout from "@/components/Layout/Layout";
import ProjectFilter from "@/components/Projects/ProjectFilter/ProjectFilter";
import ProjectList from "@/components/Projects/ProjectsList/ProjectList";

export default function projects() {
  return (
    <Layout>
      <Breadcrumb text="Projects" classname={"bg-sky-600"} />
      <ProjectFilter />
      <ProjectList />
    </Layout>
  );
}
