import Container from "@/components/Layout/Container";
import WaterImage from "@/assets/Water_Sustainability.jpeg";
import SingleChallenge from "./SingleChallenge";

export default function ChallengeList() {
  return (
    <div className="py-10 bg-gray-100">
      <Container className={"flex flex-col items-center justify-center"}>
        <h1 className="text-3xl challenge-title">Past Challenges</h1>
        <div className="flex flex-col mt-8 gap-y-8">
          <SingleChallenge
            sponsor={"Royal Swedish Academy of Engineering Sciences"}
            date={"February 13, 2023 to April 17, 2023"}
            image={WaterImage}
            link={
              "72/water-sustainability-junior-academy-challenge-spring-2023"
            }
            status={"Closed"}
            text={
              "A secure and sustainable supply of fresh water is crucial to all of humankind for drinking, sanitation, and food production. Decades of questionable water management and the effects of climate change have led to increased water shortages and drought around the globe, threatening public health and food supply. What innovative solutions can you design to ensure sustainable access to fresh water for a growing global population?"
            }
            title={"Water Sustainability"}
          />
          <SingleChallenge
            sponsor={"Royal Swedish Academy of Engineering Sciences"}
            date={"February 13, 2023 to April 17, 2023"}
            image={WaterImage}
            link={
              "72/water-sustainability-junior-academy-challenge-spring-2023"
            }
            status={"Closed"}
            text={
              "A secure and sustainable supply of fresh water is crucial to all of humankind for drinking, sanitation, and food production. Decades of questionable water management and the effects of climate change have led to increased water shortages and drought around the globe, threatening public health and food supply. What innovative solutions can you design to ensure sustainable access to fresh water for a growing global population?"
            }
            title={"Water Sustainability"}
          />
          <SingleChallenge
            sponsor={"Royal Swedish Academy of Engineering Sciences"}
            date={"February 13, 2023 to April 17, 2023"}
            image={WaterImage}
            link={
              "72/water-sustainability-junior-academy-challenge-spring-2023"
            }
            status={"Closed"}
            text={
              "A secure and sustainable supply of fresh water is crucial to all of humankind for drinking, sanitation, and food production. Decades of questionable water management and the effects of climate change have led to increased water shortages and drought around the globe, threatening public health and food supply. What innovative solutions can you design to ensure sustainable access to fresh water for a growing global population?"
            }
            title={"Water Sustainability"}
          />
          <SingleChallenge
            sponsor={"Royal Swedish Academy of Engineering Sciences"}
            date={"February 13, 2023 to April 17, 2023"}
            image={WaterImage}
            link={
              "72/water-sustainability-junior-academy-challenge-spring-2023"
            }
            status={"Closed"}
            text={
              "A secure and sustainable supply of fresh water is crucial to all of humankind for drinking, sanitation, and food production. Decades of questionable water management and the effects of climate change have led to increased water shortages and drought around the globe, threatening public health and food supply. What innovative solutions can you design to ensure sustainable access to fresh water for a growing global population?"
            }
            title={"Water Sustainability"}
          /><SingleChallenge
          sponsor={"Royal Swedish Academy of Engineering Sciences"}
          date={"February 13, 2023 to April 17, 2023"}
          image={WaterImage}
          link={
            "72/water-sustainability-junior-academy-challenge-spring-2023"
          }
          status={"Closed"}
          text={
            "A secure and sustainable supply of fresh water is crucial to all of humankind for drinking, sanitation, and food production. Decades of questionable water management and the effects of climate change have led to increased water shortages and drought around the globe, threatening public health and food supply. What innovative solutions can you design to ensure sustainable access to fresh water for a growing global population?"
          }
          title={"Water Sustainability"}
        />
        
        </div>
      </Container>
    </div>
  );
}
