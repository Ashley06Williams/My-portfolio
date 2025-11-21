"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

type PopupProps = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeroSection({ setModal, modal }: PopupProps) {
  return (
    <div className="bg-[#F7F7F7] h-screen ">
      {/* <div className="max-w-[800px] "> */}
      <div className="">
      <p className="text-red text-[20px]  md:text-[30px] md:mb-[-10px]">Hello, I&apos;m</p>
      <TypeAnimation
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
      />

      </div>

    </div>

    // </div>
  );
}

