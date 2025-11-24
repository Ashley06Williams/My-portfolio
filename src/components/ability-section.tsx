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
    <div className="md:section-spacing  scroll-mt-32" id="skills">
      <h3 className="text-white text-[16px]">My Abilities</h3>
      <h1 className="font-semibold text-[60px] text-white -mt-2 mb-4">
        <span className="text-red">Tech</span>Stack
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {cardItems.map((cardItem) => (
          <div
            key={cardItem.id}
            className="flex flex-col bg-blueGrey-light h-auto  p-4 md:pt-10 shadow-md hover:shadow-xl rounded-2xl"
          >
            <img src={cardItem.src} className="w-9" alt="icon" />
            <h3 className="text-white font-semibold text-lg mt-5 mb-5 ">
              {cardItem.title}
            </h3>
            <p className="text-white font-light text-sm mb-4 ">
              {cardItem.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
