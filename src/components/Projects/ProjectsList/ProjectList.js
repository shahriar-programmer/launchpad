import ProjectCardImg from "@/assets/project-card-bg.jpg";
import Container from "@/components/Layout/Container";
import SingleProject from "../SingleProject/SingleProject";

export default function ProjectList() {
  return (
    <div className="bg-gray-100">
      <Container
        className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16"}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((prj) => (
          <SingleProject
            title={"Cyber Surfers"}
            category={"Cybersecurity"}
            tag={"STEM"}
            text={"TBD Welcome NEOM Students!"}
          />
        ))}
      </Container>
    </div>
  );
}
