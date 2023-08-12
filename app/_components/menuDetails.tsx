import React from "react";

function MenuDetails({ index }: any) {
  const data = require("../../foodData.json");
  return (
    <div className="  flex flex-col items-center font-poppins space-y-10 pb-24">
      <div className=" w-52 h-[350px] bg-[#2D2D2D] relative">
        <div className=" bg-yellow-300 absolute w-72 h-72 rounded-full bottom-5 -right-10"></div>
      </div>
      <div className=" w-[90%] flex flex-col space-y-2">
        <div className=" bg-[#FF4343] inline-block text-white w-32 text-center py-1 rounded-full font-semibold text-sm">
          <p className=" animate-shine">BEST SELLER!</p>
        </div>
        <div className="flex space-x-3 pt-2">
          <div className=" w-6 h-6 bg-[#EDC800]"></div>
          <div className=" w-6 h-6 bg-[#EDC800]"></div>
          <div className=" w-6 h-6 bg-[#EDC800]"></div>
          <div className=" w-6 h-6 bg-[#EDC800]"></div>
          <div className=" w-6 h-6 bg-slate-200"></div>
        </div>
        <h2 className=" font-bold text-2xl">BLACKPEPPER APP GITCHU</h2>
        <div className="flex space-x-3 text-sm">
          <button className=" bg-slate-300 py-1 px-3 ">250 gr</button>
          <button className="  py-1 px-3 border-[1.5px] border-solid border-black">
            500 gr
          </button>
        </div>
        <p className=" text-[#9a9a9a] text-sm w-[85%] font-semibold">
          Perpaduan antara daging pilihan kami dengan sauce bbq yang nikmat
        </p>
        <p className=" font-semibold text-[#B79B05]">Rp. 65.000</p>
        <button className=" text-white bg-[#2D2D2D] text-sm font-semibold py-[6px] w-28">
          ORDER NOW!
        </button>
      </div>
    </div>
  );
}

export default MenuDetails;
