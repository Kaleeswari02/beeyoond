'use client';
import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Container,
  Button,
} from 'reactstrap';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar dark fixed="top" className="bg-black border-bottom border-warning py-2">
        <Container className="d-flex justify-content-between align-items-center">
          <NavbarBrand href="/" className="d-flex align-items-center gap-2">
            <Image src="/assets/images/logo.png" alt="Beeyoond" width={150} height={40} />
          </NavbarBrand>

          <div className="d-flex align-items-center gap-2">
            <Button size="sm" outline color="warning" className="rounded-pill px-3">
              Contact
            </Button>

            <Button
              color="warning"
              className="rounded-circle d-md-none"
              style={{ width: '36px', height: '36px', padding: 0 }}
              onClick={toggleMenu}
            >
              {isOpen ? '✕' : '≡'}
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="mobileMenuOverlay">
          <Image
            src="/images/car-bg.jpg"
            alt="Background"
            fill
            className="overlayBg"
          />

          <Container className="menuContent">
            <nav className="navLinks">
              <a href="/">Home</a>
              <a href="/about">About us</a>
              <a href="/services">Services</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/testimonial">Testimonial</a>
              <a href="/careers" className="highlight">Careers</a>
            </nav>

            <div className="socialIcons mt-auto">
              <a href="#"><i className="ri-linkedin-fill"></i></a>
              <a href="#"><i className="ri-instagram-fill"></i></a>
              <a href="#"><i className="ri-close-line" onClick={toggleMenu}></i></a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
