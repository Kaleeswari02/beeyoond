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
              Welcome to Beeyoond Gaming. These Terms and Conditions (“Terms”) constitute a legally binding agreement between you and Beeyoond Gaming (“we,” “us,” or “our”) governing your access to and use of our website, services, and offerings available via <a style={{color:"#fff"}} target='_blank' href="https://www.beeyoondgaming.com/">https://beeyoondgaming.com</a>. By engaging with our platform, you affirm that you have read, understood, and agreed to abide by these Terms in full. If you do not agree with these provisions, kindly refrain from accessing or utilizing our services
            </p>

            <section className={styles.section}>
              <h3>1. Acknowledgment and Acceptance of Terms</h3>
              <p>
                By accessing, browsing, or utilizing this website or any of its affiliated digital services, you expressly acknowledge and consent to be legally bound by the stipulations set forth herein. These Terms & Conditions constitute a binding agreement between the user and Beeyoond Gaming, superseding all prior understandings. Continued use of this platform shall be deemed irrefutable acceptance of all terms, including subsequent revisions effected unilaterally by the Company.
              </p>
            </section>

            <section className={styles.section}>
              <h3>2. Amendments and Revisions</h3>
              <p>
               Beeyoond Gaming reserves the unequivocal right to alter, amend, or supplement these Terms at its sole and absolute discretion, without prior obligation to notify users individually. It is incumbent upon the user to periodically consult this page for modifications. Your persistent use of the site following such changes constitutes binding assent to the revised Terms, irrespective of explicit acknowledgment.
              </p>
            </section>

            <section className={styles.section}>
              <h3>3. Ownership of Intellectual Property</h3>
              <p>
                All proprietary content including but not limited to trademarks, visual assets, source code, multimedia, textual expressions, and bespoke designs remains the exclusive intellectual property of Beeyoond Gaming or its licensors. Unauthorized duplication, reverse-engineering, republication, or transmission of any part of this content, in whole or part, shall be construed as an infringement and prosecuted to the fullest extent permissible under applicable law.
              </p>
            </section>

            <section className={styles.section}>
              <h3>4. Permissible Use and Conduct</h3>
              <p>
              All services and content are rendered “as is,” without any express or implied warranties including but not limited to merchantability, fitness for a particular purpose, or non-infringement. Beeyoond Gaming does not guarantee uninterrupted access or flawless operation, and shall bear no liability for delays, downtimes, or disruptions due to maintenance, technical failures, or external contingencies beyond its control.
              </p>
            </section>

            <section className={styles.section}>
              <h3>5. Service Availability and Disclaimer of Warranties</h3>
              <p>
                If you create an account with us, you are responsible for keeping your login information secure. Let us know right away if you believe your account has been accessed without permission.
              </p>
            </section>

            <section className={styles.section}>
              <h3>6. Limitation of Liability</h3>
              <p>
               To the maximum extent permitted by law, Beeyoond Gaming disclaims liability for any direct, indirect, consequential, incidental, or exemplary damages arising from the use or inability to use our website or services. This includes, but is not limited to, loss of data, commercial loss, reputational damage, or system failure, regardless of foreseeability or prior notice.
              </p>
            </section>

            <section className={styles.section}>
              <h3>7. Third-Party Content and External Links</h3>
              <p>
                This platform may contain integrations or hyperlinks to third-party services, platforms, or domains which are neither operated nor maintained by Beeyoond Gaming. We assume no responsibility for the accuracy, legality, or integrity of such external content. Users interact with third party elements solely at their own volition and risk, subject to the terms and privacy policies of those entities.
              </p>
            </section>
            <section className={styles.section}>
              <h3>8. Jurisdiction and Applicable Law</h3>
              <p>
              These Terms shall be construed and enforced in accordance with the substantive laws of the Republic of India. Any disputes, claims, or proceedings arising out of or relating to these Terms shall fall under the exclusive jurisdiction of the competent courts located in Madurai, Tamil Nadu. Users accessing from outside India are responsible for ensuring compliance with local laws.
              </p>
            </section>
              <section className={styles.section}>
              <h3>9. Suspension and Termination of Access</h3>
              <p>
              Beeyoond Gaming retains the irrevocable right to suspend, restrict, or permanently terminate your access to its platform without prior notice should there be reasonable suspicion of misuse, non-compliance, or breach of these Terms. Upon termination, all licenses and rights granted to the user under this Agreement shall be deemed null and void.
              </p>
            </section>

              <section className={styles.section}>
              <h3>10. Suspension and Termination of Access</h3>
              <p>
              Beeyoond Gaming retains the irrevocable right to suspend, restrict, or permanently terminate your access to its platform without prior notice should there be reasonable suspicion of misuse, non-compliance, or breach of these Terms. Upon termination, all licenses and rights granted to the user under this Agreement shall be deemed null and void.
              </p>
            </section>
            <section className={styles.section}>
              <h3>11. Legal Contact and Notices</h3>
              <p>
                For any legal correspondence, queries regarding these Terms, or issuance of formal notices, please direct all communications to the following:<br/>
                Beeyoond Gaming <br/>
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
