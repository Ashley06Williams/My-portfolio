import React from "react";

export default function CardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex md:flex-row flex-col flex-wrap justify-between items-center  mx-auto ">
      {children}
    </div>
  );
}
