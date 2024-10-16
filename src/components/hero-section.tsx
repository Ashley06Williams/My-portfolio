"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

type PopupProps = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeroSection({ setModal, modal }: PopupProps) {
  return (
    <div className="bg-blueGrey max-w-[1200px] mx-auto h-screen flex flex-col flex-wrap justify-center p-4 text-left">
      <div className="max-w-[800px] ">
        <h2 className="text-red text-[20px] md:text-[40px]">Hello, I'm</h2>
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
          className="text-white font-bold text-[45px]  md:text-[50px] lg:text-[70px] leading-tight md:leading-normal"
        />
        <p className="text-[13px] md:text-[18px] max-w-[550px] text-white mb-12 pr-2 md:pr-0">
          An aspiring web developer with a passion for learning and building
          modern, responsive websites. I am constantly seeking new opportunities
          to improve my skills.
        </p>
        <button
          className="bg-red p-2 md:p-4 px-14 md:px-20 text-white hover:bg-red-light rounded-tr-xl rounded-bl-xl text-[14px] md:text-[18px]"
          onClick={() => setModal(!modal)}
        >
          Contact me
        </button>
      </div>
    </div>
  );
}

// <h1 className="text-white text-[80px] font-semibold text-left -mt-4 mb-6">
//   A Frontend Developer
// </h1>;
