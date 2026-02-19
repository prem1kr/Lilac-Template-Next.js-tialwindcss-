"use client";
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
import ScrollAnimation from "@/components/animations/Framer-motion.jsx";

export default function Home() {
  return (
    <>
      <ScrollAnimation delay={0.3} ><Hero /></ScrollAnimation>
      <ScrollAnimation delay={0.3}><Office1 /></ScrollAnimation>
      <ScrollAnimation delay={0.3}><Services /></ScrollAnimation>
      <ScrollAnimation delay={0.3}><CTA /></ScrollAnimation>
      <ScrollAnimation delay={0.3}><About /></ScrollAnimation>
      <ScrollAnimation delay={0.3}><FAQs /></ScrollAnimation>
      <ScrollAnimation delay={0.3}><Profesional /></ScrollAnimation>
      <ScrollAnimation delay={0.3}><Overview /></ScrollAnimation>
      <ScrollAnimation delay={0.3}><FooterTop /></ScrollAnimation>
      <ScrollAnimation delay={0.3}><FooterBottom /></ScrollAnimation>

    </>

  )
    ;
}
