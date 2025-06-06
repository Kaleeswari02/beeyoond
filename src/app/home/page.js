'use client'
import './home.css';

export default function Banner(){
    return(
        <>
        <div className="container-fluid">
            <div className="banner-section" >
                <div className="row">
                    <div className="col-xl-5 col-lg-5">
                        <div className="content-section">
                            <h3>We make</h3>
                            <h1>GAMES</h1>
                            <p>At Beeyoond, we create immersive AR/VR gaming experiences that connect with real world machines. We use powerful 2D and 3D animations to show natural movement and machine action, and we produce high quality videos that clearly explain how equipment works.</p>
                            <div><button>Get Quote</button></div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7"></div>
                </div>
            </div>
        </div>
        </>
    )
}