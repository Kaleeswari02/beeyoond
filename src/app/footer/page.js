"use client";
import React, { useState } from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { Icon } from '@iconify/react';


const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("info@beeyoondgaming.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // hide after 1.5s
  };
  return (
     <div className={`${styles.footerSection}`}>
    <footer className={`${styles.footer}`}>
      <div className={`container-fluid ${styles.customContainer}`}>
        <div  className={`${styles.imaSec} row align-items-start mt-5`}>
          <div className=" col-md-4 mb-4">
            <a href="/">
            <img src="/assets/images/logo.png" alt="Beeyoond Logo" className={`${styles.footerLogo} mb-3 img-fluid`}/></a>
            <div className="d-flex align-items-start mb-2 mt-2">
            <div className="d-flex align-items-start mb-2 mt-2">
             <div className={styles.emailWrapper}>
                <Icon
                  icon="proicons:mail-open"
                  width="55"
                  height="55"
                  className={`${styles.icon} mb-3 img-fluid`}
                  onClick={() =>
                    (window.location.href = "mailto:info@beeyoondgaming.com")
                  }
              
                />
                <div className={styles.emailTextWrapper}>
                  <span className={styles.text}>info@beeyoondgaming.com</span>
                  <span
                    className={styles.tooltipWrapper}
                    onClick={handleEmailCopy}
                  >
                    <Icon
                      icon="ri:arrow-left-down-line"
                      width="32"
                      height="32"
                      className={styles.emailArrow}
                    />
                    {copied && (
                      <span className={styles.tooltip}>Copied!</span>
                    )}
                  </span>
                </div>
              </div>
              </div>
          </div>
            <div className="d-flex align-items-start mb-4">
              <Icon icon="entypo:location" width="44" height="44"  className={`${styles.icon}  mb-3 img-fluid`}/>
              <span className={styles.text}>  Annai Therasa Street, Kalavasal, <br /> Madurai, Tamil Nadu 625016
              </span>
            </div>
            <div className="d-flex align-items-center">
              <Icon icon="simple-line-icons:call-out" width="44" height="44" className={`${styles.icon} mb-3 img-fluid`} />
              <span ><p className={`${styles.text} text-decoration-underline`}>+91 99429 98598 </p></span>   
            </div>
          </div>

            <div className="col-md-8  mt-5">
            <div className={`d-flex flex-wrap ${styles.navLinks} mt-3`}>
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="#about" className={styles.link}>About us</Link>
              <Link href="#testimonial" className={styles.link}>Testimonial</Link>
              <Link href="#careers" className={styles.link}>Careers</Link>
              <Link href="#contact" className={styles.link}>Contact</Link>
              <Link href="#portfolio" className={styles.link}>Portfolio</Link>
              <div className="w-100 mt-2">
              <span className={styles.servicesText}>Services</span>
              </div>
              <p href="/services#2d3d" className={styles.link}>2D/3D Animation</p>
              <p href="/services#video" className={styles.link}>Video Editing</p>
              <p href="/services#ai" className={styles.link}>AI & Automation</p>
              <p href="/services#game" className={styles.link}>Game Development</p>
              <Link href="/terms" className={styles.link}>Terms & Conditions</Link>
              <Link href="/privacypolicy" className={styles.link}>Privacy & Policy</Link>
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
