import React from "react";

export default function FooterSection() {
  return (
    <div className="mx-[250px] flex justify-between">
      <div>
        <p className="text-[20px] p-4 text-white font-bold mt-2">
          CODEDBY<span className="text-red">ASH</span>
        </p>
        <p className="px-4 text-slate-300">
          Copyright &copy; 2024 Ashley Williams. All Rights Reserved.
        </p>
        <p className="px-4  text-slate-300">Made with ❤️ and NextJS</p>
      </div>
      <div className="flex px-6 space-x-8">
        <img src="/gitHub.svg" className="w-10" />
        <img src="/linkedIn.svg" alt="" className="w-10" />
      </div>
    </div>
  );
}
