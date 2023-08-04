import React from "react";

function Review() {
  return (
    <div className=" w-screen h-[750px] md:h-[650px] bg-[#F2D900] mt-60 relative">
      <div className=" w-[82%] max-w-[600px]  bg-white shadow-xl rounded-2xl absolute -top-48 left-5 md:left-[14%] flex flex-col  space-y-5 p-5">
        <div className=" flex items-center space-x-3">
          <div className="w-7 h-7 rounded-full bg-slate-400"></div>
          <p className="xl:text-lg font-semibold tracking-widest">
            @fafafafafafa
          </p>
        </div>
        <p className=" text-sm xl:text-base">
          Bagiku, si <span className=" text-blue-500">@igapanggangpakedi</span>{" "}
          yg tempatnya agak tersembunyi di Jl. Turi II daerah Sei Sikambing D
          ini adalah salah satu hidden gem bagi para penggila steak di Medan
          kalo mrk mau ngedapetin olahan steak iga sapi panggang yg kuat di rasa
          & tekstur plus dgn harga yg terjangkau. Bayangin, porsi iga
          panggangnya yg setengah kilo cuma 99k nett! Ga heran banyak banget yg
          tukang makan & yg ngerti soal steak duduk makan di sini & mesennya
          sampe berpiring2! Soalnya kalo dipikir2 makan porsi segitu kalo di
          luaran udah kena berapa ya kan! Temen2 yg Chinese pun banyak yg duduk
          makan di sini kmren kuliat. <br /> <br />
          .....
        </p>
      </div>
      <div className=" w-[75%] max-w-[500px] bg-white shadow-xl p-5 rounded-xl absolute top-[330px] sm:top-[250px] md:top-[200px] xl:top-[230px] right-5 md:right-[14%] flex flex-col space-y-5">
        <div className=" flex items-center space-x-2">
          <div className="w-7 h-7 rounded-full bg-slate-400"></div>
          <p className="xl:text-lg font-semibold tracking-widest">
            @fufufufufu
          </p>
        </div>
        <p className=" text-sm xl:text-base">
          Lumayan enak... Iga panggang pak Edi, n si uwak ini saking nikmatnya
          sampai ngk sadar kalau dirinya aq foto, sorry ya wak{" "}
          <span className=" text-blue-500">Pramono Oke</span> :)
        </p>
      </div>
      <div className=" w-[75%] max-w-[400px] p-5 bg-white  absolute top-[550px] sm:top-[500px] md:top-[420px] rounded-xl left-5 md:left-[14%] shadow-xl flex flex-col space-y-5">
        <div className=" flex items-center space-x-2">
          <div className="w-7 h-7 rounded-full bg-slate-400"></div>
          <p className="xl:text-lg font-semibold tracking-widest">@fifififi</p>
        </div>
        <p className=" text-sm xl:text-base">
          Recommended ya kawan-kawan tempat nongkrong -- IGA PANGGANG PAK EDI --
        </p>
      </div>
    </div>
  );
}

export default Review;
