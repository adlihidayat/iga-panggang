import DownloadApp from "./_components/downloadApp";
import News from "./_components/news";
import Review from "./_components/review";
import Service from "./_components/service";
import MenuHighlight from "./_components/menuHighlight";

export default function Home() {
  return (
    <div className=" overflow-hidden pb-5 relative bg-[#fffcf9]">
      <News />
      <MenuHighlight />
      <Service />
      <Review />
      <DownloadApp />
    </div>
  );
}
