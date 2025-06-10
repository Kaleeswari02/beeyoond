'use client'
import './video.css'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Videosection(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
            <div className='container-fluid video-carousel-bg'>
            <Slider {...settings}>
                <div className='carousel-section'>
                <img src="/assets/images/videosec.png" alt="" id='video-carousel'/>
                </div>
                <div className='carousel-section'>
                <img src="/assets/images/videosec.png" alt="" id='video-carousel'/>
                </div>
                <div className='carousel-section'>
                <img src="/assets/images/videosec.png" alt="" id='video-carousel'/>
                </div>
            </Slider>
            </div>
        </>
    )
}