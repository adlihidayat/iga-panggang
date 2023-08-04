import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className=" bg-[#2C2C2C] w-screen h-[400px] md:h-[250px] flex flex-col md:flex-row md:justify-between md:px-20 items-center justify-center space-y-14 text-white font-poppins ">
      <div className="flex flex-col items-center md:items-start space-y-4">
        <div className=" flex flex-col md:flex-row md:space-x-3 items-center  space-y-2 ">
          <div className="w-14 h-14  relative">
            <Image
              src="/icon.png"
              alt="icon"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h1 className=" text-lg font-semibold w-40 md:w-36  text-center md:text-left leading-7 md:leading-5">
            IGA PANGGANG WAK BUDI
          </h1>
        </div>
        <div className="flex space-x-5">
          <div className="w-7 h-7  relative">
            <Image src="/social-media/instagram.svg" alt="" fill />
          </div>
          <div className="w-7 h-7  relative">
            <Image src="/social-media/facebook.svg" alt="" fill />
          </div>
          <div className="w-7 h-7  relative">
            <Image src="/social-media/email.svg" alt="" fill />
          </div>
        </div>
      </div>
      <div className=" text-center md:text-right text-sm md:pb-10">
        <h1 className="mb-3 text-[17px] font-semibold">Hubungi Kami</h1>
        <p className="">(+62) 80332160xxx </p>
        <p className="">customersupport@igabudi.co.id</p>
      </div>
    </footer>
  );
}

export default Footer;
