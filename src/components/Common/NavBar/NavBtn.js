import Link from "next/link";

export default function NavBtn({ text, link }) {
  return (
    <Link
      href={link}
      className="px-4 py-1 text-base text-white uppercase transition bg-green-500 border rounded hover:bg-green-600"
    >
      {text}
    </Link>
  );
}
