import Image from "next/image";

export default function SingleCategory({ title, icon }) {
  return (
    <div className="w-52">
      <div className="flex items-center justify-center w-full h-36 bg-sky-500">
        <Image src={icon} width="60" height="60" />
      </div>
      <div className="flex items-center justify-center w-full h-24 tracking-wider text-center uppercase bg-gray-100 ">
        <h5>{title}</h5>
      </div>
    </div>
  );
}
