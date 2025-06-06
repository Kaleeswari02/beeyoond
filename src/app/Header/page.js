'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from './header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-black fixed-top">
        <div className={`container d-flex justify-content-between align-items-center mb-4 border-bottom border-warning ${styles.navContainer}`}>
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
              {isOpen ? <FaTimes size={18} /> :  <img
              src="/assets/images/menu-icon.png"
              alt="Beeyoond"
              width={36}
              height={24}
              style={{ objectFit: 'contain' }}
            />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className={styles.mobileMenuOverlay}>
          <div className={styles.menuContent}>
            <nav className={styles.navLinks}>
              <a href="/" onClick={toggleMenu}>Home</a>
              <a href="/about" onClick={toggleMenu}>About us</a>
              <a href="/services" onClick={toggleMenu}>Services</a>
              <a href="/portfolio" onClick={toggleMenu}>Portfolio</a>
              <a href="/testimonial" onClick={toggleMenu}>Testimonial</a>
              <a href="/careers" className={styles.highlight} onClick={toggleMenu}>Careers</a>
            </nav>

            <div className={`${styles.socialIcons} mt-auto`}>
              <a href="#"><FaLinkedinIn size={20} /></a>
              <a href="#"><FaInstagram size={20} /></a>
              <button
                onClick={toggleMenu}
                className="text-white ms-3 p-0"
                style={{ fontSize: '20px', background: 'none', border: 'none' }}
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
