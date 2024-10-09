"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

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
  return (
    <div className=" max-w-[1200px] ">
      <nav className="flex justify-between pt-4 min-w-[500px] sm:min-w-[1200px] fixed backdrop-blur-[2px]  pb-4">
        <a
          href="/"
          onClick={handleHomeClick}
          className="text-white font-extrabold "
        >
          A<span className="text-red">sh</span>ley
        </a>
        <div className="space-x-6">
          <Link
            href="/"
            onClick={handleHomeClick}
            className="text-white hover:text-red"
          >
            Home
          </Link>
          {menuItems.map((menuItem) => (
            <Link
              href={menuItem.slug}
              key={menuItem.id}
              className="text-white hover:text-red"
            >
              {menuItem.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
