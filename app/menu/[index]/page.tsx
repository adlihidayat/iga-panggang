"use client";
import React, { useState } from "react";
import MenuType from "../../_components/menuType";
import MenuShow from "../../_components/menuShow";
import MenuDetails from "@/app/_components/menuDetails";

function Page({ params }: any) {
  const [menuType, setMenuType] = useState("all");
  // console.log(typeof Number(params.index));
  return (
    <div className="overflow-x-hidden font-roboto mt-[85px]">
      <MenuDetails index={Number(params.index)} />
      <h1 className="text-center text-3xl font-semibold">MENU</h1>
      <MenuType menuType={menuType} setMenuType={setMenuType} />
      <MenuShow menuType={menuType} />
    </div>
  );
}

export default Page;
