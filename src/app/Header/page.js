"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import styles from "./header.module.css";
import { Icon } from '@iconify/react';
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className={`${styles.navbarbg} navbar navbar-expand-lg fixed-top`}>
        <div
          className={`container-fluid d-flex justify-content-between align-items-center ${styles.navContainer}`}
        >
          <a href="/" className={`navbar-brand ${styles.navbarBrand}`}>
            <img
              src="/assets/images/logo.png"
              alt="Beeyoond"
              className={styles.navbarLogo}
            />
          </a>
          <div className={`${styles.mobileNav} d-flex`}>
            <a className={styles.contactBtn} href="#contact">
              Contact
            </a>
            <button onClick={toggleMenu} className={styles.menuButton}>
              {isOpen ? (
                <FaXmark size={25} />
              ) : (
                <img
                  src="/assets/images/menu-icon.png"
                  alt="menu"
                  className={styles.menuIcon}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className={`${styles.mobileMenuOverlay}`}>
          <div className="container">
            <div className={styles.menuContent}>
              <nav className={styles.navLinks}>
                <div className={styles.careerWithIcons}>
                  <a
                    className={styles.navLinkCareer}
                    href=""
                    onClick={toggleMenu}
                  >
                    Home
                  </a>
                  <div className={styles.socialIcons}>
                    <a
                      href="https://www.instagram.com/beeyoondgaming/?utm_source=qr&igsh=N3A3d3h4eXJkM2Zp#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconHoverEffect}
                    >
                      <Icon icon="lets-icons:insta" className={styles.icon} />
                    </a>

                    <a
                      href="https://in.linkedin.com/company/beeyoondgaming"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconHoverEffect}
                    >
                      <Icon
                        icon="mingcute:linkedin-line"
                       
                        className={styles.icon}
                      />
                    </a>

                    <a
                      href="https://x.com/beeyoondbees?t=ogj8pIqHkL0HNTtAE_acMA&s=35"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconHoverEffect}
                    >
                      <Icon icon="proicons:x-twitter" className={styles.icon} />
                    </a>
                  </div>
                </div>
                <Link href="/aboutpage" onClick={toggleMenu}> About us</Link>
                {[
                  "Services  [Coming Soon]",
                  "Portfolio",
                  "Testimonial",
                ].map((item, idx) => {
                  const id = item.toLowerCase().replace(" ", "");
                  return (
                    <a key={idx} href={`#${id}`} onClick={toggleMenu}>
                      {item}
                    </a>
                  );
                })}

                <div className={styles.careerWithIcons}>
                  <a
                    className={styles.navLinkCareer}
                    href="/careers"
                    onClick={toggleMenu}
                  >
                    Careers
                  </a>
                    <p className={`${styles.copyrightSports}`}>
                      Powered by <br></br>
                   
                    <span className={styles.copyrightsub}  style={{ 
                        fontFamily: "MyCustomFont", 
                      }}>
                        Sportstech. 
                      </span> </p>
                  {/* <img
                    className={styles.SportsLogo}
                    src={`/assets/images/sports-logo.png`}
                    alt={"logo"}
                  /> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
