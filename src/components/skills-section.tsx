import Image from "next/image";
import React from "react";

const cardItems = [
  {
    src: "/react-stroke-rounded.svg",
    title: "React",
    description:
      "React is a perfect fit for my journey. Its component-based design and fast Virtual DOM make it easy to build and scale dynamic projects. With React, I can focus on creating clean, reusable code blocks and responsive web design leveling up your skills as I progress in full-stack development.",
    id: 1,
  },
  {
    src: "/nextJsIcon.svg",
    title: "NextJs",
    description:
      "Exploring Next.js has been an exciting experience! Working with server-side and client-side components is giving me a clear view of the performance benefits of server-side rendering. It's also pushing me to dive deeper into the Context API to manage and pass data across my app efficiently.",
    id: 2,
  },
  {
    src: "/java-script-stroke-rounded.svg",
    title: "JavaScript",
    description:
      "JavaScript is the cornerstone of my programming journey. I first delved into coding through a Udemy BootCamp course, where I learned the fundamentals of programming. Since then, I’ve been actively building on that foundation, enhancing my skills in both front-end and back-end development.",
    id: 3,
  },
 {
    src: "/tailwind.svg",
    title: "Tailwind CSS",
    description:
      "Tailwind CSS has transformed the way I approach styling in my projects. Its utility-first approach allows for rapid prototyping and a more efficient workflow. I've enjoyed learning how to create responsive designs with ease, and I'm excited to continue mastering this powerful framework.",
    id: 4,
  },
   {
    src: "/typescript.svg",
    title: "TypeScript",
    description:
      "TypeScript has been a game-changer in my development process. Its static typing and powerful tooling have greatly improved my productivity and code quality. I'm enjoying the process of gradually adopting TypeScript in my projects, and I'm excited to leverage its features to build more robust applications.",
    id: 5,
  },
     {
    src: "/firebase.svg",
    title: "Firebase",
    description:
      "Firebase has been an essential part of my development toolkit. Its real-time database and authentication features have allowed me to build dynamic applications quickly. I'm particularly impressed with how Firebase integrates seamlessly with other technologies in my stack.",
    id: 6,
  },
];

export default function AbilitySection() {
  return (
    <div className="md:section-spacing  scroll-mt-32 my-40 text-center" id="skills">
      <h3 className="text-white text-3xl font-light">Take A Look At My Skills</h3>
      <h1 className="font-semibold text-8xl text-white mt-4 mb-14">
        <span className="text-red">Tech</span> Stack
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
        {cardItems.map((cardItem) => (
          <div
            key={cardItem.id}
            className="relative"
          >
            <div className="absolute -left-4 top-1/4 -translate-y-1/2 w-8 h-28 bg-red rounded-full z-0 shadow-[0_0_20px_rgba(255,74,87,0.3)]"></div>
            <div className="flex flex-col bg-[#2B2D41] h-auto p-4 md:py-6 shadow-md hover:shadow-xl rounded-3xl text-left relative z-10">
            
              <div className="bg-[#474A69] w-fit p-5 rounded-full">
                <Image src={cardItem.src} width={54} height={54} alt="icon" />
              </div>
              <h3 className="text-white font-semibold text-3xl mt-5 mb-5">
                {cardItem.title}
              </h3>
              <p className="text-white text-lg font-regular">
                {cardItem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
