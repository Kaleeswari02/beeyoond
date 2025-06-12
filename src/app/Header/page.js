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
            <img
              src="/assets/images/logo.png"
              alt="Beeyoond"

              className={styles.navbarLogo}
            />
          </a>
          <div className={`${styles.mobileNav} d-flex`}>
            <a className={styles.contactBtn} href="#contact">Contact</a>
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
                  <a className={styles.navLinkCareer} href="/careers" onClick={toggleMenu}>Home</a>
                  <div className={styles.socialIcons}>
                    {[
                      { name: "instagram", url: "https://www.instagram.com/p/DJoxDdohR6f/" },
                      { name: "linkedin", url: "https://in.linkedin.com/company/beeyoondgaming" },
                      { name: "twitter", url: "https://twitter.com/example" },
                    ].map((icon, idx) => (
                      <a
                        key={idx}
                        href={icon.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`/assets/images/${icon.name}.png`}
                          alt={icon.name}
                        />
                      </a>
                    ))}
                  </div>
                </div>
                {["About us", "Services", "Portfolio", "Testimonial"].map((item, idx) => (
                  <a key={idx} href={`/${item.toLowerCase().replace(" ", "")}`} onClick={toggleMenu}>
                    {item}
                  </a>
                ))}
                 <div className={styles.careerWithIcons}>
                  <a className={styles.navLinkCareer} href="/careers" onClick={toggleMenu}>Careers</a>
                        <img className={styles.SportsLogo}
                          src={`/assets/images/sports-logo.png`}
                          alt={"logo"}
                        />
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
