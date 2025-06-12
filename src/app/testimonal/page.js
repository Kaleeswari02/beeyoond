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

                <div className=" testi-width ">
                <h2 className="testi-head mt-5 mb-5">TESTIMONIAL</h2>
                    <Slider {...settings}>
                    <div className="container-fluid">
                        <div className="conatiner">
                            <div className="row">
                                <div className="col-5">
                                    <div className="container-image">
                                        <img src="/assets/images/testimonal.png" alt="" className='testi-image'/>
                                        <h3 className='test-sub'>Charlie Barnes</h3>
                                    </div>
                                </div>
                                {/* <div className="col-1">
                                    <div className="line"></div>
                                </div> */}
                                <div className="col-7 test-arg">
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
                                <div className="col-5">
                                    <div className="container-image">
                                        <img src="/assets/images/testimonal.png" alt="" className='testi-image'/>
                                      <h3 className='test-sub'>Charlie Barnes</h3>
                                    </div>
                                </div>
                                {/* <div className="col-1">
                                    <div className="line"></div>
                                </div> */}
                               <div className="col-7 test-arg">
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
                                <div className="col-5">
                                    <div className="container-image">
                                        <img src="/assets/images/testimonal.png" alt="" className='testi-image'/>
                                      <h3 className='test-sub'>Charlie Barnes</h3>
                                    </div>
                                </div>
                                {/* <div className="col-1">
                                    <div className="line"></div>
                                </div> */}
                               <div className="col-7 test-arg">
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