import Link from "next/link";

export default function NavItem({ text, className, link }) {
  return (
    <Link
      className={`transition py-2 border-b-4 border-white hover:border-orange-500 ${className}`}
      href={link}
    >
      {text}
    </Link>
  );
}
