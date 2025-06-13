"use client";
import React from "react";
import styles from "./privacypolicy.module.css";
import Header from "../Header/page";
import Footer from "../footer/page";

const Privacypolicy = () => {
  return (
    <>
    
      <Header />
      <div className={`${styles.privacyContainer}`}>
        <div className="container">
          <h1 className={styles.title}>Privacy & Policy</h1>
      <div className={`${styles.topContainer}`}></div>

          <p className={styles.subtitle}>
            At Beeyoond Gaming, your privacy is important to us. This Privacy Policy
            outlines how we collect, use, and protect your personal information.At Beeyoond Gaming, your privacy is important to us. This Privacy Policy
            outlines how we collect, use, and protect your personal information.At Beeyoond Gaming, your privacy is important to us. This Privacy Policy
            outlines how we collect, use, and protect your personal information.
          </p>

          <section className={styles.section}>
            <h3>1. Information We Collect</h3>
            <ul>
              <li>Personal details like name, email, phone number (when submitted).</li>
              <li>Usage data from our website and services.</li>
              <li>Information via contact forms or job applications.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3>2. How We Use Your Information</h3>
            <ul>
              <li>To provide and improve our services and content.</li>
              <li>To respond to inquiries or support requests.</li>
              <li>To analyze usage trends and optimize user experience.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3>3. Data Protection</h3>
            <p>
              We implement strict security measures to protect your data. Your
              information is never sold or shared with third parties without your
              consent.
            </p>
          </section>

          <section className={styles.section}>
            <h3>4. Cookies</h3>
            <p>
              We use cookies to personalize content, analyze traffic, and improve
              your experience on our website.
            </p>
          </section>

          <section className={styles.section}>
            <h3>5. Changes to this Policy</h3>
            <p>
              We may update this policy from time to time. Changes will be reflected
              on this page with a revised date.
            </p>
          </section>
   <section className={styles.section}>
            <h3>5. Changes to this Policy</h3>
            <p>
              We may update this policy from time to time. Changes will be reflected
              on this page with a revised date.
            </p>
          </section>
             <section className={styles.section}>
            <h3>5. Changes to this Policy</h3>
            <p>
              We may update this policy from time to time. Changes will be reflected
              on this page with a revised date.
            </p>
          </section>
             <section className={styles.section}>
            <h3>5. Changes to this Policy</h3>
            <p>
              We may update this policy from time to time. Changes will be reflected
              on this page with a revised date.
            </p>
          </section>
          <section className={styles.section}>
            <h3>6. Contact Us</h3>
            <p>
              For questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:info@beeyoondgaming.com"
                className={styles.emailLink}
              >
                info@beeyoondgaming.com
              </a>
              .
            </p>
          </section>
        </div>
        </div>
      <Footer />
    </>
  );
};

export default Privacypolicy;
