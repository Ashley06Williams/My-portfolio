"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <div className="bg-blueGrey max-w-[1200px] mx-auto h-screen  flex flex-col justify-center">
      <div className="max-w-[800]">
        <h2 className="text-red text-[40px] ">Hello, I'm</h2>
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
          style={{
            fontSize: "80px",
            display: "inline-block",
            color: "#FFFFFF",
          }}
          repeat={1}
          className="text-white font-bold"
        />
        <p className="text-[18px] max-w-[550px] text-white mb-12">
          An aspiring web developer with a passion for learning and building
          modern, responsive websites. I am constantly seeking new opportunities
          to improve my skills.
        </p>
        <button className="bg-red p-4 px-20 text-white">Contact me</button>
      </div>
    </div>
  );
}

// <h1 className="text-white text-[80px] font-semibold text-left -mt-4 mb-6">
//   A Frontend Developer
// </h1>;
