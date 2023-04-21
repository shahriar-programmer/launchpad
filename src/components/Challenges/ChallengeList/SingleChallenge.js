import Link from "next/link";
import Image from "next/image";

export default function SingleChallenge({
  title,
  sponsor,
  status,
  date,
  text,
  link,
  image,
}) {
  return (
    <div className="grid w-full h-auto grid-cols-1 transition bg-white border rounded shadow-lg md:grid-cols-2 hover:shadow-2xl">
      <div className="relative img-div">
        <Image
          src={image}
          width="840"
          height="200"
          className="relative top-0 w-full h-full"
          alt="Challenge"
        />
        <div className="absolute bottom-0 left-0 z-20 flex flex-col justify-end w-full h-full p-4 text-white bg-black/40">
          <p className="text-3xl">{title}</p>
          <p>{sponsor}</p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-6 p-8 text-div">
        <div className="font-semibold text-sky-700">
          <p>{status}</p>
          <p className="font-normal">{date}</p>
        </div>
        <p className="text-gray-600">{text}</p>
        <div className="mt-4 text-right">
          <Link
            className="font-semibold text-green-500 uppercase"
            href={`/challenges/${link}`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
