"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

type PopupProps = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeroSection({ setModal, modal }: PopupProps) {
  return (
    <div className="bg-blueGrey md:max-w-[1200px] mx-auto section-spacing h-screen flex flex-col flex-wrap justify-center items-start p-4 text-left ">
      {/* <div className="max-w-[800px] "> */}
      <h2 className="text-red text-[20px] md:text-[40px]">Hello, I&apos;m</h2>
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
      <div className="flex flex-col md:flex-row gap-y-6 md:space-x-8">
        <button
          className="bg-red p-2 md:p-4 px-14 md:px-16 text-white hover:bg-red-light rounded-tr-xl rounded-bl-xl text-[14px] md:text-[18px] font-semibold"
          onClick={() => setModal(!modal)}
        >
          Contact me
        </button>

        <button
          onClick={async (e) => {
            e.preventDefault();
            const response = await fetch("/MyResume.pdf");
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "/MyResume.pdf";
            a.click();
          }}
          className="bg-slate-100 text-red hover:bg-slate-300 p-2 md:p-4 px-14 md:px-16 rounded-tl-xl rounded-br-xl text-[14px] md:text-[18px] font-semibold"
        >
          My Resume
        </button>
      </div>
    </div>
    // </div>
  );
}

// <h1 className="text-white text-[80px] font-semibold text-left -mt-4 mb-6">
//   A Frontend Developer
// </h1>;
