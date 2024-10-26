import Link from "next/link";
import React from "react";

export default function FooterSection() {
  return (
    <div className=" flex justify-between p-2  h-full md:max-w-[1200px] mx-auto">
      <div className="">
        <p className="text-[20px] p-3 text-white font-bold mt-1">
          CODEDBY<span className="text-red">ASH</span>
        </p>
        <p className="px-2 text-slate-300 text-[10px]">
          Copyright &copy; 2024 Ashley Williams. All Rights Reserved.
        </p>
        <p className="px-2  text-slate-300 text-[10px] ">
          Made with ❤️ and NextJS
        </p>
      </div>
      <div className="flex px-6 space-x-4">
        <Link
          href="https://github.com/Ashley06Williams"
          className="py-8"
          target="_blank"
        >
          <img src="/gitHub.svg" alt="mortgage calc page" className="w-10" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ashley-williams-251693304/ "
          className="py-8"
          target="_blank"
        >
          <img src="/linkedIn.svg" alt="" className="w-10" />
        </Link>
      </div>
    </div>
  );
}
