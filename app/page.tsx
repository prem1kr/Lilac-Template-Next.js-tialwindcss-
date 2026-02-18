import Hero from "../components/sections/Hero.jsx";
import Services from "../components/sections/Services.jsx";
import CTA from "../components/sections/Office2.jsx";
import FAQs from "../components/sections/FAQs.jsx";
import Profesional from "../components/sections/Profesional.jsx";
import FooterTop from "../components/sections/FooterTop.jsx";
import FooterBottom from "../components/sections/FooterBottom.jsx";
import Overview from "../components/sections/Overview.jsx";
import Office1 from "../components/sections/Office1.jsx";
import About from "../components/sections/About.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Office1 />
      <Services />
      <CTA />
      <About />
      <FAQs />
      <Profesional />
      <Overview />
      <FooterTop />
      <FooterBottom />
    </>

  )
    ;
}
