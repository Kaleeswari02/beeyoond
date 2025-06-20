import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header/page";
import Banner from "./home/page";
import About from "./about/page";
import Videosection from "./videosection/page";
import Stats from "./stats/page";
import VisionMission from "./visionmision/page";
import Testimonalsec from "./testimonal/page";
import AccordianFunction from "./accordian/page";
import Portfolio from "./portfolio/page";
import CareerSection from "./careerSection/page";
import Footer from "./footer/page";

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
  <Testimonalsec/>
  <AccordianFunction/>
  <CareerSection/>
  <Footer/>
  </>
  );
}
