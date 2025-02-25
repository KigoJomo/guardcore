import About from "./components/about";
import Accreditations from "./components/Accreditations";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Solutions from "./components/solutions";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <Accreditations />
      <Contact />
    </>
  );
}
