"use client";

import AbilitySection from "@/components/ability-section";
import AboutMe from "@/components/about-me-section";
import FormPage from "@/components/contact-section";
import HeaderSection from "@/components/header-section";
import HeroSection from "@/components/hero-section";
import WorkSection from "@/components/work-section";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);
  return (
    <div className="bg-blueGrey h-full flex flex-col items-center">
      <header className="w-full flex justify-center items-start">
        <HeaderSection />
      </header>
      <HeaderSection />
      <div className="max-w-[1200px] mx-auto ">
        <main className="">
          <HeroSection setModal={setModal} modal={modal} />
          <AbilitySection />
          <WorkSection />

          <AboutMe />
          <FormPage modal={modal} setModal={setModal} />
        </main>
      </div>
    </div>
  );
}
