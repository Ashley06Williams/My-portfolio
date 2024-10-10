import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Resend } from "resend";
import { POST } from "./email";
type PopupProps = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const RESEND_API_KEY = "re_RzoTnP74_7EFdrYNyYmrEAboKqWKvgQgA";

export default function Popup({ modal, setModal }: PopupProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toggleModal = () => setModal(!modal);

  const handleSubmit = (e) => {
    e.preventDefault();
    POST();

    console.log(name, email, message);
  };
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<{
    name: string;
    email: string;
    message: string;
  }>();

  return modal ? (
    <form
      action={async (FormData) => {
        const result = await trigger();
        if (!result) return;
      }}
    >
      <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-white bg-opacity-10 flex justify-center items-center">
        <div
          className="relative p-[32px] w-[100%] max-w-[640px] bg-[#181A29] rounded-lg scroll-py-12 
      "
        >
          <button
            onClick={toggleModal}
            className="absolute top-[16px] right-[16px] "
          >
            <img src="/cancel-01-stroke-rounded.svg" className="p-4 mt-6 " />
          </button>
          <div className="flex flex-col">
            <h2 className="text-[45px] font-semibold mb-2 text-white">
              Let's get in <span className="text-red">touch</span>
            </h2>
            <p className="font-light text-sm text-white">
              Kindly fill out the form
            </p>
            <div className="space-y-6 flex flex-col">
              <input
                className="bg-[#2B2D41] mt-4 p-2 rounded-md "
                placeholder="Your Email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email ? (
                <p className="text-red">{errors.email.message}</p>
              ) : null}

              <input
                placeholder="Your Name"
                className="bg-[#2B2D41] p-2 rounded-md"
                id="name"
                {...register("name", {
                  required: "Name is required",
                })}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name ? (
                <p className="text-red">{errors.name.message}</p>
              ) : null}

              <textarea
                placeholder="Your Message"
                className="bg-[#2B2D41] p-2 h-48 rounded-md text-white font-medium"
                id="messsage"
                {...register("message")}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex  justify-center">
              <button
                onClick={handleSubmit}
                className=" bg-red w-36 rounded-lg p-2 text-white font-medium mt-10"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  ) : null;
}
