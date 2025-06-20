"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import styles from "./header.module.css";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useModal } from "../context/ModalContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();
  const isCareerPage = pathname === "/careers";
  const { isModalOpen, openModal, closeModal } = useModal();
  const formRef = useRef();
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().required("Message is required"),
    // .max(500, "Message can't exceed 500 characters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const sendEmail = (data) => {
    emailjs
      // .send("service_am2sw1d", "template_h7n0uvo", data, "aH6tkRSl3LIesgTSP")
      .send("service_6pnuomn", "template_cnsdo3r", data, "YDvctNu4CoXENihrU")

      .then(
        () => {
          toast.success("Message sent successfully!");
          reset();
          closeModal();
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <header>
      <nav
        className={`${styles.navbarbg} ${
          isCareerPage ? styles.pagecareers : ""
        } navbar navbar-expand-lg fixed-top`}
      >
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
            {/* <a className={styles.contactBtn} href="#contact">
              Contact
            </a> */}
            <button className={styles.contactBtn} onClick={openModal}>
              Contact
            </button>
            <Modal
              isOpen={isModalOpen}
              toggle={closeModal}
              centered
              backdrop="static"
            >
              <ModalHeader toggle={closeModal}>Contact Us</ModalHeader>
              <form
                ref={formRef}
                onSubmit={handleSubmit(sendEmail)}
                className={styles.modalForm}
              >
                <ModalBody className={styles.modalBody}>
                  {/* Name Field */}
                  <div className={`${styles.inputWrapper} mb-3`}>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Name"
                      {...register("name")}
                      className={`${styles.inputField} ${
                        errors.name ? styles.invalid : ""
                      }`}
                    />
                    {errors.name && (
                      <div className={styles.errorMsg}>
                        {errors.name.message}
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className={`${styles.inputWrapper} mb-3`}>
                    <input
                      type="email"
                      placeholder="Email address"
                      autoComplete="off"
                      {...register("email")}
                      className={`${styles.inputField} ${
                        errors.email ? styles.invalid : ""
                      }`}
                    />
                    {errors.email && (
                      <div className={styles.errorMsg}>
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className={styles.inputWrapper}>
                    <textarea
                      placeholder="Message (Optional)"
                      className={`${styles.textArea} ${
                        errors.message ? styles.invalid : ""
                      }`}
                      rows={4}
                      autoComplete="off"
                      {...register("message")}
                    ></textarea>
                    {errors.message && (
                      <div className={styles.errorMsg}>
                        {errors.message.message}
                      </div>
                    )}
                  </div>
                </ModalBody>

                <ModalFooter className={styles.modalFooter}>
                  <button type="submit" className={styles.submitBtn}>
                    Submit
                  </button>
                </ModalFooter>
              </form>
            </Modal>

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
                <Link href="/aboutpage" onClick={toggleMenu}>
                  {" "}
                  About us
                </Link>
                {["Services  [Coming Soon]", "Portfolio", "Testimonial"].map(
                  (item, idx) => {
                    const id = item.toLowerCase().replace(" ", "");
                    return (
                      <a key={idx} href={`#${id}`} onClick={toggleMenu}>
                        {item}
                      </a>
                    );
                  }
                )}

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
                    <span
                      className={styles.copyrightsub}
                      style={{
                        fontFamily: "MyCustomFont",
                      }}
                    >
                      Sportstech
                    </span>{" "}
                  </p>
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
