"use client";
import React, { useState } from "react";
import MenuType from "../_components/menuType";
import MenuShow from "../_components/menuShow";

function usePage() {
  const [menuType, setMenuType] = useState("all");

  return (
    <div className="overflow-x-hidden font-roboto ">
      <h1 className=" mt-40 text-center text-3xl font-semibold">MENU</h1>
      <MenuType menuType={menuType} setMenuType={setMenuType} />
      <MenuShow menuType={menuType} />
    </div>
  );
}

export default usePage;
