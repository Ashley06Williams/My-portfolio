"use client";

import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";


export default function HeroSection() {
  const [isMd, setIsMd] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(min-width: 768px)")
    const handle = (e: MediaQueryListEvent) => setIsMd(e.matches)
    setIsMd(mq.matches)
    if (mq.addEventListener) mq.addEventListener("change", handle)
    else mq.addListener(handle)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handle)
      else mq.removeListener(handle)
    }
  }, [])

  return (
<div className="bg-white">




   
    <div className="relative h-[100vh] flex flex-col md:grid md:grid-cols-2 md:items-center md:justify-start items-center justify-center overflow-hidden px-8 md:px-16 md:max-w-[1200px] xl:max-w-[1400px] mx-auto">



      
      <div className="col-span-1 z-10 md:max-w-2xl flex flex-col items-center md:items-start text-center md:text-left">
        {/* Mobile-only rounded headshot above content */}
        <div className="md:hidden flex justify-center mb-6 pr-4">
          <Image
            src="/ashmobile.jpeg"
            alt="Ashley Williams"
            width={300}
            height={300}
            className="rounded-full object-cover"
          />
        </div>
        
      <div className="flex items-center gap-4 bg-blueGrey-dark/90 w-fit px-4 md:px-8 py-2 md:py-2.5 rounded-full font-semibold text-white text-xl">
        <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
        <p>Open To Work</p>
      </div>
    <h2 className="mt-8  text-[30px] md:text-[40px] font-bold text-center md:text-left">
      Front-End Developer 
      <br />
      Based in South Africa
    </h2>
<div className="mt-2">
  <h1 className="text-[60px] md:text-[125px] font-bold">
    <span className="text-red">ASH</span>
    {isMd ? (
      <TypeAnimation
        sequence={["", 1000, "LEY", 1000]}
        wrapper="span"
        speed={50}
        className="text-blueGrey-dark"
      />
    ) : (
      <span className="text-blueGrey-dark">LEY</span>
    )}
  </h1>
</div>
<div className="mt-4 mb-20 md:mb-0">
  <Link href="#portfolio">
    <button className="relative flex items-center bg-red border-2 border-red text-white font-medium text-md md:text-2xl group hover:bg-white p-1 rounded-full overflow-hidden">
    <div className="relative z-10 bg-white rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6 md:w-8 md:h-8 text-red">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </div>
    <p className="relative z-10 pl-3 pr-4 group-hover:text-red">View My Work</p>
  </button>
  </Link>

</div>
      </div>

      <div className="hidden md:block absolute bottom-0 right-0 pointer-events-none">
        <Image 
          src="/ashers1.jpeg" 
          alt="Ashley Williams" 
          width={1000} 
          height={1000}
          className="object-contain"
        />
      </div>
</div>
</div>
  );
}
