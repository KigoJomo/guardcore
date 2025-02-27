import About from "./components/about";
import Accreditations from "./components/Accreditations";
import Contact from "./components/Contact";
// import Hero from "./components/Hero";
import HeroSlideshow from "./components/HeroSlideshow";
import Solutions from "./components/solutions";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HeroSlideshow />
      <Solutions />
      <About />
      <Accreditations />
      <Contact />
    </>
  );
}
