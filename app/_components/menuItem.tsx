import Image from "next/image";
import React from "react";
import Link from "next/link";

function MenuItem({ data }: any) {
  return (
    <Link
      href={`/menu/${data.number}`}
      className="duration-300 w-40 md:w-52 md:hover:w-[220px] md:hover:-translate-x-1 xl:w-60 xl:hover:w-[252px]  md:hover:-translate-y-3 relative font-poppins drop-shadow-[0_0px_10px_rgba(200,200,0,0.25)]"
    >
      {data.title !== "none" && (
        <div className=" w-[100%] bg-[#fb4242] h-20 absolute -top-11 xl:-top-[50px] pb-9 xl:pb-7 flex items-center justify-center rounded-t-xl space-x-2 md:space-x-4">
          <div className=" w-4 h-4 bg-whit relative animate-shake">
            <Image
              src={
                data.title === "BEST SELLER!"
                  ? "/menu/title/thumb.svg"
                  : "/menu/title/discount.svg"
              }
              fill
              alt=""
              className="rounded-t-xl"
            />
          </div>
          <p className=" text-white font-semibold mt-1 md:mt-0 animate-shine">
            {data.title}
          </p>
        </div>
      )}
      <div className="relative borde xl:boder-2 rounded-2xl border-[#282828] border-solid">
        <div className=" z-10 w-[100%] h-40 md:h-48 xl:h-56 rounded-t-xl relative">
          <Image
            src={data.image}
            fill
            alt=""
            className="rounded-t-xl object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className=" text-white bg-[#292929] w-[100%] h-28 md:h-32 rounded-b-xl flex flex-col items-center justify-center space-y-2">
          <p className=" font-bold text-base xl:text-xl w-[90%] text-center">
            {data.name}
          </p>
          <p className=" font-semibold text-sm xl:text-base text-[#f9cd94]">
            {data.multiplePrice
              ? `${data.price[0]} ~ ${data.price[1]}`
              : data.price}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MenuItem;
