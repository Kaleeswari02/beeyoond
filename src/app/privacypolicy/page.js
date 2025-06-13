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
          Beeyoond Gaming ("we," "us," or "our") values your privacy and is firmly committed to protecting your personal data with the highest standards of transparency and integrity. This Privacy Policy is intended to offer a clear and comprehensive understanding of the types of personal data we collect, the purposes for which we process such information, and the rights you have concerning your data. By engaging with our website, mobile applications, or services, you consent to the practices outlined herein.
          </p>

          <section className={styles.section}>
            <h3>1. Information We Collect</h3>
            <p>We collect a range of personal and non-personal information through your interactions with our website, services, and marketing communications. This includes, but is not limited to, your name, email address, contact number, and IP address. We also gather technical data such as browser specifications, device identifiers, operating system versions, and connection timestamps. Additionally, behavioral data may be collected through cookies and analytics tools to understand usage patterns, navigation paths, session durations, and referral sources, which enable us to enhance both functionality and user experience.</p>
          </section>

          <section className={styles.section}>
            <h3>2. How We Use Your Information</h3>
            <p>The data we collect is integral to maintaining operational excellence and delivering a personalized and responsive user experience. We use your information to administer our services, provide customer support, fulfill contractual obligations, and send updates related to your engagement with us. Furthermore, we may analyze aggregated data trends to improve our service design, security protocols, and marketing strategies. Marketing communications will only be sent with your explicit consent, and you may opt out at any time.</p>
          </section>
            <section className={styles.section}>
            <h3>3. Sharing and Disclosure</h3>
            <p>We uphold a strict policy against unauthorized sharing or commercialization of your personal data. However, certain scenarios may necessitate the disclosure of your information. These include sharing with third-party service providers who assist in our operations under strict confidentiality agreements, compliance with legal requirements or regulatory investigations, and in instances of corporate restructuring, mergers, or acquisitions where data assets are transferred under appropriate safeguards.</p>
          </section>
          <section className={styles.section}>
            <h3>4. Data Retention</h3>
            <p>
             Your personal data will be retained only for as long as is necessary to fulfill the objectives specified in this Privacy Policy. We implement structured retention schedules and disposal protocols to ensure that outdated or irrelevant data is securely erased, unless longer retention periods are required for legal, regulatory, or legitimate operational reasons.
            </p>
          </section>

          <section className={styles.section}>
            <h3>5. Security of Your Data</h3>
            <p>
              We implement robust administrative, technical, and physical safeguards to ensure the confidentiality, integrity, and availability of your personal data. This includes the use of encrypted communication channels, access control mechanisms, regular security audits, and secure data storage solutions. While we strive to employ industry-best practices, no system is entirely immune to risk, and we encourage users to remain vigilant in safeguarding their login credentials and personal information.
            </p>
          </section>

          <section className={styles.section}>
            <h3>6. Your Rights and Choices</h3>
            <p>
             You are entitled to exercise several rights with respect to your personal data, including the right to access, rectify, or erase inaccuracies; object to or restrict processing; and obtain a structured copy of your data for portability purposes. You may also withdraw consent for marketing communications and lodge a complaint with a relevant supervisory authority if you believe your data has been mishandled.
            </p>
          </section>
         <section className={styles.section}>
            <h3>7. Third-Party Websites</h3>
            <p>
             Our digital platforms may contain hyperlinks to external websites and services that are operated independently. We do not assume responsibility for the privacy policies, data handling practices, or content of such third-party entities. Users are encouraged to review the respective privacy statements of any linked site before disclosing personal information.
            </p>
          </section>
             <section className={styles.section}>
            <h3>8. Changes to this Policy</h3>
            <p>
             We reserve the right to revise this Privacy Policy at our sole discretion and without prior notice. Any amendments will be published on this page and will become effective immediately upon posting. Your continued use of our services after the publication of changes constitutes acceptance of the revised terms.
            </p>
          </section>
           
          <section className={styles.section}>
            <h3>9. Contact Us</h3>
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
