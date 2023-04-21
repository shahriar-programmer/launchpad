import Container from "@/components/Layout/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="py-6 text-gray-200 uppercase bg-gray-500 border">
      <Container className={"flex flex-col items-center md:items-start gap-y-4"}>
        <p className="text-xl">Launchpad</p>
        <div className="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
          <div className="flex items-center gap-6 text-sm">
            <Link className="hover:text-white" href="">
              Privacy Policy
            </Link>
            <Link className="hover:text-white" href="">
              Terms of Services
            </Link>
            <Link className="hover:text-white" href="">
              Code of Conduct
            </Link>
            <Link className="hover:text-white" href="">
              Contact
            </Link>
          </div>
          <p className="text-xs">
            ©2023 GLOBAL STEM ALLIANCE, LLC. ALL RIGHTS RESERVED
          </p>
        </div>
      </Container>
    </section>
  );
}
