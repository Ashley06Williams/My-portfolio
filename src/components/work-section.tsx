import React from "react";
import CardContainer from "./cardContainer";
import Link from "next/link";

const workItem = [
    {
    imgSrc: "/renderme.png",
    title: "RenderMe",
    workLink: "https://renderme.co.za/",
    paragraph:
      "RenderMe is a web app that allows users to create and host their own CVs online. It offers a user-friendly interface and customizable templates, making it easy for anyone to showcase their skills and experience.",
    id: 1,
  },
  {
    imgSrc: "/mortgage.png",
    title: "Mortgage Calculator",
    workLink: "https://mortgage-calc-chi.vercel.app/",
    paragraph:
      "This Next.js mortgage calculator lets users easily estimate  monthly payments by inputting the loan amount, interest rate, and term. It offers fast performance and a user-friendly  interface, making it a handy tool for homebuyers.",
    id: 2,
  },
  // {
  //   imgSrc: "/ClashRoyale.png",
  //   title: "Clash Royale Stats",
  //   workLink: "http://clash-royale-959192-461ae1-188-245-209-103.traefik.me/",
  //   paragraph:
  //     "Clash Royale stat checker fetches player stats on a server-side component, overcoming CORS limitations. Deployed on a private server with a static IP due to API restrictions, it provides reliable performance without HTTPS.",
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

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {workItem.map((item) => (
        <Link
          key={item.id}
          target="_blank"
          href={item.workLink}
          className="group bg-blueGrey-light hover:shadow-2xl mb-6 shadow-md p-4 md:p-0 justify-center rounded-2xl block transition-shadow duration-300"
        >
          <div className="flex flex-col items-center justify-center ">
            <img
              src={item.imgSrc}
              className="rounded-tl-2xl rounded-tr-2xl w-full h-1/2"
              alt="project image"

            />
          </div>
          <div className="flex flex-col  text-left md:ml-4 md:p-4 mt-4 md:mt-0">
            <div className="relative w-fit">
              <h3 className="text-white font-semibold text-[25px]">
                {item.title}
                <span className="block absolute left-0 -bottom-1 w-full h-1 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-800 "></span>
              </h3>
            </div>
            <p className="text-[15px] text-white md:mb-2 mb-4 mt-4">
              {item.paragraph}
            </p>
            <span className=" text-slate-300 group-hover:text-red transition-colors duration-200">View Project</span>
          </div>
        </Link>
      ))}

      </div>
    </section>
  );
}
