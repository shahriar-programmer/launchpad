import { useState } from "react";
import Container from "../../Layout/Container";
import IconBtn from "./IconBtn";
import Logo from "./Logo";
import NavBtn from "./NavBtn";
import NavItem from "./NavItem";

export default function NavBar() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  return (
    <div className="w-full overflow-hidden bg-white border navbar">
      <Container
        className={"flex items-center justify-between text-gray-500 p-2"}
      >
        <Logo />
        <div
          id="nav-menu"
          className="flex items-center justify-end w-full gap-5 text-lg"
        >
          <NavItem
            className={"hidden md:block"}
            link={"/challenges"}
            text={"Challenges"}
          />
          <NavItem
            className={"hidden md:block"}
            link={"/projects"}
            text={"Projects"}
          />
          <IconBtn className={"hidden md:block"} />
          <NavBtn text={"Login"} link={"/accounts/login"}/>
          <p
            className="ml-8 md:hidden"
            onClick={() => setShowMobileSidebar(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </p>
        </div>
      </Container>
      <div
        className={`transition-all w-2/4 fixed top-0 overflow-hidden bg-white z-30 ${
          showMobileSidebar ? "right-0" : "-right-full"
        } h-screen p-4 md:hidden`}
      >
        <span
          className="absolute cursor-pointer right-4 top-2"
          onClick={() => setShowMobileSidebar((prevState) => !prevState)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <div className="flex flex-col mt-10">
          <NavItem
            className={"p-0 border-b-gray-500"}
            link={"challenges"}
            text={"Challenges"}
          />
          <NavItem
            className={"p-0 border-b-gray-500"}
            link={"projects"}
            text={"Projects"}
          />
        </div>
      </div>
    </div>
  );
}
