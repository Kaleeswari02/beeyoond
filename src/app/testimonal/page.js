'use client'
import './testimonal.css'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Testimonalsec(){
    var settings = {
            dots: false,
            infinite: true,
            speed: 1000,         
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000   
          };
          const VideoPlay = () => {
            const [modalOpen, setModalOpen] = useState(false);
          }
    return(
        <>
           <div className='container-fluid testimonial' id="testimonial">

                <div className=" testi-width">
                <h2 className="testi-head mt-xl-5 mt-lg-5 mt-md-5 mb-xl-5 mb-lg-5 mb-md-5 mb-5 pt-xl-0 pt-lg-0 pt-5">TESTIMONIAL</h2>
                    <Slider {...settings}>
                    <div className="container-fluid mb-xl-0 mb-lg-0 mb-md-0 mb-5">
                        <div className="conatiner">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-5 col-3 p-xl-0 p-lg-0 p-md-3 ">
                                    <div className="container-image">
                                        <img src="/assets/images/testimonal.png" alt="" className='testi-image'/>
                                        <h3 className='test-sub'>Charlie Barnes</h3>
                                    </div>
                                </div>
                                {/* <div className="col-1">
                                    <div className="line"></div>
                                </div> */}
                                <div className="col-xl-7 col-lg-7 col-md-7 col-9 test-arg p-xl-0 p-lg-0 p-md-3 p-2">
                                    <div className="container-test">
                                        <div className="testi-content">
                                            <p className='testi-para'>Beeyoond Gaming did amazing work with our Unity project needs! They were proactive and came in with strong opinions... </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="conatiner">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-5 col-3 p-xl-0 p-lg-0 p-md-3 ">
                                    <div className="container-image">
                                        <img src="/assets/images/testimonal.png" alt="" className='testi-image'/>
                                      <h3 className='test-sub'>Charlie Barnes</h3>
                                    </div>
                                </div>
                                {/* <div className="col-1">
                                    <div className="line"></div>
                                </div> */}
                               <div className="col-xl-7 col-lg-7 col-md-7 col-9 test-arg test-arg p-xl-0 p-lg-0 p-md-3 p-2">
                                    <div className="container-test">
                                        <div className="testi-content">
                                            <p className='testi-para'>Beeyoond Gaming did amazing work with our Unity project needs! They were proactive and came in with strong opinions... </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="conatiner">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-5 col-3 p-xl-0 p-lg-0 p-md-3 ">
                                    <div className="container-image">
                                        <img src="/assets/images/testimonal.png" alt="" className='testi-image'/>
                                      <h3 className='test-sub'>Charlie Barnes</h3>
                                    </div>
                                </div>
                                {/* <div className="col-1">
                                    <div className="line"></div>
                                </div> */}
                               <div className="col-xl-7 col-lg-7 col-md-7 col-9 test-arg test-arg p-xl-0 p-lg-0 p-md-3 p-2">
                                    <div className="container-test">
                                        <div className="testi-content">
                                            <p className='testi-para'>Beeyoond Gaming did amazing work with our Unity project needs! They were proactive and came in with strong opinions... </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slider>
                </div>
           </div>
        </>
    )
}