import './about.css';
export default function About(){
    return(
        <>
        <div className='container-fluid about-sec-bg' id="aboutus">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="about-section">
                        <div className="about-one mt-xl-5 mt-lg-5 mt-md-5">
                            <img src="/assets/images/arrowr.png" alt="" className='arrow-size-mobile'/>
                        </div>
                        <div className="about-two mt-xl-3 mt-lg-3 mt-md-3 mt-3">
                        {/* <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        id="about-video"
                    >
                        <source src="/assets/images/aboutsec.mp4" type="video/mp4" />
                        </video> */}
                            <img src="/assets/images/aboutright.png" alt=""/>
                        </div>
                        <div className="about-three">
                            <img src="/assets/images/arrowl.png" alt="" className='arrow-size-mobile'/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12 p-xl-5 p-lg-5 p-md-3 p-0">
                    <div className="about-content  mt-xl-5 mt-lg-5 mt-md-5">
                        <div className="content  mt-xl-5 mt-lg-5 mt-md-5">
                            <h2 className="about-head mt-xl-5 mt-lg-5 mt-md-5 ">Who We Are</h2>
                            <p className="about-para mt-xl-4">At Beeyoond Gaming, a proud Sportstech Venture, we bring ideas to life through powerful 2D/3D animation, immersive game development, and cutting-edge virtual experiences.
From eye-catching visuals to treadmill-integrated gameplay, we craft fun, exciting, and unforgettable digital worlds. Whether it's a game, a cinematic video, or an interactive virtual adventure — if it’s creative and experiential, we make it real.
We’re not just a studio. We’re a future-driven team of creators and innovators, turning imagination into action — powered by Sportstech’s vision of redefining digital engagement.</p>
                            {/* <p className="about-para mt-xl-4 mt-lg-4"> We focus on quality, clarity, and innovation in every project and we’re committed to delivering results that not only meet expectations but exceed them. With Beeyoond, you get a partner who listens, adapts, and delivers with precision ensuring your satisfaction at every step.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}