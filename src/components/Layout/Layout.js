import Footer from "../Common/Footer/Footer";
import { ralewayFont } from "@/lib/font";
import NavBar from "../Common/NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <section className={`${ralewayFont.className}`}>
      <NavBar />
      {children}
      <Footer />
    </section>
  );
}
