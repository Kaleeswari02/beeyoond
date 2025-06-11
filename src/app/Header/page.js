"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import styles from "./header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className={`${styles.navbarbg} navbar navbar-expand-lg fixed-top`}>
        <div className={`container-fluid d-flex justify-content-between align-items-center ${styles.navContainer}`}>
          <a href="/" className={`navbar-brand ${styles.navbarBrand}`}>
            <Image
              src="/assets/images/logo.png"
              alt="Beeyoond"
              width={200}
              height={60}
              className={styles.navbarLogo}
            />
          </a>
          <div className={`${styles.mobileNav} d-flex`}>
            <a className={styles.contactBtn} href="#contact">Contact</a>
            <button onClick={toggleMenu} className={styles.menuButton}>
              {isOpen ? (
                <FaXmark size={25} />
              ) : (
                <Image
                  src="/assets/images/menu-icon.png"
                  alt="menu"
                  width={30}
                  height={24}
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
                {["Home", "About us", "Services", "Portfolio", "Testimonial"].map((item, idx) => (
                  <a key={idx} href={`/${item.toLowerCase().replace(" ", "")}`} onClick={toggleMenu}>
                    {item}
                  </a>
                ))}
                <div className={styles.careerWithIcons}>
                  <a className={styles.navLinkCareer} href="/careers" onClick={toggleMenu}>Careers</a>
                  <div className={styles.socialIcons}>
                    {["instagram", "linkedin", "twitter"].map((icon, idx) => (
                      <a key={idx} href="#">
                        <Image src={`/assets/images/${icon}.png`} alt={icon} width={34} height={34} />
                      </a>
                    ))}
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
