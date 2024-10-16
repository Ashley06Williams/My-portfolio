"use client";
import { Button, Navbar } from "flowbite-react";
import NavLink from "./navLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

import React, { useState } from "react";

const menuItems = [
  {
    name: "About",
    slug: "#about",
    id: 2,
  },
  {
    name: "Work",
    slug: "#work",
    id: 3,
  },
  {
    name: "Contact",
    slug: "#contact",
    id: 4,
  },
];

// Function checks whether user has clicked on logo and scrolls smoothly to home instead of refreshing
export const handleHomeClick = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function HeaderSection() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="w-full px-4 max-w-[1200px]  fixed backdrop-blur-[11px] bg-blueGrey-dark bg-opacity-20 flex flex-wrap justify-between md:space-x-0 mx-auto pt-4  items-center  pb-4 ">
      <a
        href="/"
        onClick={handleHomeClick}
        className="text-white font-extrabold mr-8 md:mr-0 "
      >
        A<span className="text-red">sh</span>ley
      </a>
      <div className="MOBILE-MENU block md:hidden ">
        {!navOpen ? (
          <button
            onClick={() => setNavOpen(true)}
            className="flex items-center  px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-red hover:border-red"
          >
            <Bars3Icon className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={() => setNavOpen(false)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-red hover:border-red"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="MENU space-x-4 md:space-x-6 hidden md:block">
        <ul className="flex flex-col md:flex-row p-4 sm:p-0">
          {menuItems.map((menuItem) => (
            <li key={menuItem.id}>
              <NavLink href={menuItem.slug} title={menuItem.name} />
            </li>
          ))}
        </ul>
      </div>
      {navOpen ? <MenuOverlay links={menuItems} /> : null}
    </nav>
  );
}
