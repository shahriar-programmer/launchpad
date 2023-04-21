import Image from "next/image";
import Link from "next/link";
import LogoFull from "../../../assets/logo_full.svg";

export default function Logo() {
  return (
    <div className="w-2/5 md:w-full logo">
      <Link href="/">
        <Image
          src={LogoFull}
          width={"220"}
          height={"48"}
          alt="Launchpad Logo"
        />
      </Link>
    </div>
  );
}
