'use client'
import './video.css'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { Container, Modal, ModalBody } from 'reactstrap';
// import Image from 'next/image';
// import styles from './videoplay.module.css';
import { FiPlay } from 'react-icons/fi';
// need to add when video developed onClick={() => setModalOpen(true)}
export default function Videosection(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,           // transition speed (half a second) 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000   // time between slides (1 second)
      };
      const VideoPlay = () => {
        const [modalOpen, setModalOpen] = useState(false);
      }
    return (
        <>
            <div className='container-fluid video-carousel-bg '>
                <Slider {...settings}>
                    <div className='carousel-section'>
                        <div className="videoPlaySection">
                        <img src='/assets/images/videosectionim.png' alt="Desert Background" className="bgImage" />
                        <Container className="text-center position-relative z-1">
                            <div className="playCircle " > 
                            <FiPlay className="playIcon" />
                            <svg className="rotatingText" viewBox="0 0 100 100">
                            <defs>
                                <path id="circlePath"  d="M 50, 50   m -35, 0    a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                            </defs>
                            <text>
                                <textPath href="#circlePath">
                                {/* PLAY · PLAY · PLAY · PLAY · PLAY · PLAY */}
                                </textPath>
                            </text>
                            </svg>
                        </div>        

                            <h1 className="videoHeading mt-5">
                            WE MAKE IT REAL
                            </h1>
                            <p className="subText mt-xl-5 mt-lg-5 mt-md-5">
                            Together, let’s explore new worlds, tell unforgettable stories, and push the boundaries of what gaming can be.
                            </p>
                        </Container>
                        </div>
                    </div>
                    <div className='carousel-section'>
                        <div className="videoPlaySection">
                        <img src='/assets/images/videosectionim.png' alt="Desert Background" className="bgImage" />
                        <Container className="text-center position-relative z-1">
                            <div className="playCircle " >
                            <FiPlay className="playIcon" />
                            <svg className="rotatingText" viewBox="0 0 100 100">
                            <defs>
                                <path id="circlePath"  d="M 50, 50   m -35, 0    a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                            </defs>
                            <text>
                                <textPath href="#circlePath">
                                {/* PLAY · PLAY · PLAY · PLAY · PLAY · PLAY */}
                                </textPath>
                            </text>
                            </svg>
                        </div>        

                            <h1 className="videoHeading mt-5">
                            WE MAKE IT REAL
                            </h1>
                            <p className="subText mt-xl-5 mt-lg-5 mt-md-5">
                            Together, let’s explore new worlds, tell unforgettable stories, and push the boundaries of what gaming can be.
                            </p>
                        </Container>
                        </div>
                    </div>
                    <div className='carousel-section'>
                        <div className="videoPlaySection">
                        <img src='/assets/images/videosectionim.png' alt="Desert Background" className="bgImage" />
                        <Container className="text-center position-relative z-1">
                            <div className="playCircle ">
                            <FiPlay className="playIcon" />
                            <svg className="rotatingText" viewBox="0 0 100 100">
                            <defs>
                                <path id="circlePath"  d="M 50, 50   m -35, 0    a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                            </defs>
                            <text>
                                <textPath href="#circlePath">
                                {/* PLAY · PLAY · PLAY · PLAY · PLAY · PLAY */}
                                </textPath>
                            </text>
                            </svg>
                        </div>        

                            <h1 className="videoHeading mt-5">
                            WE MAKE IT REAL
                            </h1>
                            <p className="subText mt-xl-5 mt-lg-5 mt-md-5">
                            Together, let’s explore new worlds, tell unforgettable stories, and push the boundaries of what gaming can be.
                            </p>
                        </Container>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}