"use client";

import NavLink from "./navLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

import React, { useState } from "react";

const menuItems = [
  {
    name: "Abilities",
    slug: "#ability",
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
    <nav className="w-full fixed backdrop-blur-[11px] bg-blueGrey-dark bg-opacity-35 flex flex-wrap justify-center mx-auto pt-4 items-center pb-4 z-50 px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between w-full">
        <a
          href="/"
          onClick={handleHomeClick}
          className="text-white font-extrabold mr-8"
        >
          CODEDBY<span className="text-red">ASH</span>
        </a>
        <div className="MOBILE-MENU block md:hidden">
          {!navOpen ? (
            <button
              onClick={() => setNavOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-red hover:border-red"
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

        <div className="MENU hidden md:block space-x-4 md:space-x-6">
          <ul className="flex flex-row p-4 sm:p-0">
            {menuItems.map((menuItem) => (
              <li key={menuItem.id}>
                <NavLink href={menuItem.slug} title={menuItem.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Display overlay when navOpen is true */}
      {navOpen && <MenuOverlay links={menuItems} />}
    </nav>
  );
}
