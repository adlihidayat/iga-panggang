import Image from "next/image";
import React from "react";

function MenuItem({ name, desc, price, img }: any) {
  return (
    <div className="duration-300 w-40 md:w-52 md:hover:w-[220px] md:hover:-translate-x-1 xl:w-60 xl:hover:w-[252px]  md:hover:-translate-y-3 relative font-poppins drop-shadow-[0_0px_10px_rgba(200,200,0,0.25)]">
      <div className=" w-[100%] bg-[#fb4242] h-20 absolute -top-11 xl:-top-[50px] pt-3 xl:pt-4 flex items- justify-center rounded-t-xl">
        <p className=" text-white font-semibold">BEST SELLER!</p>
      </div>
      <div className="relative borde xl:boder-2 rounded-2xl border-[#282828] border-solid">
        {/* <div className=" absolute z-20 bottom-16 bg-white w-[100%] h-14 border-[2.5px] border-solid border-[#282828] rounded-[27px] flex items-center justify-center">
          <h3 className="  text-[15px] md:text-base xl:text-lg text-center font-bold leading-4 md:leading-4 w-[90%] md:w-48">
            {name}
          </h3>
        </div> */}
        <div className=" z-10 w-[100%] h-40 md:h-48 xl:h-56 rounded-t-xl relative">
          <Image src={img} fill alt="" className="rounded-t-xl" />
        </div>
        <div className=" text-white bg-[#292929] w-[100%] h-28 md:h-32 rounded-b-xl flex flex-col items-center justify-center space-y-3">
          <p className=" font-bold text-base xl:text-xl w-[90%] text-center">
            {name}
          </p>
          <p className=" font-semibold text-sm xl:text-base text-[#f9cd94]">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
