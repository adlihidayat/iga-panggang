import Image from "next/image";
import React from "react";

function Menu({ name, desc, price, img }: any) {
  // console.log(data[0].name);
  return (
    <div className="w-[100%] relative font-poppins h-52 xl:h-60 bg-white flex items-center justify-center xl:space-x-2 p-5 xl:p-0  rounded-xl drop-shadow-[0_0px_10px_rgba(152,130,11,0.25)]">
      <p className=" text-white bg-[#FF4343] font-semibold absolute top-3 -right-7 py-1 px-3 rotate-45">
        BEST SELLER
      </p>
      <div className="w-[60%] xl:w-[50%] flex flex-col space-y-3 mr-5">
        <h1 className=" font-bold text-xl xl:text-2xl">{name}</h1>
        <p className=" text-xs xl:text-sm text-[#848484] font-semibold">
          {desc}
        </p>
        <p className="xl:text-lg font-bold">Rp. {price}</p>
      </div>
      <div className="w-28 h-28 relative">
        <div className="absolute top-0 -right-1 w-[100%] h-[100%] rounded-full bg-[#DEF203]"></div>
        <div className="absolute w-28 h-28 top-2 -left-1 overflow-hidden">
          <Image
            src={img}
            alt="poto menu"
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className=" object-contain rounded-full "
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
