"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex text-2xl">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regualar-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-green-50"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <div onClick={handleNav} className="block sm:hidden z-10 ">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <div
        className={
          nav
            ? 
              "sm:hidden fixed top-0 right-0 w-1/2 h-full bg-white text-center py-20 ease-in-out duration-300  "
            : "sm:hidden fixed top-0 right-[-100%] w-1/2 h-full bg-white text-center ease-in-out duration-300"
        }
      >
        <ul className="text-2xl p-1 ">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regualar-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-green-50"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
