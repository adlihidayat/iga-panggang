import React from "react";
import MenuItem from "../_components/menuItem";

function MenuShow({ menuType }: any) {
  const data = require("../../foodData.json");
  return (
    <div
      className={`${
        menuType === "snack" && "xl:pb-60"
      } flex justify-center w-screen pt-32 md:pt-40 pb-20`}
    >
      <div className="grid grid-cols-2 gap-y-16 md:gap-y-20 xl:gap-y-24 w-[90%] max-w-[350px] sm:max-w-none sm:w-[350px] md:w-[680px] xl:w-[1090px] gap-x-5 xl:gap-x-10 md:grid-cols-3 xl:grid-cols-4">
        {menuType === "all" &&
          data.map((e: any) => {
            return <MenuItem key={e.name} data={e} />;
          })}
        {menuType !== "all" &&
          data
            .filter((e: any) => e.type === menuType)
            .map((e: any) => {
              return <MenuItem key={e.name} data={e} />;
            })}
      </div>
    </div>
  );
}

export default MenuShow;
