import React from "react";

export default function FooterSection() {
  return (
    <div className=" flex justify-between p-2  h-full md:mx-[200px] mx-0">
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
      <div className="flex px-6 space-x-2">
        <img src="/gitHub.svg" className="w-10" />
        <img src="/linkedIn.svg" alt="" className="w-10" />
      </div>
    </div>
  );
}
