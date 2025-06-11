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
          <div className="col-12 col-sm-6 col-md-6 col-xl-6 xol-lg-6 p-5">
         <div className={`${styles.cardBox}`}>
          <img src="/assets/images/vision.png" alt="Vision" className={styles.cardImage} />
          <div className={styles.overlay}>
            <h3 className={styles.title}><span>OUR</span> VISION</h3>
            <p className={styles.description}>
                  A cinematic 3D render of a global community of diverse players—different cultures, ages, and abilities—interacting through beautifully designed digital games. Their expressions show joy, wonder, and emotional connection. The games are visually rich, innovative, and creative—featuring fantastical environments, inclusive avatars, and collaborative experiences and creative—featuring fantastical environments, inclusive avatars, and collaborative experiences.
            </p>
          </div>
        </div>

          </div>

          {/* Mission Card */}
         <div className="col-12 col-sm-6 col-md-6 col-xl-6 xol-lg-6 p-5">
            <div className={styles.cardBox}>
              <img src="/assets/images/mission.png" alt="Mission" className={styles.cardImage} />
              <div className={styles.overlay}>
                <h3 className={styles.title}><span>OUR</span> MISSION</h3>
                <p className={styles.description}>
                  A cinematic 3D render of a global community of diverse players—different cultures, ages, and abilities—interacting through beautifully designed digital games. Their expressions show joy, wonder, and emotional connection. The games are visually rich, innovative, and creative—featuring fantastical environments, inclusive avatars, and collaborative experiences  and creative—featuring fantastical environments, inclusive avatars, and collaborative experiences.
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
