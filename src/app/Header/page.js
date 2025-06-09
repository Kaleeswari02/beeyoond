"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";

import styles from "./header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className={`${styles.navbarbg} navbar navbar-expand-lg fixed-top`}>
        <div
          className={`container d-flex justify-content-between align-items-center mb-2
            ${styles.navContainer}`}>
          <a href="/" className={`navbar-brand ${styles.navbarBrand}`}>
            <img
              src="/assets/images/logo.png"
              alt="Beeyoond"
              className={styles.navbarLogo}
            />
          </a>
          <div className="d-flex align-items-center gap-3">
            <a className={styles.contactBtn} href="#contact">
              Contact
            </a>
            <button onClick={toggleMenu} className={styles.menuButton}>
              {isOpen ? (
                <FaXmark  size={25} />
              ) : (
                <img
                  className={styles.menuIcon}
                  src="/assets/images/menu-icon.png"
                  alt="Beeyoond"
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className={`${styles.mobileMenuOverlay} container-fluid `}>
          <div className="container">
            <div className={styles.menuContent}>
              <nav className={styles.navLinks}>
                <a href="/" onClick={toggleMenu}>
                  Home
                </a>
                <a href="/about" onClick={toggleMenu}>
                  About us
                </a>
                <a href="/services" onClick={toggleMenu}>
                  Services
                </a>
                <a href="/portfolio" onClick={toggleMenu}>
                  Portfolio
                </a>
                <a href="/testimonial" onClick={toggleMenu}>
                  Testimonial
                </a>

                <div className={styles.careerWithIcons}>
                  <a href="/careers" onClick={toggleMenu}>
                    Careers
                  </a>
                  <div className={styles.socialIcons}>
                    <a href="#">
                      <img src="/assets/images/instagram.png" width={42} />
                    </a>
                    <a href="#">
                      <img src="/assets/images/linkedin.png" width={42} />
                    </a>
                    <a href="#">
                      <img src="/assets/images/twitter.png" width={42} />
                    </a>
                  </div>
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
