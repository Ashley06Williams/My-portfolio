import React from "react";
import Image from "next/image";

import Popup from "./form-popup";

type PopupProps = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FormPage({ modal, setModal }: PopupProps) {
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <section id="contact" className="scroll-mt-32 mb-40 mt-40 flex flex-col items-center justify-center">
      <div className="mb-10 flex items-center justify-center gap-4 md:gap-8">
        {/* left-most (hidden on small screens) */}
        <div className="hidden md:block transform -rotate-12 -translate-y-6">
          <Image
            src="/qambathi.png"
            alt="Project placeholder 1"
            width={180}
            height={140}
            className="rounded-xl shadow-xl bg-white object-cover"
          />
        </div>

        <div className="transform -rotate-6 -translate-y-3">
          <Image
            src="/render.png"
            alt="Project placeholder 2"
            width={200}
            height={150}
            className="rounded-xl shadow-xl bg-white object-cover"
          />
        </div>

        <div className="transform -translate-y-1">
          <Image
            src="/figmaash.png"
            alt="Project placeholder 3"
            width={240}
            height={170}
            className="rounded-xl shadow-xl bg-white object-cover"
          />
        </div>

        <div className="transform rotate-12 translate-y-2 hidden md:block">
          <Image
            src="/mortagecal.png"
            alt="Project placeholder 4"
            width={200}
            height={150}
            className="rounded-xl shadow-xl bg-white object-cover"
          />
        </div>

        <div className="hidden lg:block transform -rotate-6 -translate-y-3">
          <Image
            src="/almondvalley.png"
            alt="Project placeholder 5"
            width={180}
            height={140}
            className="rounded-xl shadow-xl bg-white object-cover"
          />
        </div>
      </div>

      <h1 className="text-2xl md:text-4xl font-semibold text-white text-center"><span className="text-red">Ready</span> to grow,<span className="text-red"> Ready</span> to learn</h1>
      <p className="text-white text-center max-w-2xl mt-5 text-md md:text-xl">If you know someone who&apos;s looking for a motivated junior developer, or if you&apos;re hiring yourself, I&apos;d be excited to chat.</p>
          <button onClick={toggleModal} className="relative flex items-center bg-red border-2 border-red text-white font-medium mt-8 text-md md:text-xl group hover:bg-white p-1 rounded-full overflow-hidden">
    <div className="relative z-10 bg-white rounded-full w-[40px] h-[40px] md:w-[40px] md:h-[40px] flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6 md:w-8 md:h-8 text-red">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </div>
    <p className="relative z-10 pl-3 pr-4 group-hover:text-red">Let&apos;s Get in Touch</p>
  </button>

  <Popup modal={modal} setModal={setModal} />
    </section>
  );
}


