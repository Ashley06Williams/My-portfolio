"use client";

import AbilitySection from "@/components/skills-section";
import AboutMe from "@/components/about-me-section";
import FormPage from "@/components/contact-section";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/header-section";
import HeroSection from "@/components/hero-section";
import WorkSection from "@/components/portfolio-section";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);
  return (
    <div className="bg-[#1D202F]">
      <header className="w-full flex justify-center items-start ">
        <HeaderSection />
      </header>
      <HeroSection />
      <div className="h-full flex flex-col items-center  max-w-[1400px]  mx-auto">
        <main className="mx-auto px-4 md:px-0">
          
          

          <AbilitySection />
          <WorkSection />

          <AboutMe />
          <FormPage modal={modal} setModal={setModal} />
        </main>
      </div>
      <footer>
        <div className=" bg-blueGrey-light  h-[125px] w-full ">
          <FooterSection />
        </div>
      </footer>
    </div>
  );
}
