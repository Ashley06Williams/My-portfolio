import React from "react";

export default function CardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap justify-center items-center space-y-6 mx-auto ">
      {children}
    </div>
  );
}
