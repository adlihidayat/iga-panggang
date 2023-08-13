import Image from "next/image";
import React, { useState } from "react";

function MenuDetails({ index }: any) {
  const data = require("../../foodData.json");
  const [size, setSize] = useState(0);

  return (
    <div className="  flex flex-col lg:flex-row lg:space-x-20 xl:space-x-32 md:justify-center items-center font-poppins space-y-10 pb-24">
      <div className=" w-52 xl:w-64 h-[350px] xl:h-[500px] bg-[#2D2D2D] relative">
        <div className=" bg-yellow-300 absolute w-72 h-72 xl:w-96 xl:h-96 rounded-full bottom-5 -right-10 xl:-right-16">
          <Image
            src={data[index].image}
            alt={data[index].name}
            fill
            className=" rounded-full"
          />
        </div>
      </div>
      <div className=" text-sm xl:text-base w-[90%] md:w-[50%] xl:w-[500px] flex flex-col space-y-2">
        {data[index].title !== "none" && (
          <div className=" bg-[#FF4343] inline-block text-white w-32 text-center py-1 rounded-full font-semibold">
            <p className=" animate-shine">{data[index].title}</p>
          </div>
        )}
        <div className="flex space-x-1 pt-2">
          <div className=" w-6 h-6 relative">
            <Image src={"/menu/star.svg"} alt="star" fill />
          </div>
          <div className=" w-6 h-6 relative">
            <Image src={"/menu/star.svg"} alt="star" fill />
          </div>
          <div className=" w-6 h-6 relative">
            <Image src={"/menu/star.svg"} alt="star" fill />
          </div>
          <div className=" w-6 h-6 relative">
            <Image src={"/menu/star.svg"} alt="star" fill />
          </div>
          <div className=" w-6 h-6 relative">
            <Image src={"/menu/star.svg"} alt="star" fill />
          </div>
        </div>
        <h2 className=" font-bold text-2xl xl:text-3xl">{data[index].name}</h2>
        {data[index].multiplePrice && (
          <div className="flex space-x-3">
            <button
              disabled={size === 0}
              onClick={() => setSize(0)}
              className="border-[1.5px] border-solid border-black py-1 px-3 hover:bg-slate-100 duration-300 disabled:bg-slate-300 disabled:border-0"
            >
              250 gr
            </button>
            <button
              className="border-[1.5px] border-solid border-black py-1 px-3 hover:bg-slate-100 duration-300 disabled:bg-slate-300 disabled:border-0"
              disabled={size === 1}
              onClick={() => setSize(1)}
            >
              500 gr
            </button>
          </div>
        )}
        <p className=" text-[#9a9a9a] w-[85%] xl:w-[100%] font-semibold">
          {data[index].decription}
        </p>
        <p className=" font-bold text-[#cb9247] text-base xl:text-lg">
          {data[index].multiplePrice
            ? data[index].price[size]
            : data[index].price}
        </p>
        <a
          href="https://play.google.com/store/search?q=gojek&c=apps"
          className=" text-white bg-[#2D2D2D] hover:bg-[#727272] duration-300 font-semibold py-[6px] w-28 xl:w-32 text-center"
        >
          ORDER NOW!
        </a>
      </div>
    </div>
  );
}

export default MenuDetails;
