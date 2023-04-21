import Container from "@/components/Layout/Container";

export default function Breadcrumb({ classname, text }) {
  return (
    <div className={`w-full text-white text-3xl md:text-4xl ${classname} py-6`}>
      <Container>{text}</Container>
    </div>
  );
}
