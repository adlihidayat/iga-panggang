"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

function Nav() {
  const [navActive, setNavActive] = useState(false);
  let pagePos = 1;

  return (
    <header className=" w-screen h-[85px] font-roboto bg-slate-200 fixed top-0 z-50 flex flex-col ">
      <div className=" w-screen h-2 bg-[#FFEA2D]"></div>
      <div className="bg-[#2C2C2C] flex-1 flex items-center justify-between px-7 md:px-[10%]">
        <div className="w-[45px] h-[45px] relative">
          <Image
            src="/icon.png"
            alt="icon"
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div
          className="flex flex-col space-y-1 md:hidden"
          onClick={() => setNavActive(!navActive)}
        >
          <div className=" w-6 h-[3px] bg-[#FFEA2D] rounded-full"></div>
          <div className=" w-6 h-[3px] bg-[#FFEA2D] rounded-full"></div>
          <div className=" w-6 h-[3px] bg-[#FFEA2D] rounded-full"></div>
        </div>
        <nav
          className={`${
            navActive ? "flex flex-col" : "hidden"
          }  md:flex md:flex-row absolute md:static duration-500 items-center top-20 right-5 md:space-x-6 text-[#D6D6D6] md:text-sm`}
        >
          <Link
            href={"/"}
            className={`${
              pagePos === 1 ? `text-[#FFEA2D]` : "text-[#969696]"
            } hover:text-white duration-500  bg-[#2C2C2C] w-[100%] px-3 py-3 text-center `}
          >
            HOME
          </Link>
          <Link
            href={"/menu"}
            className={`${
              pagePos === 2 ? `text-[#FFEA2D]` : "text-[#969696]"
            } hover:text-white duration-500  bg-[#2C2C2C] w-[100%] px-3 py-3 text-center `}
          >
            MENU
          </Link>
          <Link
            href={"/location"}
            className={`${
              pagePos === 3 ? `text-[#FFEA2D]` : "text-[#969696]"
            } hover:text-white duration-500  bg-[#2C2C2C] w-[100%] px-3 py-3 text-center `}
          >
            LOCATION
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
