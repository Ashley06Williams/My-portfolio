import Image from "next/image";
import React from "react";

const cardItems = [
  {
    src: "/react.svg",
    title: "React",
    description:
      "A powerful UI library that makes building interactive, component-based interfaces fast and efficient.",
    link: "https://react.dev/",
    id: 1,
  },
  {
    src: "/nextjs.svg",
    title: "Next.js",
    description:
      "A React framework that offers server-side rendering, routing, and powerful full-stack capabilities.",
    link: "https://nextjs.org/docs",
    id: 2,
  },
  {
    src: "/javascript.svg",
    title: "JavaScript",
    description:
      "The core language of the web, enabling dynamic behavior and powering both front-end and back-end development.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    id: 3,
  },
  {
    src: "/tailwind.svg",
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework that makes styling fast, consistent, and responsive without writing custom CSS.",
    link: "https://tailwindcss.com/docs",
    id: 4,
  },
  {
    src: "/typescript.svg",
    title: "TypeScript",
    description:
      "A typed superset of JavaScript that improves code quality, developer productivity, and long-term maintainability.",
    link: "https://www.typescriptlang.org/docs/",
    id: 5,
  },
  {
    src: "/firebase.svg",
    title: "Firebase",
    description:
      "A backend platform offering real-time databases, authentication, hosting, and full app infrastructure out of the box.",
    link: "https://firebase.google.com/docs",
    id: 6,
  },
  {
    src: "/wordpress.svg",
    title: "WordPress",
    description:
      "A flexible CMS for building websites quickly, offering themes, plugins, and intuitive content management.",
    link: "https://wordpress.org/documentation/",
    id: 7,
  },
  {
    src: "/gitHub.svg",
    title: "GitHub",
    description:
      "A platform for version control, collaboration, and managing code through Git repositories.",
    link: "https://docs.github.com/",
    id: 8,
  },
  {
    src: "/figma.svg",
    title: "Figma",
    description:
      "A collaborative design tool used for UI/UX creation, prototyping, and streamlined team workflows.",
    link: "https://help.figma.com/hc/en-us",
    id: 9,
  },
];


export default function AbilitySection() {
  return (
    <div className="md:section-spacing  scroll-mt-32 my-40 text-center" id="skills">
      <h3 className="text-white text-3xl font-light">Take A Look At My Skills</h3>
      <h1 className="font-semibold text-8xl text-white mt-4 mb-14">
        <span className="text-red">Tech</span> Stack
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 ">
        {cardItems.map((cardItem) => (
          <div
            key={cardItem.id}
            className="relative h-full"
          >
            <div className="absolute -left-4 top-1/4 -translate-y-1/2 w-8 h-28 bg-red rounded-full z-0 shadow-[0_0_20px_rgba(255,74,87,0.3)]"></div>
            <div className="flex flex-col bg-[#2B2D41] h-full p-4 md:p-8 shadow-md hover:shadow-xl rounded-3xl text-left relative z-10">
            
            <div className="flex items-center justify-between">
            <div className="bg-[#474A69] w-fit p-5 rounded-full">
                <Image src={cardItem.src} width={54} height={54} alt="icon" />
              </div>

              {/* <Link href="#" className="text-red/80 font-light text-2xl pb-10">
              learn more
              </Link> */}
            </div>
             
              <h3 className="text-white font-regular text-3xl mt-5 mb-5">
                {cardItem.title}
              </h3>
              <p className="text-white/75 text-lg leading-loose">
                {cardItem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
