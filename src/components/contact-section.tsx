import React from "react";

import Popup from "./form-popup";

type PopupProps = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const contactInfo = [
  {
    id: 1,
    info: "+27 (61) 549-4028",
    svg: "/phoneIcon.svg",
  },
  {
    id: 2,
    info: "codedbyash@gmail.com",
    svg: "/emailIcon.svg",
  },
  {
    id: 3,
    info: "Western Cape, South Africa",
    svg: "/mapIcon.svg",
  },
];

export default function FormPage({ modal, setModal }: PopupProps) {
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <section id="contact" className="scroll-mt-32 mb-12">
      <div className="mt-40 flex flex-wrap md:flex-nowrap flex-col md:flex-row items-start justify-between">
        {/* Left Column - Contact Info */}
        <div className="flex flex-col w-full md:w-1/3 items-start justify-start md:justify-center">
          <div>
            <h3 className="text-white text-[14px] md:text-[18px] text-left">
              Let&apos;s connect
            </h3>
            <h1 className="font-semibold text-[55px] md:text-[60px] text-white -mt-2 mb-4 text-left leading-tight md:leading-normal">
              <span className="text-red mt-4">Contact</span> Me
            </h1>
          </div>

          {contactInfo.map((data) => (
            <div
              key={data.id}
              className="flex flex-row  w-[350px] md:w-[400px] bg-[#464C71] rounded-md text-white font-semibold mb-[30px] p-3 shadow-md hover:shadow-2xl"
            >
              <img src={data.svg} className="w-6 mr-4" alt="icon" />
              <p>{data.info}</p>
            </div>
          ))}
        </div>

        {/* Right Column - Button centered on medium screens */}
        <div className="w-full md:w-2/3 flex md:items-center md:justify-center md:ml-auto md:mt-52">
          <button
            onClick={toggleModal}
            className="bg-red text-white p-2 px-12 rounded-tr-xl rounded-bl-xl hover:bg-red-light mb-4 md:mb-0"
          >
            Message Me
          </button>
        </div>
      </div>
      <Popup modal={modal} setModal={setModal} />
    </section>
  );
}
