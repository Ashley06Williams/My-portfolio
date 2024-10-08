import React from "react";
import { useForm } from "react-hook-form";

type PopupProps = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Popup({ modal, setModal }: PopupProps) {
  const toggleModal = () => setModal(!modal);

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
      <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-black bg-opacity-30 flex justify-center items-center">
        <div
          className="relative p-[32px] w-[100%] max-w-[640px] bg-white bg-opacity-100 rounded-lg scroll-py-12 border border-blac
      "
        >
          <button
            onClick={toggleModal}
            className="absolute top-[16px] right-[16px] "
          >
            x
          </button>
          <div className="flex flex-col">
            <h2 className="text-3xl mb-4">Let's get in touch</h2>
            <p className="font-light text-sm">Kindly fill out the form</p>
            <div className="space-y-6 flex flex-col">
              <input
                className="bg-blueGrey-light mt-4 p-2 rounded-md "
                placeholder="Your Email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email ? (
                <p className="text-red">{errors.email.message}</p>
              ) : null}

              <input
                placeholder="Your Name"
                className="bg-blueGrey-light p-2 rounded-md"
                id="name"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name ? (
                <p className="text-red">{errors.name.message}</p>
              ) : null}
              <textarea
                placeholder="Your Message"
                className="bg-blueGrey-light p-2 h-48 rounded-md text-white font-medium"
                id="messsage"
                {...register("message")}
              />
            </div>
            <button className="bg-red w-36 rounded-lg p-2 text-white font-medium mt-10">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  ) : null;
}
