import React from "react";
import Link from "next/link";

export default function NavLink({ href, title }) {
  return (
    <Link
      href={href}
      className="relative block text-white hover:text-red py-2 pl-3 pr-4 group"
    >
      <span className="relative z-10">{title}</span>
      <span className="absolute left-3 right-4 bottom-1 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></span>
    </Link>
  );
}
