"use client";
// "@ts-expect-error"
import { sendEmail } from "@/actions";
import { log } from "console";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";

type PopupProps = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormDataType = {
  name: string;
  email: string;
  message: string;
};

export default function Popup({ modal, setModal }: PopupProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [name, setName] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [email, setEmail] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  });

  // useEffect(() => {
  //   if (sendEmailState.success) {
  //   }
  // }, [sendEmailState]);

  const toggleModal = () => setModal(!modal);

  const onSubmit = async (data: FormDataType) => {
    // console.log(data.name);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      sendEmailAction(formData);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (errors) {
      console.error(errors);
      sendEmailState.error = "There was an error sending your email";
      alert("Error sending email");
      setLoading(false);
    } finally {
      reset();
      setLoading(false);
      setTimeout(() => setModal(!modal), 4000);
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{
    name: string;
    email: string;
    message: string;
  }>();

  // TODO:
  // - Add a success message above Submit button
  // - Clear out form inputs on success | do you need a success/error state?
  // - If error then show error message (format this for a user. don't just output the error message) above Submit button
  // - Do you want to close the modal on success? Think about using a delay for this
  // - Check input validations and look into validating on the server side

  return modal ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-white bg-opacity-10 flex flex-wrap justify-center items-center ">
        <div
          className="relative p-[32px] w-[100%] max-w-[350px] md:max-w-[640px] bg-[#181A29] rounded-lg scroll-py-12 
      "
        >
          <button
            onClick={toggleModal}
            className="absolute md:top-[16px] md:right-[16px] top-[3px] right-[3px]"
          >
            <img
              src="/cancel-01-stroke-rounded.svg"
              className="p-4 mt-6 "
              alt="exit button"
            />
          </button>

          <div className="flex flex-col">
            <h2 className="text-[30px] md:text-[45px] font-semibold mb-2 text-white">
              Let&apos;s get in <span className="text-red">touch</span>
            </h2>
            <p className="font-light text-[13px] md:text-sm text-white -mt-2">
              Looking forward to connecting with you
            </p>
            <div className="space-y-6 flex flex-col text-white">
              <input
                className="bg-[#2B2D41] mt-4 p-2 rounded-md "
                placeholder="Your Email"
                id="email"
                required
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
                  required: "Your name is required",
                })}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name ? (
                <p className="text-red">{errors.name.message}</p>
              ) : null}

              <textarea
                placeholder="Your Message"
                className="bg-[#2B2D41] p-2 h-48 rounded-md font-medium"
                id="messsage"
                {...register("message")}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex  justify-center">
              <button
                type="submit"
                className={`${
                  loading || sendEmailState.success ? "bg-[#4BB543]" : "bg-red"
                } 
                w-36 rounded-lg p-2 text-white font-medium mt-10`}
                disabled={loading || sendEmailState.success}
              >
                {loading
                  ? "Sending..."
                  : sendEmailState.success
                  ? "Sent!"
                  : sendEmailState.error
                  ? "Error"
                  : "Submit"}

                {/* {loading ? "Sending..." : "Submit"} */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  ) : null;
}
