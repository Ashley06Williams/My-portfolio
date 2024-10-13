import React from "react";

export default function AboutMe() {
  return (
    <section id="about">
      <div className="mt-32">
        <div className="flex flex-1 justify-between items-center space-x-40">
          <div>
            <h3 className="text-white text-[16px] ">
              It's great to virtually meet you !
            </h3>
            <h1 className="font-semibold text-[60px] text-white -mt-2 mb-4">
              <span className="text-red">I'm</span> Ashley
              <p className="text-red -mt-4 mr-20">Williams</p>
            </h1>
          </div>
          <div>
            <p className="text-white">
              In 2022, I started learning Java at school. At first, it was a
              quite challenging but that made it interesting, I made a habit of
              dedicating about an hour each day to practicing and reminded
              myself nothing new comes easy.I built a passion for programming
              and a drive for that feeling of solving problems I've been stuck
              on for hours whichcarried me through and opened the door to web
              development. I kicked things off with a course in JavaScript and
              as it goes moved on to React and currenlty exploring nextJS as
              well as any upcoming technologies. As a self-taught developer, I
              may not come with formal university qualifications, but I bring a
              deep motivation to continuously learn and improve. Every day, I
              focus on building my skills, growing as a developer, and laying
              the best foundation for a successful career, I realise tech
              changes fast and I am always open to learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
