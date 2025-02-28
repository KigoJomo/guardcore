import About from "./components/about";
import Accreditations from "./components/Accreditations";
import Contact from "./components/Contact";
// import Hero from "./components/Hero";
import HeroSlideshow from "./components/HeroSlideshow";
import PartnersSlider from "./components/Partners";
import Solutions from "./components/solutions";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HeroSlideshow />
      <About />
      <Solutions />
      <WhoWeAre />
      <PartnersSlider />
      <Accreditations />
      <Contact />
    </>
  );
}
