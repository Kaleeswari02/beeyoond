'use client'
import Footer from '../footer/page';
import Header from '../Header/page';
import './aboutpage.css';
import { Icon } from '@iconify/react';
export default function Aboutuspage(){
    return(
        <>
        <Header/>
            <div className='container-fluid aboutpage-section'>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                        <div className="aboutpage-bgimage">
                            <div className="aboutpage-content-sec p-xl-5 p-lg-5 p-md-5 ">
                                <h2 className="aboupagehead mt-xl-4 mt-lg-4 mt-md-4 mt-5">About us</h2>
                                <p className="aboutpage-para">We’re an award-winning studio that creates cutting-edge video editing, game development, 2D/3D design, and web solutions. Our expert team crafts immersive, stunning products that push boundaries and inspire.</p>
                                <div className="aboutpagesec-btn">
                                    <button className='aboutpage-btn mb-xl-0 mb-lg-0 mb-3'>Get Quotes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-12 col-lg-12 col-md-12'>
                    <div className="pillar-section">
                    <div className="arrow-image-about">
                        <img src="/assets/images/arrowr.png" alt="" className='arrow-rightabt'/>
                    </div>
                    <h2 className='pillar-head mt-5 mb-3'>Meet the Pillars</h2>
                    <div className="container-fluid about-ceo">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div className="aboutpage-img-c py-3">
                                    <img src='/assets/images/pillar.png' alt='' className='ceo-img'/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div className='aboutpage-pillar-c'>
                                <div className=" bac-imag-area ">
                                    <h2 className='pillar-subhead'>CEO Notes</h2>
                                    <p className='pillar-para mt-xl-5 mt-lg-5 mt-md-3 mt-5'>As a leading studio at the forefront of innovation, we are dedicated to delivering exceptional video editing, game development, 2D/3D design, and web solutions that set new industry standards. Our talented team combines creativity and expertise to craft immersive, cutting-edge products that not only meet but exceed expectations. We are committed to pushing boundaries, driving success, and shaping the future of digital experiences. Thank you for your trust and partnership as we continue to redefine the digital landscape.</p>
                                </div>
                                </div>
                             
                            </div>
                        </div>
                      
                    </div>
                    <div className="arrow-image-leftsec">
                            <img src="/assets/images/arrowl.png" alt="" className='arrow-leftabt'/>
                        </div>
                    </div>
                </div>
                </div>
                <div className='container-fluid aboutpage-sec2'>
                <div className="feeds-section">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                    <h2 className='aboutpage-head'>Feeds</h2>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                    <div className="aboutpage-btn-area">
                                        <button className='aboutpage-btn1 '>Follow on<a href="https://in.linkedin.com/company/beeyoondgaming" target="_blank" rel="noopener noreferrer" ><Icon icon="mingcute:linkedin-line" width="42" height="42" className='icon-menu-about '/></a> </button>
                                        <button className='aboutpage-btn2'>Follow on <a  href="https://www.instagram.com/beeyoondgaming/?utm_source=qr&igsh=N3A3d3h4eXJkM2Zp#"target="_blank" rel="noopener noreferrer"><Icon icon="lets-icons:insta" width="40" height="40" className='icon-menu-about '/></a></button>
                                    </div>
                                </div>
                            </div>
                          <div className='border-areaabout'><div className='about-border-area'></div></div>
                          <div className="aboutpage-imagearea mt-xl-5 mt-lg-5 mt-md-3">
                        <img src="/assets/images/feed1.png" alt="feed1" className='aboutpage-img'/>
                        <img src="/assets/images/feed2.png" alt="feed2" className='aboutpage-img'/>
                        <img src="/assets/images/feed3.png" alt="feed3" className='aboutpage-img'/>
                        <img src="/assets/images/feed4.png" alt="feed4" className='aboutpage-img'/>
                        <img src="/assets/images/feed5.png" alt="feed5" className='aboutpage-img'/>
                </div>
                <div className="aboutpage-imagearea">
                    <img src="/assets/images/feed6.png" alt="feed6" className='aboutpage-img'/>
                    <img src="/assets/images/feed7.png" alt="feed7" className='aboutpage-img'/>
                    <img src="/assets/images/feed8.png" alt="feed8" className='aboutpage-img'/>
                    <img src="/assets/images/feed9.png" alt="feed9" className='aboutpage-img' />
                    <img src="/assets/images/feed10.png" alt="feed10" className='aboutpage-img'/>
                </div>
                <div className="arrow-image-leftsecf">
                    <img src="/assets/images/arrowl.png" alt="" className='feed-arrow'/>
                </div>
                <div className='container-fluid career-about'>
                <div className='careerSectionBg' id="careers">
                    <h2 className='heading ' >BOOST YOUR CAREER</h2>
                    <section className='careerSection container-fluid'>
                        <div className='aboutoverlay'>
                        <div className="container text-center">
                            <div className="row justify-content-center">
                            <div className="col-lg-12 col-xl-12">
                                <div className='about-pagecontent'>
                                <p className='description'>
                                Looking for a career at Beeyoond Gaming means stepping into a dynamic world where creativity, innovation, and passion collide to shape the future of gaming. Here, your career isn’t just a job – it’s an opportunity to show your potential, pursue your passions, and make a meaningful impact on the gaming industry.
                                </p>
                                <button className='joinusBtn'>Join with us</button>
                            </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                 </div>
                </div>
                </div>

                </div>

            </div>
            <Footer/>
        </>
    )
}