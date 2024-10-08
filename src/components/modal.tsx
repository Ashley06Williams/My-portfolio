"use client";

import React, { useState } from "react";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-red text-white p-2 px-12 rounded-tr-xl rounded-bl-xl"
      >
        Message Me
      </button>

      <div className="overlay">
        <div className="w-12"></div>
      </div>
    </>
  );
}
