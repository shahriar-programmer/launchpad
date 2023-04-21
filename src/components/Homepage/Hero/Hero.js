import Container from "@/components/Layout/Container";

export default function Hero() {
  return (
    <div className="relative flex flex-col w-full bg-blue-600 h-4/5">
      <div className="md:absolute bg-[url('../assets/hero-bg.jpg')] md:top-0 md:right-0 w-full md:w-1/2 h-56 md:h-full bg-center bg-cover"></div>
      <Container className={"flex"}>
        <div
          id="hero-text"
          className="flex flex-col w-full gap-4 py-6 text-white md:py-10 md:gap-10 md:px-0 md:w-1/2"
        >
          <h1 className="text-2xl md:leading-normal md:w-3/4 md:text-4xl">
            Welcome to Launchpad from The New York Academy of Sciences
          </h1>
          <p className="md:w-4/5 md:text-xl md:leading-relaxed">
            We are an international community of problem solvers using science
            and technology to address challenges facing society today. Launchpad
            is our platform to develop and discover talent.
          </p>
        </div>
      </Container>
    </div>
  );
}
