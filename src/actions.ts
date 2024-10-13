"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface State {
  error: string | null
  success: boolean
}

export const sendEmail = async (name: string, email: string, message: string) => {

  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ashley@waterfalldigital.co.za",
      subject: "New Contact Form Submission",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });
    console.log(response);
    return {
      error: null,
      success: true
    }
  } catch (error) {
    console.error(error);
    return {
      error: (error as Error).message,
      success: false
    }
  }
};
export default sendEmail;
