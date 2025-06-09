import './about.css';
export default function About(){
    return(
        <>
        <div className='container-fluid about-sec-bg'>
        <div className="row">
    <div className="col-xl-6">
        <div className="about-section">
            <div className="about-one">
                <img src="/assets/images/arrowr.png" alt=""/>
            </div>
            <div className="about-two mt-xl-3">
            <video
            autoPlay
            muted
            loop
            playsInline
            id="about-video"
          >
            <source src="/assets/images/aboutsec.mp4" type="video/mp4" />
            </video>
                {/* <img src="/assets/images/aboutsec.mp4" alt=""/> */}
            </div>
            <div className="about-three">
                <img src="/assets/images/arrowl.png" alt=""/>
            </div>
        </div>
    </div>
    <div className="col-xl-6">
        <div className="about-content p-xl-5 p-lg-5 mt-xl-5 mt-lg-5 mt-md-5">
            <div className="content p-xl-5 p-lg-5 mt-xl-5 mt-lg-5 mt-md-5">
                <h2 className="about-head mt-xl-5 mt-lg-5 mt-md-5 p-3">Who We Are</h2>
                <p className="about-para ">At Beeyoond, we turn ideas into engaging digital experiences by combining creativity with advanced technology.</p>
                <p className="about-para "> We focus on quality, clarity, and innovation in every project and we’re committed to delivering results that not only meet expectations but exceed them. With Beeyoond, you get a partner who listens, adapts, and delivers with precision ensuring your satisfaction at every step.</p>
            </div>
        </div>
    </div>
</div>
        </div>
        </>
    )
}