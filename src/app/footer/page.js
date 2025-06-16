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
              <div className="col-xl-4 col-lg-4 col-md-5 col-12 mb-4 text-md-start text-center">
                  <div className={styles.contentCenter}>
                    <a href="/">
                      <img src="/assets/images/logo.png" alt="Beeyoond Logo" className={`${styles.footerLogo} mb-3 img-fluid`}/>
                  </a>
                  </div>
                  <div className={styles.addressfooterarea}>
                      <div className="d-flex align-items-start md-mb-2 md-mt-2 mb-2">
                        <div className={styles.emailWrapper}>
                            <Icon
                              icon="proicons:mail-open"
                              width="44"
                              height="44"
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
                      <div className="d-flex align-items-start  md-mb-4 mb-2">
                        <Icon icon="entypo:location"  className={`${styles.icon}  md-mb-3 img-fluid`}/>
                        <span className={styles.text}>Annai Therasa Street, Kalavasal,<br/>Madurai, Tamil Nadu 625016
                        </span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <Icon icon="simple-line-icons:call-out" className={`${styles.icon} md-mb-3 img-fluid`} />
                        <span ><p className={`${styles.text} text-decoration-underline`}>+91 99429 98598 </p></span>   
                      </div>
                  </div>
              </div>

            <div className="col-xl-8 col-lg-8 col-md-7 col-12 md-mt-5">
            <div className={`d-flex flex-wrap ${styles.navLinks} md-mt-3`}>
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="/aboutpage" className={styles.link}>About us</Link>
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
              <div className={`${styles.socialIcons}  d-flex gap-5 mt-2`}>
              <Link href="https://in.linkedin.com/company/beeyoondgaming" className={`${styles.icon} ${styles.iconHoverEffect}`} target="_blank">
                <Icon icon="mingcute:linkedin-line" width="42" height="42" />
              </Link>

              <Link   href="https://www.instagram.com/beeyoondgaming/?utm_source=qr&igsh=N3A3d3h4eXJkM2Zp#" className={`${styles.icon} ${styles.iconHoverEffect}`} target="_blank">
                <Icon icon="lets-icons:insta" width="40" height="40" />
              </Link>

              <Link  href="https://x.com/beeyoondbees?t=ogj8pIqHkL0HNTtAE_acMA&s=35" className={`${styles.icon} ${styles.iconHoverEffect}`} target="_blank">
                <Icon icon="prime:twitter" width="30" height="30" />
              </Link>          
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-md-2 mt-5">
          <p className={styles.copyright}>
            © 2025 <span>beeyoondgaming</span>. All
            rights reserved.
          </p>
            <span ><img src="/assets/images/copyrights.png" alt="" className={styles.footercopyimg}/></span>
        </div>
      </div>
      {/* <hr className={`${styles.fullWidthHr} my-5 mt-5`}/> */}
    </footer>
    </div>
  );
};

export default Footer;
