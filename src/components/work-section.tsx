import React from "react";
import CardContainer from "./cardContainer";
import Link from "next/link";

const workItem = [
  {
    imgSrc: "/mortDisplay.webp",
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
    <section id="work" className=" scroll-mt-32 section-spacing md:mt-20">
      <div className="text-left ">
        <h3 className="text-white text-[16px]">Take a look at</h3>
        <h1 className="font-semibold text-[60px] text-white -mt-2 mb-4">
          <span className="text-red">My</span> Work
        </h1>
      </div>
      <CardContainer>
        {workItem.map((item) => (
          <div
            key={item.id}
            className="bg-blueGrey-light hover:shadow-2xl mb-6 shadow-md flex flex-col md:flex-row p-4 md:p-0 justify-center md:max-w-xl "
          >
            <div className="flex flex-col  items-center justify-center  md:w-1/2">
              <img
                src={item.imgSrc}
                className="w-[475px] md:h-[90%] md:ml-8"
                alt="project image"
              />
            </div>
            <div className="flex flex-col  md:w-1/2  text-left md:ml-4 md:p-4 mt-4 md:mt-0">
              <h3 className="text-white font-semibold text-[25px] mb-2 md:mb-4 hover:underline">
                {item.title}
              </h3>
              <p className="text-[15px] text-white md:mb-2 mb-4">
                This Next.js mortgage calculator lets users easily estimate
                monthly payments by inputting the loan amount, interest rate,
                and term. It offers fast performance and a user-friendly
                interface, making it a handy tool for homebuyers.
              </p>
              <Link
                target="_blank"
                href={item.workLink}
                className="text-red hover:text-blue-500 hover:underline "
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </CardContainer>
    </section>
  );
}
