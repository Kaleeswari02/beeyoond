"use client";
import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`${styles.footer} pt-5 pb-3`}>
      <div className="container-fluid">
        <div className="row align-items-start">
          {/* Left Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img src="/assets/images/logo.png"  alt="Beeyoond Logo" className={`${styles.footerLogo} mb-3  img-fluid`}/>
            <div className="d-flex align-items-start mb-4">
              <h1 className={styles.email}>info@beeyoondgaming.com</h1>
              <img src="/assets/images/arrow-down.png" alt="email Logo" className={`${styles.downArrow}  img-fluid`}/>
            </div>
            <div className="d-flex align-items-start mb-4">
              <img src="/assets/images/location.png" alt="email Logo" className={`${styles.icon} mb-3 img-fluid`}/>
              <span className={styles.text}>  Annai Therasa Street, Kalavasal, <br /> Madurai, Tamil Nadu 625016
              </span>
            </div>
            <div className="d-flex align-items-center">
              <img src="/assets/images/phone.png" alt="email Logo" className={`${styles.icon} mb-3 img-fluid`} />{" "}
              <span  className={`${styles.text} text-decoration-underline`}>099429 98598</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-8">
            <div className={`d-flex flex-wrap ${styles.navLinks}`}>
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="/about" className={styles.link}>About us</Link>
              <Link href="/testimonial" className={styles.link}>Testimonial</Link>
              <Link href="/careers" className={styles.link}>Careers</Link>
              <Link href="/contact" className={styles.link}>Contact</Link>
              <Link href="/portfolio" className={styles.link}>Portfolio</Link>
              <div className="w-100 mt-2">
              <span className={styles.servicesText}>Services</span>

              </div>
              <Link href="/services#2d3d" className={styles.link}>2D/3D Animation</Link>
              <Link href="/services#video" className={styles.link}>Video Editing</Link>
              <Link href="/services#ai" className={styles.link}>AI & Automation</Link>
              <Link href="/services#game" className={styles.link}>Game Development</Link>
              <Link href="/terms" className={styles.link}>Terms & Conditions</Link>
              <Link href="/cookies" className={styles.link}>Cookies</Link>
              <div className="ms-auto d-flex gap-4 mt-2">
                <Link href="#" className={styles.icon}>
                  <img src={`/assets/images/linkedin.png`} alt="linkedin" width={40} height={40} />
                </Link>
                <Link href="#" className={styles.icon}>
                  <img src={`/assets/images/instagram.png`} alt="linkedin" width={40} height={40} />
                </Link>
                <Link href="#" className={styles.icon}>
                 <img src={`/assets/images/twitter.png`} alt="linkedin" width={40} height={40} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className={styles.copyright}>
            © 2025 <span>beeyoondgaming</span>. All
            rights reserved.
          </p>
        </div>
      </div>
      <hr className={`${styles.fullWidthHr} my-5 mt-5`}/>
    </footer>
  );
};

export default Footer;
