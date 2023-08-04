import Image from "next/image";
import React from "react";

function DownloadApp() {
  return (
    <div className=" w-screen h-[450px] flex flex-col lg:flex-row lg:justify-center font-nunitoSans">
      <div className=" flex-1 flex flex-col items-center justify-center space-y-7 ">
        <h1 className=" text-[30px] xl:text-[50px] font-extrabold w-[320px] xl:w-[540px] leading-8 xl:leading-none">
          Order now from Gojek & Grab
        </h1>
        <div className=" flex space-x-2 xl:space-x-10">
          <a
            href="https://apps.apple.com/us/app/gojek/id944875099"
            className=" py-3 xl:py-3 px-4 xl:px-7 rounded-xl bg-[#3F3F3F] flex justify-center items-center space-x-3 xl:space-x-5 text-white"
          >
            <div className="w-7 xl:w-12 h-7 xl:h-12 relative">
              <Image
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt=""
                src="/download/appstore.svg"
                className=" fill-blue-50"
              />
            </div>
            <div>
              <p className=" text-[11px] xl:text-[16px]">Download on the</p>
              <p className=" text-[15px] xl:text-[22px] font-extrabold">
                APP STORE
              </p>
            </div>
          </a>
          <a
            href="https://play.google.com/store/search?q=gojek&c=apps"
            className=" py-3 xl:py-3 px-4 xl:px-7 rounded-xl bg-[#3F3F3F] flex justify-center items-center space-x-3 xl:space-x-5 text-white"
          >
            <div className="w-7 xl:w-12 h-7 xl:h-12 relative">
              <Image
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt=""
                src="/download/playstore.svg"
                className=" fill-blue-50"
              />
            </div>
            <div>
              <p className=" text-[11px] xl:text-[16px]">Download on the</p>
              <p className=" text-[15px] xl:text-[22px] font-extrabold">
                PLAY STORE
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="relative h-40 w-screen lg:w-[600px] xl:w-[800px] flex items-end justify-center space-x-3">
        <div className="absolute -bottom-52 lg:-bottom-[600px] xl:-bottom-[750px]  right-[51%] w-40 lg:w-60 xl:w-72 h-[350px] border-x-[6px] border-t-[20px] border-black lg:h-[500px] xl:h-[700px] bg-black rounded-t-xl ">
          <Image
            src={"/download/gojek.jpg"}
            alt="gojek"
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute -bottom-40 lg:-bottom-[500px] xl:-bottom-[600px]  left-[49%] w-40 lg:w-60 xl:w-72 h-[350px] border-x-[6px] border-t-[20px] border-black lg:h-[500px] xl:h-[700px] bg-black rounded-t-xl ">
          <Image
            src={"/download/gojek.jpg"}
            alt="gojek"
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
