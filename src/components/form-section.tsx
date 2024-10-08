"use client";

import React from "react";
import { useForm } from "react-hook-form";

const contactInfo = [
  {
    id: 1,
    info: "+27 (61) 549-4028",
  },
  {
    id: 2,
    info: "ashley@waterfalldigital.co.za",
  },
  {
    id: 3,
    info: "Western Cape, South Africa",
  },
];

export default function FormPage() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<{
    name: string;
    email: string;
  }>();
  return (
    <form
      action={async (FormData) => {
        const result = await trigger();
        if (!result) return;
      }}
    >
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
              className="w-[400px] bg-[#464C71] rounded-md text-white font-semibold mb-[30px] p-3 shadow-md hover:shadow-2xl"
            >
              {data.info}
            </div>
          ))}
        </div>
        <div className="w-2/3 ml-72 justify- mt-20">
          <button className="bg-red text-white p-2 px-12 rounded-tr-xl rounded-bl-xl">
            Message Me
          </button>
        </div>
      </div>
    </form>
  );
}

{
  /* 
          <div className="w-2/3 ml-20 ">
            <label htmlFor="email" className="ml-20 mr-2 text-white">
              Email:
            </label>
            <input
              className="border-2 border-white hover:border-black"
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

            <label htmlFor="name" className="ml-20 mr-2 text-white">
              Full name:
            </label>
            <input
              className="border-2 border-white hover:border-black"
              id="name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name ? (
              <p className="text-red">{errors.name.message}</p>
            ) : null}
            <button>Submit</button>
          </div> */
}
