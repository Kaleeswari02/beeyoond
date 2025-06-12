"use client";
import React from "react";
import styles from "./careersection.module.css";

const CareerSection = () => {
  return (
    <>
      <div className={`${styles.careerSectionBg} container-fluid`} id="careers">
          <h2 className={`${styles.heading} mb-4`}>BOOST YOUR CAREER</h2>
          <section className={`${styles.careerSection} container-fluid`}>
            <div className={styles.overlay}>
              <div className="container text-center">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                      <div className={styles.content}>
                    <p className={`${styles.description}`}>
                      Looking for a career at Beeyoond Gaming means stepping into a dynamic world where creativity, innovation, and passion collide to shape the future of gaming. Here, your career isn’t just a job – it’s an opportunity to show your potential, pursue your passions, and make a meaningful impact on the gaming industry.
                    </p>
                    <button className={styles.joinusBtn}>Join with us</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </>
  

  );
};

export default CareerSection;
