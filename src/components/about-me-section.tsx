import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="section-spacing md:mt-32 p-4 md:p-0 scroll-mt-32"
    >
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

          <div className="flex flex-col  gap-4 text-white text-[14px] md:text-[16px]">
            <p>
              I jumped into programming with Java at school in 2022. While it
              was tough at first, I got hooked on that feeling you get when you
              finally crack a problem you've been stuck on. Making it a daily
              habit, even just for an hour, really helped me progress.
            </p>
            <p>
              That initial spark led me into web development, where I started
              with JavaScript, moved on to React, and now I'm diving into
              Next.js and keeping up with new tech.
            </p>
            <p>
              As a self-taught developer, what I might lack in formal education
              I make up for with genuine enthusiasm and a constant drive to
              learn. Tech moves fast, and I'm always ready to adapt and grow
              with it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
