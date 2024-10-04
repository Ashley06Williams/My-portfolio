import Link from "next/link";
import React from "react";

const menuItems = [
  {
    name: "Home",
    slug: "/",
    id: 1,
  },
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

export default function HeaderSection() {
  return (
    <div className=" max-w-[1200px] ">
      <nav className="flex justify-between pt-4 min-w-[500px] sm:min-w-[1200px] fixed">
        <Link href="/" className="text-white font-extrabold ">
          A<span className="text-red">sh</span>ley
        </Link>
        <div className="space-x-6">
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
