import Container from "@/components/Layout/Container";
import SingleCategory from "./SingleCategory";
import chipImage from "@/assets/categories/chip.svg";
import cloudImage from "@/assets/categories/clouds.svg";
import cupImage from "@/assets/categories/cup.svg";
import graduationImage from "@/assets/categories/graduation.svg";
import heartImage from "@/assets/categories/heart.svg";
import mushroomImage from "@/assets/categories/mushroom.svg";
import scaleImage from "@/assets/categories/scale.svg";
import spaceRocketImage from "@/assets/categories/spacerocket.svg";
import sproutImage from "@/assets/categories/sprout.svg";
import wheatImage from "@/assets/categories/wheat.svg";

export default function Categories() {
  const categoryList = [
    {
      title: "Biodiversity",
      icon: mushroomImage,
    },
    {
      title: "Clean Water & Sanitation",
      icon: cupImage,
    },
    {
      title: "Climate Change",
      icon: cloudImage,
    },
    {
      title: "Education",
      icon: graduationImage,
    },
    {
      title: "Equality",
      icon: scaleImage,
    },
    {
      title: "Emerging Technologies",
      icon: chipImage,
    },
    {
      title: "Nutrition, Agriculture & Food Systems",
      icon: sproutImage,
    },
    {
      title: "Public Health & Wellbeing",
      icon: heartImage,
    },
    {
      title: "Space",
      icon: spaceRocketImage,
    },
    {
      title: "Sustainability & Resilience",
      icon: wheatImage,
    },
  ];

  return (
    <div className="relative flex flex-col">
      <div className="absolute top-0 z-20 w-full text-white bg-pink-800 category-title">
        <Container className={"text-4xl pt-16 pb-28"}>
          <h3>Areas of Impact</h3>
        </Container>
      </div>
      <div className="relative z-20 w-full mt-24 bg-transparent">
        <Container className={"pt-16 pb-28"}>
          <div className="z-10 flex flex-col p-8 pt-12 text-gray-500 bg-white gap-y-12">
            <div>
              <p>
                Launchpad projects focus on addressing society’s greatest
                challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
              {categoryList.map(({ title, icon }) => (
                <SingleCategory key={title} title={title} icon={icon} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
