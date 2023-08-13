"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

function Nav() {
  const [navActive, setNavActive] = useState(false);
  const [pagePos, setPagePos] = useState(1);
  return (
    <header className=" w-screen h-[85px] font-roboto bg-slate-200 fixed top-0 z-50 flex flex-col ">
      <div className=" w-screen h-2 bg-[#2C2C2C]"></div>
      <div className="bg-[#F4DE19] flex-1 flex items-center justify-between px-12 md:px-[10%]">
        <a
          className="w-[30px] h-[35px] lg:w-[40px] lg:h-[45px] relative"
          href=""
        >
          <Image
            src="/iconNav.png"
            alt="icon"
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </a>
        <div
          className="flex flex-col space-y-1 md:hidden mt-2"
          onClick={() => setNavActive(!navActive)}
        >
          <div className=" w-7 h-[3.5px] bg-[#2C2C2C] rounded-full"></div>
          <div className=" w-7 h-[3.5px] bg-[#2C2C2C] rounded-full"></div>
          <div className=" w-7 h-[3.5px] bg-[#2C2C2C] rounded-full"></div>
        </div>
        <nav
          className={`${
            navActive ? "flex flex-col" : "hidden"
          }  md:flex md:flex-row absolute md:static duration-500 items-center top-[85px] right-5 md:space-x-6 text-[#D6D6D6] md:text-base md:font-medium`}
        >
          <Link
            onClick={() => {
              setPagePos(1);
              setNavActive(false);
            }}
            href={"/"}
            className={`${
              pagePos === 1 ? `md:text-[#969696]` : "md:text-black"
            } hover:text-gray-400 duration-500  w-[100%] px-3 py-3 text-center bg-[#2C2C2C] md:bg-transparent`}
          >
            HOME
          </Link>
          <Link
            onClick={() => {
              setPagePos(2);
              setNavActive(false);
            }}
            href={"/menu"}
            className={`${
              pagePos === 2 ? `md:text-[#969696]` : "md:text-black"
            } hover:text-gray-400 duration-500  w-[100%] px-3 py-3 text-center bg-[#2C2C2C] md:bg-transparent`}
          >
            MENU
          </Link>
          <Link
            onClick={() => {
              setPagePos(3);
              setNavActive(false);
            }}
            href={"/location"}
            className={`${
              pagePos === 3 ? `md:text-[#969696]` : "md:text-black"
            } hover:text-gray-400 duration-500  w-[100%] px-3 py-3 text-center bg-[#2C2C2C] md:bg-transparent`}
          >
            LOCATION
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
