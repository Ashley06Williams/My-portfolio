import React from "react";

export default function CardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between items-center space-x-20 mx-auto">
      {children}
    </div>
  );
}
