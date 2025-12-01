

import React from "react";


import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const workItem = [
    {
    imgSrc: "/renderme.png",
    title: "RenderMe",
    workLink: "https://renderme.co.za/",
    paragraph:
      "A digital CV builder that lets users create and publish their own online resumes.",
      badge: "Next.JS / Firebase",
      button: "View Live Project",
    id: 1,
  },
  {
    imgSrc: "/mortgage.png",
    title: "Mortgage Calculator",
    workLink: "https://mortgage-calc-chi.vercel.app/",
    paragraph:
      "A simple, intuitive calculator that helps users estimate monthly home loan payments instantly.",
      badge: "React / Tailwind",
      button: "View Live Project",
    id: 2,
  },
    {
    imgSrc: "/portresize.png",
    title: "CodedByAsh Portfolio",
    workLink: "",
    paragraph:
      "A personal portfolio showcasing my projects, skills, and growth as a front-end developer.",
      badge: "Next.JS / Tailwind",
      button: "Currently Viewing",
    id: 3,
  },
];

export default function WorkSection() {


  return (
    <section id="portfolio" className=" scroll-mt-32 section-spacing bg-white rounded-[60px] p-10">
      <div className="text-center">
      <h3 className="text-[#1D202F] text-3xl font-light">Featured Work</h3>
      <h1 className="font-semibold text-8xl text-[#1D202F] mt-4 mb-14">
        <span className="text-red">Port</span>folio
      </h1>
      </div>

<div className="w-full">
      <Carousel
        opts={{ align: "start" }}
        className="w-full"
      >
        <CarouselContent>
          {workItem.map((item) => (
            <CarouselItem key={item.id} className="basis-full md:basis-1/2 lg:basis-1/3 flex-col relative">
                <Link target="_blank" href={item.workLink} className="group block h-full">
                  <div className="group bg-blueGrey-light shadow-md rounded-3xl h-full flex flex-col">
                    <div className="flex items-center justify-center mb-4 px-2 pt-2">
                      <img src={item.imgSrc} alt={item.title} className="rounded-3xl " />
                    </div>
                    <p className="text-white text-lg bg-red/90 p-2 rounded-3xl w-fit absolute top-2 right-2">{item.badge}</p>
                    <div className="flex items-center justify-between mb-2"></div>
                    <div className="flex-1 px-4 mb-6">
                      <h3 className="text-white text-3xl mb-2">{item.title}</h3>
                      <p className="text-md font-thin text-white mb-4">{item.paragraph}</p>
                      {
                        item.id !== 3 ? <button className="relative flex items-center bg-red border-2 border-red text-white  text-sm group group-hover:bg-white p-1 rounded-full overflow-hidden">
                        <div className="relative z-10 bg-white rounded-full w-[28px] h-[28px] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-red">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                        <p className="relative z-10 pl-3 pr-4 group-hover:text-red">{item.button}</p>
                      </button> :
                      <button className="relative flex items-center bg-white border-2 border-red text-red  text-sm group p-1 rounded-full overflow-hidden">
                        <div className="relative z-10 bg-white rounded-full w-[28px] h-[28px] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-red">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                        <p className="relative z-10 pl-3 pr-4 group-hover:text-red">{item.button}</p>
                      </button>
                      }

                    </div>
                  </div>
                </Link>
              
            </CarouselItem>
          ))}
        </CarouselContent>

      </Carousel>
    </div>
    </section>
  );
}
