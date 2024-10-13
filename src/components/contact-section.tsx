"use client";

import React, { useState } from "react";

import Popup from "./form-popup";

const contactInfo = [
  {
    id: 1,
    info: "+27 (61) 549-4028",
    svg: "/phoneIcon.svg",
  },
  {
    id: 2,
    info: "ashley@waterfalldigital.co.za",
    svg: "/emailIcon.svg",
  },
  {
    id: 3,
    info: "Western Cape, South Africa",
    svg: "/mapIcon.svg",
  },
];

export default function FormPage() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <section id="contact">
      <div className="mt-40 flex items-center justify-center">
        <div className="flex flex-col w-1/3">
          <div className="w">
            <h3 className="text-white text-[16px] ">Let's connect</h3>
            <h1 className="font-semibold text-[60px] text-white -mt-2 mb-4">
              <span className="text-red">Contact</span> Me
            </h1>
          </div>
          {contactInfo.map((data) => (
            <div
              key={data.id}
              className=" flex w-[400px] bg-[#464C71] rounded-md text-white font-semibold mb-[30px] p-3 shadow-md hover:shadow-2xl"
            >
              <img src={data.svg} className="w-6 mr-4" />
              <p>{data.info}</p>
            </div>
          ))}
        </div>
        <div className="w-2/3 ml-72 justify- mt-20">
          <button
            onClick={toggleModal}
            className="bg-red text-white p-2 px-12 rounded-tr-xl rounded-bl-xl"
          >
            Message Me
          </button>
        </div>
      </div>
      <Popup modal={modal} setModal={setModal} />
    </section>
  );
}
