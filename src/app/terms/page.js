"use client";
import React from "react";
import styles from "./terms.module.css";
import Header from "../Header/page";
import Footer from "../footer/page";

const Termsconditions = () => {
  return (
    <>
      <div className={styles.termsWrapper}>
        <Header />

        <div className={styles.termsContainer}>
          <div className="container">
            <h1 className={styles.title}>Terms & Conditions</h1>
                  <div className={`${styles.topContainer}`}></div>

            <p className={styles.subtitle}>
              Welcome to Beeyoond Gaming. By using our website, services, or submitting any information to us, you agree to the following terms and conditions. Please read them carefully.
            </p>

            <section className={styles.section}>
              <h3>1. Use of Our Services</h3>
              <p>
                You must use our services only for lawful purposes. You agree not to misuse, copy, or resell any part of our content, games, or services without written permission.
              </p>
            </section>

            <section className={styles.section}>
              <h3>2. Intellectual Property</h3>
              <p>
                All content, designs, images, videos, and code on this site are owned by Beeyoond Gaming unless otherwise stated. You may not reuse or reproduce any materials without our consent.
              </p>
            </section>

            <section className={styles.section}>
              <h3>3. User Content</h3>
              <p>
                If you submit any content (like game ideas, resumes, or project files), you grant us the right to use it in connection with our services. We will never share your personal data without consent.
              </p>
            </section>

            <section className={styles.section}>
              <h3>4. Limitation of Liability</h3>
              <p>
                Beeyoond Gaming is not responsible for any direct or indirect damages that may occur from using our site or services. All content is provided "as is" without guarantees.
              </p>
            </section>

            <section className={styles.section}>
              <h3>5. Account Responsibility</h3>
              <p>
                If you create an account with us, you are responsible for keeping your login information secure. Let us know right away if you believe your account has been accessed without permission.
              </p>
            </section>

            <section className={styles.section}>
              <h3>6. External Links</h3>
              <p>
                Our website may contain links to other websites. We are not responsible for the content or privacy policies of those external sites.
              </p>
            </section>

            <section className={styles.section}>
              <h3>7. Changes to Terms</h3>
              <p>
                We may update these terms at any time. If we make major changes, we will post a notice on our website. Continued use of our services means you accept the changes.
              </p>
            </section>

            <section className={styles.section}>
              <h3>8. Contact Us</h3>
              <p>
                If you have any questions about these Terms & Conditions, feel free to contact us at{" "}
                <a
                  href="mailto:info@beeyoondgaming.com"
                  className={styles.emailLink}
                >
                  info@beeyoondgaming.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Termsconditions;
