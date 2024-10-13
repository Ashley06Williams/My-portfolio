import AbilitySection from "@/components/ability-section";
import AboutMe from "@/components/about-me-section";
import FormPage from "@/components/contact-section";
import HeaderSection from "@/components/header-section";
import HeroSection from "@/components/hero-section";
import WorkSection from "@/components/work-section";

export default function Home() {
  return (
    <div className="bg-blueGrey h-full">
      <div className=" max-w-[1200px] mx-auto">
        <main className="">
          <HeaderSection />
          <HeroSection />
          <AbilitySection />
          <WorkSection />
          <AboutMe />
          <FormPage />
        </main>
      </div>
    </div>
  );
}
