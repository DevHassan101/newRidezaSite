import HomeAbout from "./components/home/HomeAbout";
import HeroBanner from "./components/home/HomeBanner";
import HomeServices from "./components/home/HomeServices";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <HomeServices />
      <HomeAbout />
    </>
  );
}
