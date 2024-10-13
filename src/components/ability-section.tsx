import React from "react";

const cardItems = [
  {
    src: "/react-stroke-rounded.svg",
    title: "React",
    description: "lorem Ipsum",
    id: 1,
  },
  {
    src: "/nextJsIcon.svg",
    title: "NextJs",
    description: "lorem Ipsum",
    id: 2,
  },
  {
    src: "/java-script-stroke-rounded.svg",
    title: "JavaScript",
    description: "lorem Ipsum",
    id: 3,
  },
  {
    src: "/java-stroke-rounded.svg",
    title: "Java",
    description: "lorem Ipsum",
    id: 4,
  },
];

export default function AbilitySection() {
  return (
    <div>
      <h3 className="text-white text-[16px] ">My Abilities</h3>
      <h1 className="font-semibold text-[60px] text-white -mt-2 mb-4">
        <span className="text-red">Tech</span>Stack
      </h1>
      <div className="flex justify-between items-center space-x-20 mx-auto">
        {cardItems.map((cardItem) => (
          <div
            key={cardItem.id}
            className="flex flex-col bg-blueGrey-light w-1/4 h-fit p-4 pt-14 mb-6 shadow-md "
          >
            <img src={cardItem.src} className="w-8" />
            <h3 className="text-white font-semibold text-[16px] mt-6 mb-4">
              {cardItem.title}
            </h3>
            <p className="text-white font-light text-[12px] mb-4">
              {cardItem.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
