"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

function News() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={true}
      mousewheel={true}
      modules={[Navigation, Pagination, Keyboard]}
      className="w-screen md:w-[99.9%] h-[400px] md:h-[850px] mt-[0px] md:mt-[60px] font-nunitoSans"
    >
      <SwiperSlide className=" bg-white w-screen h-screen">
        <div className=" flex items-center justify-center w-[100%] h-[100%]">
          <div className="w-[100%] h-[60%] md:h-[95%] relative">
            <Image
              src={"/news/poster1.svg"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className=" bg-white w-screen h-screen">
        <div className=" flex items-center justify-center w-[100%] h-[100%]">
          <div className="w-[100%] h-[60%] md:h-[95%] relative ">
            <Image
              src={"/news/poster2.png"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default News;
