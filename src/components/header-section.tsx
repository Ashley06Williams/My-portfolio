"use client";

import NavLink from "./navLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import React, { useState } from "react";

const menuItems = [
  {
    name: "Skills",
    slug: "#skills",
    id: 2,
  },
  {
    name: "Portfolio",
    slug: "#portfolio",
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
    <nav className="w-full fixed backdrop-blur-[11px] bg-blueGrey-dark  flex flex-wrap justify-center mx-auto py-8 items-center  z-50 px-4 md:px-0 ">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between w-full">
        <a
          href="/"
          onClick={handleHomeClick}
          className="text-white font-extrabold mr-8"
        >
          <Image src="/logo.svg" alt="Logo" width={140} height={140} /> 
        </a>
        <div className="MOBILE-MENU flex items-center gap-2 md:hidden">
          <a
            href="https://renderme.co.za/resume/fgYoJh9jBqalZGZpHmtpsYDgQg73"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold transition-colors duration-200 px-2 py-1 text-[14px] rounded-lg hover:text-red"
          >
            View my CV
          </a>
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

        <div className="MENU hidden md:block">
          <ul className="flex flex-row p-4 sm:p-0 gap-10 font-normal text-xl">
            {menuItems.map((menuItem) => (
              <li key={menuItem.id}>
                <NavLink href={menuItem.slug} title={menuItem.name} />
              </li>
            ))}
            <li className="flex justify-center items-center w-full rounded-full px-2 ml-4 border-2 border-red hover:bg-red transition-colors duration-200">
              <a
                href="https://renderme.co.za/resume/fgYoJh9jBqalZGZpHmtpsYDgQg73"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red font-normal px-3 py-1 hover:text-white  transition-colors duration-200"
              >
                RenderMe CV
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Display overlay when navOpen is true */}
      {navOpen && <MenuOverlay links={menuItems} />}
    </nav>
  );
}
