import * as React from "react";

type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
  email,
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>Message: {message}</p>
    <p>from: {email}</p>
  </div>
);
