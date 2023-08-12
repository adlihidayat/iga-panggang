import React from "react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  menuType: string;
  setMenuType: (value: string | ((prevVar: string) => string)) => void;
};

function MenuType({ menuType, setMenuType }: Props) {
  return (
    <div>
      <div className=" w-screen flex justify-center space-x-3 mt-10 text-sm font-extrabold">
        <div
          className={`${
            menuType === "all"
              ? "bg-[#F4DE19]"
              : " bg-[#322F2F] cursor-pointer hover:bg-[#505050ee]"
          } text-white   duration-500 rounded-lg pt-3 pb-2 w-[70px]  flex flex-col items-center justify-end space-y-2`}
          onClick={() => setMenuType("all")}
        >
          <div className=" w-6 h-6 relative">
            <Image
              src={"/menu/type/all.svg"}
              alt=""
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p>All</p>
        </div>
        <div
          className={`${
            menuType === "food"
              ? "bg-[#F4DE19] "
              : " bg-[#322F2F] cursor-pointer hover:bg-[#505050ee]"
          } text-white   duration-500 rounded-lg pt-3 pb-2 w-[70px]  flex flex-col items-center justify-end space-y-2`}
          onClick={() => setMenuType("food")}
        >
          <div className=" w-6 h-6 relative">
            <Image
              src={"/menu/type/food.svg"}
              alt=""
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p>Foods</p>
        </div>
        <div
          className={`${
            menuType === "drink"
              ? "bg-[#F4DE19] "
              : " bg-[#322F2F] cursor-pointer hover:bg-[#505050ee]"
          } text-white   duration-500 rounded-lg pt-3 pb-2 w-[70px]  flex flex-col items-center justify-end space-y-2`}
          onClick={() => setMenuType("drink")}
        >
          <div className=" w-6 h-6 relative">
            <Image
              src={"/menu/type/drink.svg"}
              alt=""
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p>Drinks</p>
        </div>
        <div
          className={`${
            menuType === "snack"
              ? "bg-[#F4DE19] "
              : " bg-[#322F2F] cursor-pointer hover:bg-[#505050ee]"
          } text-white  duration-500 rounded-lg pt-3 pb-2 w-[70px]  flex flex-col items-center justify-end space-y-2`}
          onClick={() => setMenuType("snack")}
        >
          <div className=" w-6 h-6 relative">
            <Image
              src={"/menu/type/snack.svg"}
              alt=""
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p>Snacks</p>
        </div>
      </div>
    </div>
  );
}

export default MenuType;
