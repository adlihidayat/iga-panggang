"use client";
import React, { useState } from "react";
import Nav from "../_components/nav";
import MenuItem from "../_components/menuItem";
import Footer from "../_components/footer";
import MenuType from "../_components/menuType";

function usePage() {
  const data = require("../../foodData.json");
  const [menuType, setMenuType] = useState("all");

  return (
    <div className="overflow-x-hidden font-roboto">
      <h1 className=" mt-40 text-center text-3xl font-semibold">MENU</h1>
      <MenuType menuType={menuType} setMenuType={setMenuType} />
      <div
        className={`${
          menuType === "snack" && "xl:pb-60"
        } flex justify-center w-screen py-20`}
      >
        <div className=" grid grid-cols-2 gap-y-5 md:gap-y-10 xl:gap-y-16 w-[90%] max-w-[350px] sm:max-w-none sm:w-[350px] md:w-[750px] xl:w-[1350px] gap-x-5 md:gap-x-10 xl:gap-x-16 md:grid-cols-2 xl:grid-cols-3">
          {menuType === "all" &&
            data.map((e: any) => {
              return (
                <MenuItem
                  key={e.name}
                  name={e.name}
                  desc={e.decription}
                  price={e.price}
                  img={e.image}
                />
              );
            })}
          {menuType !== "all" &&
            data
              .filter((e: any) => e.type === menuType)
              .map((e: any) => {
                return (
                  <MenuItem
                    key={e.name}
                    name={e.name}
                    desc={e.decription}
                    price={e.price}
                    img={e.image}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default usePage;
