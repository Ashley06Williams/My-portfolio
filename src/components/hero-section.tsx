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
    <div className="bg-blueGrey md:max-w-[1200px] mx-auto section-spacing h-screen grid grid-cols-3  justify-center items-center p-5 text-left ">
      {/* <div className="max-w-[800px] "> */}
      <div className="col-span-2">
      <p className="text-red text-[20px] md:text-[30px] mb-[-10px]">Hello, I&apos;m</p>
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
        className="text-white font-bold text-[45px]  md:text-[40px] lg:text-[60px] leading-tight md:leading-normal"
      />
      <p className="text-[13px] md:text-[18px] max-w-[600px] text-white mb-8 pr-2 md:pr-0">
         A self-taught web developer with a passion for building custom applications currently using React and Next.JS
      </p>
      <div className="flex flex-col md:flex-row gap-y-6 md:space-x-8">
        <button
          className="bg-red  text-white hover:bg-red-light rounded-tr-xl rounded-bl-xl text-xl py-3 px-12"
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
          className="bg-slate-100 text-red hover:bg-slate-300 rounded-tl-xl rounded-br-xl    text-xl py-3 px-12"
        >
          My Resume
        </button>
      </div>
      </div>

      <div >
        <Image src="/ashley.png" alt="My Image" width={400} height={400} />
      </div>
    </div>

    // </div>
  );
}

