import Container from "../Layout/Container";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="w-full py-10 bg-gray-100 md:py-28">
      <Container
        className={
          "bg-white border flex flex-col items-center p-10 md:w-1/3 gap-y-4"
        }
      >
        <div className="icon">
          <svg
            width="100"
            version="1.1"
            id="loader-svg"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 69 72.5"
          >
            <g id="XMLID_91_">
              <polygon
                id="XMLID_230_"
                className="st0"
                fill="#FF003D"
                points="49.8,59.5 20.4,50.8 21.3,48.1 50.7,56.8"
              ></polygon>
              <polygon
                id="XMLID_229_"
                className="st1"
                fill="#23CCB7"
                points="11.4,13.2 58.2,12 58.2,14.9 11.4,16.1"
              ></polygon>
              <polygon
                id="XMLID_56_"
                className="st2"
                fill="#0DFF79"
                points="52.6,59.9 56.4,16.1 59.3,16.4 55.4,60.2"
              ></polygon>
              <polygon
                id="XMLID_57_"
                className="st3"
                fill="#0B81D8"
                points="17.4,49.2 9.8,14.7 12.5,14.1 20.1,48.6"
              ></polygon>
              <path
                id="XMLID_560_"
                className="st2"
                fill="#0DFF79"
                d="M64.6,12.8c0.6,3.7-2,7.1-5.6,7.7c-3.7,0.6-7.1-2-7.7-5.6c-0.6-3.7,2-7.1,5.6-7.7 C60.6,6.6,64.1,9.1,64.6,12.8"
              ></path>
              <path
                id="XMLID_559_"
                className="st0"
                fill="#FF003D"
                d="M59.7,58.5c0.6,3.7-2,7.1-5.6,7.7c-3.7,0.6-7.1-2-7.7-5.6c-0.6-3.7,2-7.1,5.6-7.7 C55.7,52.3,59.2,54.8,59.7,58.5"
              ></path>
              <path
                id="XMLID_558_"
                className="st1"
                fill="#23CCB7"
                d="M17.9,15c0,3.7-3,6.7-6.7,6.7c-3.7,0-6.7-3-6.7-6.7c0-3.7,3-6.7,6.7-6.7 C14.9,8.2,17.9,11.3,17.9,15"
              ></path>
              <path
                id="XMLID_556_"
                className="st3"
                fill="#0B81D8"
                d="M25.5,47.8c0.6,3.7-2,7.1-5.6,7.7c-3.7,0.6-7.1-2-7.7-5.6c-0.6-3.7,2-7.1,5.6-7.7 C21.5,41.6,25,44.1,25.5,47.8"
              ></path>
            </g>
          </svg>
        </div>
        <form className="flex flex-col w-full px-4 md:px-10 gap-y-5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            className="w-full p-2 bg-gray-100 border border-gray-300 rounded placeholder:text-gray-500"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            className="w-full p-2 bg-gray-100 border border-gray-300 rounded placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="w-full p-2 text-white uppercase transition bg-green-500 rounded hover:bg-green-400 disabled:bg-gray-500"
          >
            Login
          </button>
        </form>
        <Link
          href="/accounts/password/reset"
          className="mt-4 text-center text-green-500 transition hover:text-green-400"
        >
          FORGOT PASSWORD?
        </Link>
        <div className="p-2 mt-4 border-t border-gray-400 md:p-4">
          <p className="text-sm text-center text-gray-500">
            This is a closed community but we are adding new members soon!
            <br />
            <Link
              href="#"
              className="text-green-500 transition hover:text-green-400"
            >
              Click here
            </Link>{" "}
            for updates & to be notified when the community is open.
          </p>
        </div>
      </Container>
    </div>
  );
}
