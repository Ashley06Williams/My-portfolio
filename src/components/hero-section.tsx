import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-blueGrey max-w-[1200px] mx-auto h-screen px-20 flex flex-col justify-center">
      <div className="max-w-[800]">
        <h2 className="text-red text-[40px] ">Hello, I'm</h2>
        <h1 className="text-white text-[80px] font-semibold text-left p-0 m-0">
          A Frontend Developer
        </h1>
        <p className="text-[18px] max-w-[400px] text-white mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-red p-4 px-20 text-white">Contact me</button>
      </div>
    </div>
  );
}
