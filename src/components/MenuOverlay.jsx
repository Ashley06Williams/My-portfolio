import React from "react";
import NavLink from "./navLinks";

export default function MenuOverlay({ links }) {
  return (
    <ul className="absolute top-[60px] right-4 flex flex-col items-end space-y-4 p-4 rounded-md bg-blueGrey-dark">
      {links.map((link) => (
        <li key={link.id}>
          <NavLink href={link.slug} title={link.name} />
        </li>
      ))}
    </ul>
  );
}
