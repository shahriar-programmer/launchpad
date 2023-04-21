import Container from "@/components/Layout/Container";

export default function NoticeCard() {
  return (
    <div className="py-10 bg-gray-100">
      <Container className={"flex items-center justify-center"}>
        
        <div
          className={
            "w-full md:w-2/3 p-16 border-2 bg-white flex flex-col items-center gap-y-2 justify-center"
          }
        >
          <h3 className="text-xl text-center md:text-3xl">No Current or Upcoming Challenges</h3>
          <p>See past challenges below.</p>
        </div>
      </Container>
    </div>
  );
}
