import Image from "next/image";
import React from "react";

function Service() {
  return (
    <div className="  font-poppins w-screen   flex flex-col md:space-y-10 items-center justify-center py-0 md:py-10">
      <h1 className=" ml-[15%] md:ml-0 text-3xl font-semibold w-[90vw] md:text-center">
        Our Service
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-3 xl:space-x-0 -space-y-5 md:space-y-0">
        <div className="md:flex-col md:text-center md:space-x-0 md:space-y-5 w-[90vw]md:w-[200px] h-[150px] md:h-auto px-5  flex items-center space-x-5">
          <div className="w-20 xl:w-52 h-20 xl:h-52 relative">
            <Image
              className=" fill-[#D43A3A]"
              src="/service/delivery.svg"
              alt="delivery"
              fill
            />
          </div>
          <div className=" max-w-[200px] xl:max-w-[240px]">
            <h1 className=" text-xl xl:text-2xl font-semibold md:mb-3">
              Delivery
            </h1>
            <p className=" text-xs xl:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. iciendis
              liqu magni
            </p>
          </div>
        </div>
        <div className="md:flex-col md:text-center md:space-x-0 md:space-y-5 w-[90vw]md:w-[200px] h-[150px] md:h-auto px-5  flex items-center space-x-5">
          <div className="w-20 xl:w-36 h-20 xl:h-52 relative">
            <Image
              className=" fill-[#D43A3A]"
              src="/service/dine-in.svg"
              alt="delivery"
              fill
            />
          </div>
          <div className=" max-w-[200px] xl:max-w-[240px]">
            <h1 className=" text-xl xl:text-2xl font-semibold md:mb-3">
              Dine-in
            </h1>
            <p className=" text-xs xl:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. iciendis
              liqu magni
            </p>
          </div>
        </div>
        <div className="md:flex-col md:text-center md:space-x-0 md:space-y-5 w-[90vw]md:w-[200px] h-[150px] md:h-auto px-5  flex items-center space-x-5">
          <div className="w-20 xl:w-32 h-20 xl:h-52 relative">
            <Image
              className=" fill-[#D43A3A]"
              src="/service/restroom.svg"
              alt="delivery"
              fill
            />
          </div>
          <div className=" max-w-[200px] xl:max-w-[240px]">
            <h1 className=" text-xl xl:text-2xl font-semibold md:mb-3">
              Restroom
            </h1>
            <p className=" text-xs xl:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. iciendis
              liqu magni
            </p>
          </div>
        </div>
        <div className="md:flex-col md:text-center md:space-x-0 md:space-y-5 w-[90vw]md:w-[200px] h-[150px] md:h-auto px-5  flex items-center space-x-5">
          <div className="w-20 xl:w-44 h-20 xl:h-52 relative">
            <Image
              className=" fill-[#D43A3A]"
              src="/service/musholla.svg"
              alt="delivery"
              fill
            />
          </div>
          <div className=" max-w-[200px] xl:max-w-[240px]">
            <h1 className=" text-xl xl:text-2xl font-semibold md:mb-3">
              Musholla
            </h1>
            <p className=" text-xs xl:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. iciendis
              liqu magni
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
