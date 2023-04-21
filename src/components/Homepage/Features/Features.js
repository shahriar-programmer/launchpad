import SingleFeature from "./SingleFeature";
import Container from "@/components/Layout/Container";
import {
  BriefcaseIcon,
  LightBulbIcon,
  GiftIcon,
} from "@heroicons/react/24/solid";

export default function Features() {
  const data = [
    {
      title: "Problem Solvers",
      command: "Launch a project",
      features: [
        "Work on real-world projects focused on social impact.",
        "Collaborate with peers and experts around the world.",
        "Build and showcase skills.",
        "Connect with top global employers",
      ],
      cta: "Request an invite",
      color: "teal-600",
      icon: <BriefcaseIcon className="text-teal-600 w-14 h-14" />,
    },
    {
      title: "Companies",
      command: "Start a Challenge",
      features: [
        "Discover a pipeline of top talent.",
        "Build brand awareness and loyalty.",
        "Develop employees' 21st century skills",
        "Access innovative design solutions.",
      ],
      cta: "Get in Touch",
      color: "green-600",
      icon: <GiftIcon className="text-green-600 w-14 h-14" />,
    },
    {
      title: "Mentors",
      command: "Share your Expertise",
      features: [
        "Join a community of top STEM professionals.",
        "Cultivate skills in leadership, collaboration and design.",
        "Mentor the next generation of top talent.",
        "Connect with leading global companies.",
      ],
      cta: "Request an invite",
      color: "red-500",
      icon: <LightBulbIcon className="text-red-500 w-14 h-14" />,
    },
  ];

  return (
    <div className="py-20 bg-gray-100">
      <Container className={"grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-6"}>
        {data.map(({ title, command, features, cta, color, icon }) => (
          <SingleFeature
            title={title}
            command={command}
            features={features}
            cta={cta}
            color={color}
          >
            {icon}
          </SingleFeature>
        ))}
      </Container>
    </div>
  );
}
