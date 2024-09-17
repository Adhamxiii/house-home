"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";

export const navLinks = [
  { id: 1, url: "#", label: "Home" },
  { id: 2, url: "#", label: "Listing" },
  { id: 3, url: "#", label: "Properties" },
  { id: 4, url: "#", label: "Blog" },
  { id: 5, url: "#", label: "Contact" },
];

const Nav = ({ handleToggleNav }: { handleToggleNav: () => void }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-[100] h-[10vh] w-full transition-all duration-200 ${navBg ? "bg-gray-800" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-full w-[clamp(80%,90%,95%)] items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex size-7 items-center justify-center rounded-full bg-rose-700 text-white md:size-10">
            <FaHouse />
            <FaHome />
          </div>
          <h1 className="text-sm font-bold tracking-tight text-white sm:text-base md:text-xl">
            HouseHome
          </h1>
        </div>

        <div className="hidden items-center space-x-14 text-white lg:flex">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="font-medium hover:text-yellow-300">{link.label}</p>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex cursor-pointer items-center space-x-2 text-white transition-all duration-200 hover:text-red-400">
            <FaUserCircle className="size-5" />
            <p className="text-xs font-bold sm:text-base">Login / Register</p>
          </div>
        </div>

        <HiBars3BottomRight
          className="size-6 cursor-pointer text-3xl text-white sm:size-8 lg:hidden"
          onClick={handleToggleNav}
        />
      </div>
    </div>
  );
};

export default Nav;
