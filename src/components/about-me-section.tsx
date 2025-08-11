import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="section-spacing md:mt-32 p-4 md:p-0 scroll-mt-32"
    >
      <div>
        <div className="flex flex-col md:flex-row md:flex-1 flex-wrap md:flex-nowrap md:justify-between items-center  md:space-x-40">
          <div>
            <h3 className="text-white text-[15px] md:text-[18px] ">
              It&apos;s great to virtually meet you!
            </h3>
            <h1 className="font-semibold text-[50px] md:text-[60px] text-white -mt-2 mb-4">
              <span className="text-red">I&apos;m</span> Ashley
              <p className="text-red -mt-4 md:mr-20 ">Williams</p>
            </h1>
          </div>

          <div className="flex flex-col  gap-4 text-white text-[14px] md:text-[16px]">
            <p>
              I&apos;m a self-taught web developer with a passion for building custom applications using React and Next.JS. I first started coding in high school with Java back in 2022, and while it was challenging at first, I quickly became hooked on the problem-solving process.
            </p>
            <p>
              That curiosity led me into web development, where I&apos;ve grown my skills in JavaScript, React, and modern frameworks like Next.js. Instead of just building small showcase projects, I wanted to create something meaningful, something I could use, improve, and build upon long-term.
            </p>
            <p>
              That&apos;s how RenderMe was born: a web app that allows users to create and host their own CVs online. It&apos;s a project I&apos;m proud of and continue to develop as both a personal tool and a platform for others.
            </p>
            <p>
              While I may not have a formal CS degree, I make up for it with consistency, curiosity, and a real passion for learning. I&apos;m focused on staying adaptable, growing with the tech landscape, and delivering work that brings real value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
