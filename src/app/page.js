import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header/page";
import Banner from "./home/page";
import About from "./about/page";
import Videosection from "./videosection/page";
import Stats from "./stats/page";
import VisionMission from "./visionmision/page";
import Portfolio from "./portfolio/page";

export default function Home() {
  return (
  <>
  <Header/>
  <Banner/>
  <About/>
  <Stats/>
  <Videosection/>
  <VisionMission/>
  <Portfolio/>
  </>
  );
}
