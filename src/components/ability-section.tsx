import React from "react";

const cardItems = [
  {
    src: "/react-stroke-rounded.svg",
    title: "React",
    description:
      "I am currently building my expertise in react by starting off my with a course by a developer known as Bytegrad who went through the fundamentals of the framework. I am enjoying the process of enhancing my skills by building my own projects and leveling up as I go",
    id: 1,
  },
  {
    src: "/nextJsIcon.svg",
    title: "NextJs",
    description:
      "Exploring the library of NextJS has been an exciting journey, with the introduction of server side and client side components I am able to see the benefits of keeping to server side benifiting the speed and optimizations of my site while also forcing myself to explore the context API in order to parse context to my app ",
    id: 2,
  },
  {
    src: "/java-script-stroke-rounded.svg",
    title: "JavaScript",
    description:
      "JavaScript is my core programming language in which I started on my coding journey, beginning within a Udemy course. I was taught the fundamentals of programming and currently building on this knowledge enhance my front-end and back-end development",
    id: 3,
  },
  {
    src: "/java-stroke-rounded.svg",
    title: "Java",
    description:
      "I have been learning Java in school for the past two years focusing on the basics and fundamentals of programming, by learning two languages simultaneously I have seen the baisc concept of programming is very similar. Although not very skilled I hope to improve my skills across and continously learn as much as I can",
    id: 4,
  },
];

export default function AbilitySection() {
  return (
    <div>
      <h3 className="text-white text-[16px] text-center md:text-left">
        My Abilities
      </h3>
      <h1 className="font-semibold text-[60px] text-white -mt-2 mb-4 text-center md:text-left">
        <span className="text-red">Tech</span>Stack
      </h1>
      <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row md:justify-between align-middle items-center  md:space-x-20 mx-auto">
        {cardItems.map((cardItem) => (
          <div
            key={cardItem.id}
            className="flex flex-col flex-wrap bg-blueGrey-light w-3/4 md:w-1/4 h-[350px] md:h-[500px] p-4  pt-4 md:pt-14 mb-2 md:mb-6 shadow-md "
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
