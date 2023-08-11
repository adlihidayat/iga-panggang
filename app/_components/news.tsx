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
    <>
      <div className="hidden xl:block">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={true}
          mousewheel={true}
          modules={[Navigation, Pagination, Keyboard]}
          className=" w-[400px] h-[225px] xl:w-[1200px] xl:h-[675px] mt-40"
        >
          <SwiperSlide className="">
            <Image
              src={"/news/poster2.jpg"}
              alt=""
              fill
              className="object-cover rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              src={"/news/poster1.jpg"}
              alt=""
              fill
              className="object-cover rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              src={"/news/poster3.jpg"}
              alt=""
              fill
              className="object-cover rounded-xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="xl:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={true}
          mousewheel={true}
          modules={[Navigation, Pagination, Keyboard]}
          className="w-[340px] h-[453px] sm:w-[600px] sm:h-[800px] xl:w-[1200px] xl:h-[675px] mt-40"
        >
          <SwiperSlide className="">
            <Image
              src={"/news/posterM2.jpg"}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              src={"/news/posterM1.jpg"}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              src={"/news/posterM3.jpg"}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default News;
