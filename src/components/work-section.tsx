import React from "react";
import CardContainer from "./cardContainer";
import Link from "next/link";

const workItem = [
  {
    imgSrc: "/placeholderImage.svg",
    title: "Pricing Calculator",
    workLink: "/",
    id: 1,
  },
  {
    imgSrc: "/placeholderImage.svg",
    title: "Clash Royale stats checker",
    workLink: "/",
    id: 2,
  },
  {
    imgSrc: "/placeholderImage.svg",
    title: "Weather app",
    workLink: "/",
    id: 3,
  },
];

export default function WorkSection() {
  return (
    <section id="work" className=" h-[500px] md:h-1/2 ">
      <div className="mt-40 ">
        <div className="text-center md:text-left">
          <h3 className="text-white  text-[16px] ">Take a look at</h3>
          <h1 className="font-semibold text-[60px] text-white -mt-2 mb-4">
            <span className="text-red">My</span> Work
          </h1>
        </div>
        <CardContainer>
          {workItem.map((item) => (
            <div
              key={item.id}
              className=" bg-blueGrey-light md:w-1/4 w-2/3 h-fit p-4 pt-14 mb-6 shadow-md items-center"
            >
              <div className="flex flex-col items-center">
                <img src={item.imgSrc} className="w-60 -mt-6" />
              </div>
              <div className="px-4 ">
                <h3 className="text-white font-semibold text-[18px] mt-6 md:mb-4 ">
                  {item.title}
                </h3>
                <Link
                  href={item.workLink}
                  className="text-red hover:text-blue-500 hover:underline"
                >
                  View Project
                </Link>
              </div>

              <div className="flex flex-col"></div>
            </div>
          ))}
        </CardContainer>
      </div>
    </section>
  );
}
