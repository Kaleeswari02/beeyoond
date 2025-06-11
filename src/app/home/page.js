'use client';
import './home.css';

export default function Banner() {
  return (
    <div className="banner-container mt-xl-5 mt-lg-5 mt-md-5 mt-5">
    <div className='video-sec mt-xl-5 mt-lg-5 mt-md-5 mt-5 mb-xl-5 mb-lg-5'>
        <video
            autoPlay
            muted
            loop
            playsInline
            id="bg-video"
          >
            <source src="/assets/videos/Gen-4 Turbo I need loop background only animate dont move the car 796585601.mp4" type="video/mp4" />
        </video>
        <div className='container-fluid home-bg'>
        <div className="banner-overlay ">
            <div className="row ">
              <div className="col-xl-4 col-lg-5">
                <div className="content-section ">
                  <h3 className='banner-head mt-xl-5 mt-lg-5 mt-md-5 mt-5'>WE MAKE</h3>
                  <h3 className='banner-subhead'>GAMES</h3>
                  <p className='banner-para'>
                    At Beeyoond, we create immersive AR/VR gaming experiences that connect with real world machines. 
                  </p>
                  <div><button className='banner-btn'>Get Quotes</button></div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-1"></div>
              <div className="col-xl-6 col-lg-6"></div>
            </div>
        </div>
     </div>
    </div>


    </div>
  );
}
