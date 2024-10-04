import HeaderSection from "@/components/header-section";
import HeroSection from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blueGrey">
      <div className=" h-screen max-w-[1200px] mx-auto">
        <main className="">
          <HeaderSection />
          <HeroSection />
        </main>
      </div>
    </div>
  );
}
