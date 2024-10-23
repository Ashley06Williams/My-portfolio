import React from "react";
import CardContainer from "./cardContainer";
import Link from "next/link";

const workItem = [
  {
    imgSrc: "/MortgageCalc.png",
    title: "Mortgage Calculator",
    workLink: "https://mortgage-calc-chi.vercel.app/",
    id: 1,
  },
  // {
  //   imgSrc: "/placeholderImage.svg",
  //   title: "Clash Royale stats checker",
  //   workLink: "/",
  //   id: 2,
  // },
  // {
  //   imgSrc: "/placeholderImage.svg",
  //   title: "Weather app",
  //   workLink: "/",
  //   id: 3,
  // },
];

export default function WorkSection() {
  return (
    <div className="mt-40">
      <section id="work" className="h-[50px] md:h-1/2 scroll-mt-32">
        <div className="text-left">
          <h3 className="text-white text-[16px]">Take a look at</h3>
          <h1 className="font-semibold text-[60px] text-white -mt-2 mb-4">
            <span className="text-red">My</span> Work
          </h1>
        </div>
        <CardContainer>
          {workItem.map((item) => (
            <div
              key={item.id}
              className="bg-blueGrey-light md:w-1/4 w-[300px] h-fit p-4 pt-14 mb-6 shadow-md flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-start">
                <img
                  src={item.imgSrc}
                  className="w-60 -mt-6"
                  alt="project image"
                />
              </div>
              <div className="px-4">
                <h3 className="text-white font-semibold text-[18px] mt-6 md:mb-4 text-left">
                  {item.title}
                </h3>
                <Link
                  target="_blank"
                  href={item.workLink}
                  className="text-red hover:text-blue-500 hover:underline"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </CardContainer>
      </section>
    </div>
  );
}
