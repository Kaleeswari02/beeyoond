import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header/page";
import Banner from "./home/page";
import About from "./about/page";

export default function Home() {
  return (
  <>
  <Header/>
  <Banner/>
  <About/>
  </>
  );
}
