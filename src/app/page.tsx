import AbilitySection from "@/components/ability-section";
import HeaderSection from "@/components/header-section";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="bg-blueGrey h-full">
      <div className=" max-w-[1200px] mx-auto">
        <main className="">
          <HeaderSection />
          <HeroSection />
          <AbilitySection />
        </main>
      </div>
    </div>
  );
}
