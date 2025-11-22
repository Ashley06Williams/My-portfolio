"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { once } from "events";

type PopupProps = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeroSection({ setModal, modal }: PopupProps) {
  return (
    <div className="relative bg-[#F7F7F7] h-[80vh] grid grid-cols-2 items-center overflow-hidden px-8 md:px-16">
      <div className="col-span-1 z-10 max-w-2xl">
        
      <div className="flex items-center gap-4 bg-blueGrey-dark/90 w-fit px-8 py-2.5 rounded-full font-semibold text-white text-xl">
        <span className="w-2.5 h-2.5 bg-red rounded-full animate-pulse shadow-[0_0_8px_rgba(255,74,87,0.8)]"></span>
        <p>Open To Work</p>
      </div>
    <h2 className="mt-8 text-[40px] font-bold">
      Front-End Developer 
      <br />
      Based in South Africa
    </h2>
<div className="mt-8">
  <h1 className="text-9xl font-bold">
    <span className="text-red">ASH</span>
    <TypeAnimation
      sequence={[
        "",
        1000,
        "LEY",
        1000,
      ]}
      wrapper="span"
      speed={50}

      className="text-blueGrey-dark"
    />
  </h1>
</div>
<div className="mt-8">
  <button className="relative flex items-center bg-red border-2 border-red hover:bg-white text-white font-medium text-2xl p-1 rounded-full overflow-hidden group transition-all duration-500 ease-in-out">
    <div className="relative z-10 bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center transition-all duration-500 ease-in-out group-hover:order-2 group-hover:ml-auto">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-red">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </div>
    <p className="relative z-10 pl-3 pr-4 group-hover:text-red group-hover:pl-4 group-hover:pr-3 transition-all duration-500 ease-in-out">View My Work</p>
  </button>
</div>
      </div>

      {/* Profile Image positioned at bottom right - absolute positioning doesn't affect layout */}
      <div className="absolute bottom-0 right-0 pointer-events-none">
        <Image 
          src="/ashleyresized.png" 
          alt="Ashley Williams" 
          width={800} 
          height={800}
          className="object-contain"
        />
      </div>

    </div>

    // </div>
  );
}

      {/* <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Ashley",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "A Frontend Developer",
          1000,
        ]}
        wrapper="span"
        speed={25}
        repeat={1}
        className="text-white font-bold text-[32px] md:text-[40px] lg:text-[60px] leading-tight md:leading-normal"
      /> */}