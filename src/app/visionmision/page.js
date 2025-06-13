"use client";
import React from "react";
import styles from "./visionmission.module.css";

const VisionMission = () => {
  return (
    <section className={`${styles.VisionMissionSection} container-fluid py-5`}>
      <div className="container">
        <h2 className="text-center mb-5">WE MAKE THE FUTURE</h2>
        <div className="row justify-content-center">
          {/* Vision Card */}
          <div className="col-12 col-sm-6 col-md-6 col-xl-6 xol-lg-6 p-xl-5 p-lg-5 p-md-5 p-1 mb-xl-0 mb-lg-0 mb-md-0 mb-5">
         <div className={`${styles.cardBox}`}>
          <img src="/assets/images/vision.png" alt="Vision" className={styles.cardImage} />
          <div className={styles.overlay}>
            <h3 className={styles.title}><span>OUR</span> VISION</h3>
            <p className={styles.description}>
            We envision a future where games transcend entertainment — becoming a universal language of creativity, connection, and inclusivity. As a Sportstech Venture, Beeyoond Gaming strives to lead the next wave of digital innovation, building fantastical yet grounded worlds where every player feels seen, inspired, and empowered to explore.
            </p>
          </div>
        </div>

          </div>

          {/* Mission Card */}
         <div className="col-12 col-sm-6 col-md-6 col-xl-6 xol-lg-6 p-xl-5 p-lg-5 p-md-5 p-1">
            <div className={styles.cardBox}>
              <img src="/assets/images/mission.png" alt="Mission" className={styles.cardImage} />
              <div className={styles.overlay}>
                <h3 className={styles.title}><span>OUR</span> MISSION</h3>
                <p className={styles.description}>
                At Beeyoond Gaming, our mission is to create emotionally resonant, inclusive, and visually stunning digital experiences that connect people across cultures, generations, and abilities. Through imaginative game worlds, innovative storytelling, and collaborative gameplay, we aim to spark joy, wonder, and meaningful interaction in every player
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
