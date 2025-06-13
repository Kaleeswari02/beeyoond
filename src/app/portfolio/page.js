
"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./portfolio.module.css";

const portfolioItems = [
  {
    title: "Snow Skate Stimulator Game",
    description:
      "An exhilarating snow skate simulator that blends physical movement with immersive winter environments. Players glide and perform tricks on snow-covered landscapes, offering a thrilling and engaging experience.",
    image: "/assets/images/snow-bg.png",
    thumb: "/assets/images/snow.png",
  },
  {
    title: "Mountain Runner",
    description: "An exhilarating snow skate simulator that blends physical movement with immersive winter environments. Players glide and perform tricks on snow-covered landscapes, offering a thrilling and engaging experience.",
    image: "/assets/images/run-bg.png",
    thumb: "/assets/images/run.png",
  },
  {
    title: "Cycling VR Challenge",
    description: "An exhilarating snow skate simulator that blends physical movement with immersive winter environments. Players glide and perform tricks on snow-covered landscapes, offering a thrilling and engaging experience.",
    image: "/assets/images/cycle-bg.png",
    thumb: "/assets/images/cycle.png",
  },
  {
    title: "Virtual Multiplayer Track",
    description: "An exhilarating snow skate simulator that blends physical movement with immersive winter environments. Players glide and perform tricks on snow-covered landscapes, offering a thrilling and engaging experience.",
    image: "/assets/images/game-bg.png",
    thumb: "/assets/images/game.png",
  },
];

const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className={styles.arrowRight}>
    <img src="/assets/images/right-arr.png" alt="Next" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className={styles.arrowLeft}>
    <img src="/assets/images/left-arr.png" alt="Previous" />
  </div>
);

export default function Portfolio() {
  const bgSliderRef = useRef();
  const cardSliderRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);

  const syncSlide = (index) => {
    setActiveSlide(index);
    bgSliderRef.current?.slickGoTo(index);
    cardSliderRef.current?.slickGoTo(index);
  };

  const bgSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
        autoplay: true,

     autoplaySpeed: 3000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setActiveSlide(next),
  };
const cardSettings = {
  dots: false,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000, // smoother
  slidesToShow: 4,
  slidesToScroll: 1,
  beforeChange: (_, next) => syncSlide(next),
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ],
};


  return (
    <section className={`container-fluid ${styles.portfolioSection}`} id="portfolio">
      <div className={styles.bgCarousel}>
        <Slider ref={bgSliderRef} {...bgSettings}>
          {portfolioItems.map((item, index) => (
            <div className={styles.bgSlide} key={index}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.backgroundImage}
              />
              <div className={styles.overlayContent}>
                <h2 className={styles.title}>OUR PORTFOLIO</h2>
                <h4 className={styles.gameTitle}>{item.title}</h4>
                <p className={styles.description}>{item.description}</p>
                <button className={styles.enquireBtn}>Enquire</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className={`${styles.cardCarousel} `}>
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-2"></div>
          <div className="col-xl-10 col-lg-10 col-md-10 col-12 mt-5">
            <div className={styles.cardList}>
              <Slider {...cardSettings} ref={cardSliderRef}>
                {portfolioItems.map((item, index) => (
                  <div key={index} className={`${styles.cardItem}`}>

                    <div
                      className={`${styles.cardInner} ${activeSlide === index ? styles.activeCard : ""}`}
                      onClick={() => syncSlide(index)}
                      onMouseEnter={() => syncSlide(index)}

                    >
                      <img
                        src={item.thumb}
                        alt={item.title}
                        className={styles.thumbImage}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}