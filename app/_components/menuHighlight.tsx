import React from "react";
import MenuItem from "./menuItem";
import Link from "next/link";

function MenuHighlight() {
  const data = require("../../foodData.json");
  return (
    <div className=" w-screen  py-32 xl:pt-52 flex flex-col items-center justify-center space-y-10">
      <div className="grid grid-cols-2 gap-y-16 md:gap-y-20 xl:gap-y-24 w-[90%] max-w-[350px] sm:max-w-none sm:w-[350px] md:w-[680px] xl:w-[1090px] gap-x-5 xl:gap-x-10 md:grid-cols-3 xl:grid-cols-4">
        <MenuItem
          name={data[0].name}
          price={data[0].price}
          img={data[0].image}
        />
        <MenuItem
          name={data[1].name}
          price={data[1].price}
          img={data[1].image}
        />
        <MenuItem
          name={data[2].name}
          price={data[2].price}
          img={data[2].image}
        />
        <MenuItem
          name={data[3].name}
          price={data[3].price}
          img={data[3].image}
        />
      </div>
      <Link
        href={"/menu"}
        className=" text-slate-600 text-lg xl:text-xl underline"
      >
        see more &gt;
      </Link>
    </div>
  );
}

export default MenuHighlight;
