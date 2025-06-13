"use client";
import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { Icon } from '@iconify/react';


const Footer = () => {
  return (
     <div className={`${styles.footerSection}`}>
    <footer className={`${styles.footer}`}>
      <div className={`container-fluid ${styles.customContainer}`}>
        <div  className={`${styles.imaSec} row align-items-start mt-5`}>
          <div className="col-md-4">
            <a href="/">
            <img src="/assets/images/logo.png" alt="Beeyoond Logo" className={`${styles.footerLogo} mb-3 img-fluid`}/></a>
            <div className="d-flex align-items-start mb-4">
            <div
              className={styles.emailWrapper}
              onClick={() => (window.location.href = "mailto:info@beeyoondgaming.com")}
            >
              <span className={styles.emailText}>info@beeyoondgaming.com
              <img src="/assets/images/arrow-down.png"  className={styles.emailArrow} /></span>
            </div>
          </div>
            <div className="d-flex align-items-start mb-4">
              <img src="/assets/images/location.png" alt="email Logo" className={`${styles.icon} mb-3 img-fluid`}/>
              <span className={styles.text}>  Annai Therasa Street, Kalavasal, <br /> Madurai, Tamil Nadu 625016
              </span>
            </div>
            <div className="d-flex align-items-center">
              <img src="/assets/images/phone.png" alt="email Logo" className={`${styles.icon} mb-3 img-fluid`} />{" "}
              <span ><Link href="tel:099429 98598" target="_blank"  className={`${styles.text} text-decoration-underline`}>099429 98598 </Link></span>   
            </div>
          </div>

          <div className="col-md-8 mt-5">
            <div className={`d-flex flex-wrap ${styles.navLinks}`}>
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="#about" className={styles.link}>About us</Link>
              <Link href="#testimonial" className={styles.link}>Testimonial</Link>
              <Link href="#careers" className={styles.link}>Careers</Link>
              <Link href="tel:099429 98598" target="_blank"  className={styles.link}>Contact</Link>
              <Link href="#portfolio" className={styles.link}>Portfolio</Link>
              <div className="w-100 mt-2">
              <span className={styles.servicesText}>Services</span>
              </div>
              <p href="/services#2d3d" className={styles.link}>2D/3D Animation</p>
              <p href="/services#video" className={styles.link}>Video Editing</p>
              <p href="/services#ai" className={styles.link}>AI & Automation</p>
              <p href="/services#game" className={styles.link}>Game Development</p>
              <Link href="/" className={styles.link}>Terms & Conditions</Link>
              <Link href="/" className={styles.link}>Privacy & Policy</Link>
              <div className="ms-auto d-flex gap-5 mt-2">
              <Link href="https://in.linkedin.com/company/beeyoondgaming" className={`${styles.icon} ${styles.iconHoverEffect}`} target="_blank">
                <Icon icon="mingcute:linkedin-line" width="42" height="42" />
              </Link>

              <Link href="https://www.instagram.com/p/DJoxDdohR6f/" className={`${styles.icon} ${styles.iconHoverEffect}`} target="_blank">
                <Icon icon="lets-icons:insta" width="40" height="40" />
              </Link>

              <Link href="https://twitter.com/example" className={`${styles.icon} ${styles.iconHoverEffect}`} target="_blank">
                <Icon icon="prime:twitter" width="30" height="30" />
              </Link>          
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className={styles.copyright}>
            © 2025 <span>beeyoondgaming</span>. All
            rights reserved.
          </p>
            <span><img src="/assets/images/copyrights.png"/></span>
        </div>
      </div>
      {/* <hr className={`${styles.fullWidthHr} my-5 mt-5`}/> */}
    </footer>
    </div>
  );
};

export default Footer;
