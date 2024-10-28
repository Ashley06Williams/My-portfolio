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
    src: "/java-stroke-rounded.svg",
    title: "Java",
    description:
      "I have been learning Java in school for the past two years, focusing on the basics and fundamentals of programming, with a particular emphasis on object-oriented programming. By studying two languages simultaneously, I've noticed that the core concepts of programming are quite similar. While I may not be highly skilled yet, I'm eager to enhance my abilities throughout my career and continuously learn as much as I can.",
    id: 4,
  },
];

export default function AbilitySection() {
  return (
    <div className="section-spacing  scroll-mt-32" id="ability">
      <h3 className="text-white text-[16px]">My Abilities</h3>
      <h1 className="font-semibold text-[60px] text-white -mt-2 mb-4">
        <span className="text-red">Tech</span>Stack
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-6 mx-auto">
        {cardItems.map((cardItem) => (
          <div
            key={cardItem.id}
            className="flex flex-col bg-blueGrey-light w-full md:w-[22%] h-auto  p-4 md:pt-10 shadow-md hover:shadow-xl"
          >
            <img src={cardItem.src} className="w-8" alt="icon" />
            <h3 className="text-white font-semibold text-[16px] mt-6 mb-4">
              {cardItem.title}
            </h3>
            <p className="text-white font-light text-[14px] mb-4 ">
              {cardItem.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
