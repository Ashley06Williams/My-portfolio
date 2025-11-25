"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";


export default function HeroSection() {
  return (
<div className="bg-white">




   
    <div className="relative  h-[100vh] grid grid-cols-2 items-center overflow-hidden px-8 md:px-16 md:max-w-[1400px] lg:max-w-[2000px] mx-auto">



      
      <div className="col-span-1 z-10 max-w-2xl">
        
      <div className="flex items-center gap-4 bg-blueGrey-dark/90 w-fit px-8 py-2.5 rounded-full font-semibold text-white text-xl">
        <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
        <p>Open To Work</p>
      </div>
    <h2 className="mt-8 text-[50px] font-bold">
      Front-End Developer 
      <br />
      Based in South Africa
    </h2>
<div className="mt-2">
  <h1 className="text-[150px] font-bold">
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
<div className="mt-4">
  <Link href="#portfolio">
    <button className="relative flex items-center bg-red border-2 border-red text-white font-medium text-2xl group hover:bg-white p-1 rounded-full overflow-hidden">
    <div className="relative z-10 bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-red">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </div>
    <p className="relative z-10 pl-3 pr-4 group-hover:text-red">View My Work</p>
  </button>
  </Link>

</div>
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none">
        <Image 
          src="/ashfinal.png" 
          alt="Ashley Williams" 
          width={1200} 
          height={1200}
          className="object-contain"
        />
      </div>
</div>
</div>
  );
}
