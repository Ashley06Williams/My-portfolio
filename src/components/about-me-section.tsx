import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="section-spacing md:mt-32 p-4 md:p-0 scroll-mt-32"
    >
      <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-auto text-center md:text-left">
          <p className="text-2xl text-white">It&apos;s great to virtually meet you!</p>
          <h2 className="text-6xl font-semibold mt-3 text-white"><span className="text-red">Ashley</span> Williams</h2>
        </div>

        <div className="w-full md:w-auto flex justify-center md:justify-end gap-8 mt-4 md:mt-0">
          <Link href="https://www.linkedin.com/in/ashley-williams-251693304/" target="_blank" rel="noopener noreferrer" aria-label="Open Ashley's LinkedIn in new tab">
            <Image
              src="linkedIn.svg"
              alt="Ashley Williams"
              width={80}
              height={80}
              className="object-contain"
            />
          </Link>

          <Link href="https://github.com/CodedByAsh" target="_blank" rel="noopener noreferrer" aria-label="Open Ashley's GitHub in new tab">
            <Image
              src="gitHub.svg"
              alt="Ashley Williams"
              width={80}
              height={80}
              className="object-contain "
            />
          </Link>
        </div>
      </div>
                <p className="mt-10 text-white text-lg">
                I&apos;m a self-taught web developer with a passion for building custom applications using React and Next.JS. I first started coding in high school with Java back in 2022, and while it was challenging at first, I quickly became hooked on the problem-solving process. <br/>
                <br/>
            That curiosity led me into web development, where I&apos;ve grown my skills in JavaScript, React, and modern frameworks like Next.js. Instead of just building small showcase projects, I wanted to create something meaningful, something I could use, improve, and build upon long-term.<br/>
            <br/>
            That&apos;s how RenderMe was born: a web app that allows users to create and host their own CVs online. It&apos;s a project I&apos;m proud of and continue to develop as both a personal tool and a platform for others.
            While I may not have a formal CS degree, I make up for it with consistency, curiosity, and a real passion for learning. I&apos;m focused on staying adaptable, growing with the tech landscape, and delivering work that brings real value.
              </p>
        
        {/* Three rectangular badges */}
        <div className="mt-12 flex flex-col md:flex-row items-center md:justify-center ">
            <div className="w-full md:w-80 flex justify-center">
              <span className="inline-block w-full text-center px-4 py-3 border-2 border-red text-red uppercase text-sm md:text-base font-semibold rounded-l-xl">Powered by the love for dev</span>
            </div>

            <div className="w-full md:w-80 flex justify-center">
              <span className="inline-block w-full text-center px-4 py-3 bg-red text-white uppercase text-sm md:text-base font-semibold border-2 border-red ">Curiosity level: Unmeasurable</span>
            </div>

            <div className="w-full md:w-80 flex justify-center">
              <span className="inline-block w-full text-center px-4 py-3 border-2 border-red text-red uppercase text-sm md:text-base font-semibold rounded-r-xl">Certified tech addict</span>
            </div>
        </div>
    </section>
  );
}