import React from "react";
import Link from "next/link";

export default function NavLink({ href, title }) {
  return (
    <Link
      href={href}
      className="block text-white hover:text-red py-2 pl-3 pr-4"
    >
      {title}
    </Link>
  );
}
