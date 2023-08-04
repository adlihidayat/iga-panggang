import Link from "next/link";
import DownloadApp from "./_components/downloadApp";
import Footer from "./_components/footer";
import Menu from "./_components/menu";
import Nav from "./_components/nav";
import News from "./_components/news";
import Review from "./_components/review";
import Service from "./_components/service";
// import { foodData as data } from "../foodData";

export default function Home() {
  const data = require("../foodData.json");
  return (
    <div className=" overflow-hidden pb-5 relative">
      <News />
      {/* <div className="py-20 flex flex-col items-end"> */}
      <div className=" w-screen flex flex-col items-center pb-20 pt-10 md:pt-20 space-y-5 xl:space-y-0">
        <div className=" md:py-10 grid grid-cols-1 gap-y-10 w-[90%] max-w-[350px] sm:max-w-none sm:w-[350px] md:w-[750px] xl:w-[1350px] gap-x-10 md:grid-cols-2 xl:grid-cols-3">
          <Menu
            name={data[0].name}
            desc={data[0].decription}
            price={data[0].price}
            img={"/menu/list/iga-bbq.jpg"}
          />
          <Menu
            name={data[1].name}
            desc={data[1].decription}
            price={data[1].price}
            img={"/menu/list/iga-blackpepper.jpg"}
          />
          <Menu
            name={data[2].name}
            desc={data[2].decription}
            price={data[2].price}
            img={"/menu/list/tongseng.jpg"}
          />
        </div>
        <Link href={"/menu"} className=" text-slate-600 text-lg underline">
          see more &gt;
        </Link>
      </div>
      {/* </div> */}
      <Service />
      <Review />
      <DownloadApp />
    </div>
  );
}
