import Container from "@/components/Layout/Container";
import { FlagIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import dropQuoteImage from "@/assets/categories/dropquote.svg";
import rocketImage from "@/assets/categories/spacerocket.svg";
import SingleImpact from "./SingleImpact";

export default function ImpactSection() {
  return (
    <div className="py-10">
      <Container className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SingleImpact
          className={"lg:top-14 lg:left-16 bg-green-500 relative z-10"}
        >
          <Image
            src={dropQuoteImage}
            width="40"
            height="40"
            className="absolute top-16 left-16"
            alt="Impact"
          />
          <p className="mt-6 ml-10 text-2xl text-white">
            It was an amazing experience, collaborating with other learners from
            different countries. I can't wait to do it again!
          </p>
          <Image
            src={dropQuoteImage}
            width="40"
            height="40"
            className="absolute rotate-180 bottom-16 right-16"
            alt="Quote Image"
          />
        </SingleImpact>
        <SingleImpact className={"bg-blue-900 flex flex-col text-white"}>
          <div className="flex items-end justify-center w-full gap-x-4">
            <p className="font-sans text-4xl font-black lg:text-6xl">85%</p>
            <FlagIcon className="w-16 h-16" />
          </div>
          <p className="text-2xl lg:ml-10 lg:text-3xl">
            of problem solvers report an increase in leadership skills.
          </p>
        </SingleImpact>
        <SingleImpact
          className={
            "lg:left-1/3 lg:bottom-14 bg-sky-400 text-white flex items-center justify-center"
          }
        >
          <div className="flex items-end justify-center gap-x-4">
            <div>
              <Image
                src={rocketImage}
                width="100"
                height="100"
                alt="Rocket Image"
              />
            </div>
            <div className="flex flex-col items-center justify-center lg:mt-6 gap-y-4">
              <p className="font-sans text-3xl font-black tracking-tighter lg:text-8xl">
                9/10
              </p>
              <p className="text-2xl lg:mt-4 lg:w-2/3">
                mentors recommend joining Launchpad
              </p>
            </div>
          </div>
        </SingleImpact>
      </Container>
    </div>
  );
}
