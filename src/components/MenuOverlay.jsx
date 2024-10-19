import React from "react";
import NavLink from "./navLinks";

export default function MenuOverlay({ links }) {
  return (
    <ul className="flex flex-col items-center ">
      {links.map((link) => (
        <li key={link.id}>
          <NavLink href={link.slug} title={link.name} />
        </li>
      ))}
    </ul>
  );
}
