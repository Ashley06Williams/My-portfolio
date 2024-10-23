import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="mt-[650px] md:mt-32 p-4 md:p-0 scroll-mt-32">
      <div className=" ">
        <div className="flex flex-col md:flex-row md:flex-1 flex-wrap md:flex-nowrap md:justify-between  md:space-x-40">
          <div>
            <h3 className="text-white text-[15px] md:text-[18px] ">
              It&apos;s great to virtually meet you!
            </h3>
            <h1 className="font-semibold text-[50px] md:text-[60px] text-white -mt-2 mb-4">
              <span className="text-red">I&apos;m</span> Ashley
              <p className="text-red -mt-4 md:mr-20 ">Williams</p>
            </h1>
          </div>
          <div>
            <p className="text-white text-[14px] md:text-[16px]">
              In 2022, I started learning Java at school. At first, it was quite
              challenging, but that made it interesting. I made a habit of
              dedicating about an hour each day to practicing and reminded
              myself nothing new comes easy. I built a passion for programming
              and a drive for that feeling of solving problems I&apos;ve been
              stuck on for hours, which carried me through and opened the door
              to web development. I kicked things off with a course in
              JavaScript and as it goes, moved on to React, and am currently
              exploring Next.js as well as any upcoming technologies. As a{" "}
              <span className="font-bold">self-taught developer</span> , I may
              not come with formal university qualifications, but I bring a deep
              motivation to continuously learn and improve. Every day, I focus
              on building my skills, growing as a developer, and laying the best
              foundation for a successful career, I realise tech changes fast
              and I am always open to learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
