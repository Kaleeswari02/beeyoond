"use client";
import React, { useState } from "react";
import styles from "./careers.module.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Footer from "../footer/page";
import Header from "../Header/page";
import JobApplicationModal from "./jobform";


const jobList = [
  {
    id: "1",
    title: "2D Artist",
    description: (
      <>
        We’re Hiring: 2D Artist (3+ Years Experience)<br /><br />
        Company: BEEYOOND GAMING<br />
        Location: Madurai, Tamil Nadu<br />
        Experience: 3+ Years<br />
        Employment Type: Full-Time
      </>
    ),
    responsibilities: [
      "Create high-quality 2D assets such as characters, environments, props, and UI elements.",
      "Perform advanced image manipulation (photobashing, compositing, retouching).",
      "Enhance and modify existing assets while maintaining visual consistency.",
      "Collaborate with designers, animators, and developers to integrate artwork.",
      "Contribute creatively to new visual directions and follow established visual guidelines.",
      "Prepare artwork for animation and production pipelines.",
      "Maintain organized file structures and asset libraries."
    ],
    qualifications: [
      "Bachelor’s degree in fine arts, Graphic Design, Animation, or related field (preferred).",
      "3+ years of professional experience in 2D art and image manipulation.",
      "Proficiency in Adobe Photoshop, Illustrator, and design tools.",
      "Expertise in photo manipulation, matte painting, and compositing.",
      "Strong understanding of color theory, lighting, composition, and storytelling.",
      "Ability to work in both realistic and stylized art styles.",
      "Strong communication skills and openness to feedback.",
      "A strong portfolio is a must — show versatility and creativity."
    ]
  },
  {
    id: "2",
    title: "Android Developer (Native) – IoT Projects",
    description: (
      <>
        We’re Hiring: Android Developer (Native) – IoT Projects<br />
        Location: Madurai<br />
        Focus: Smart, connected solutions for next-gen devices
      </>
    ),
    responsibilities: [
      "Develop native Android applications in Kotlin and/or Java.",
      "Collaborate with IoT and embedded systems engineers.",
      "Integrate wireless protocols: BLE, Wi-Fi, NFC, MQTT.",
      "Design real-time data visualization and device management UIs.",
      "Optimize app performance and battery usage in IoT use cases.",
      "Ensure seamless UX in connected environments."
    ],
    qualifications: [
      "2+ years of Android development experience.",
      "Strong knowledge of Kotlin (preferred) or Java.",
      "Experience integrating Android apps with IoT devices.",
      "Familiarity with BLE, MQTT, WebSockets, Firebase.",
      "Experience with APIs, device data, and background services.",
      "Strong understanding of performance, security, and connectivity issues."
    ]
  },
  {
    id: "3",
    title: "Graphic Designer with Video Editing Expertise",
    description: (
      <>
        We’re Hiring: Graphic Designer with Video Editing Expertise<br />
        Location: Madurai | Experience: 2+ Years
      </>
    ),
    responsibilities: [
      "Design graphics, layouts, and assets for digital and print media.",
      "Edit and produce high-quality videos for various campaigns.",
      "Collaborate with animation team to deliver on-brand content.",
      "Contribute to brainstorming and shape visual storytelling.",
      "Maintain brand consistency across all outputs.",
      "Manage multiple creative projects and meet deadlines.",
      "Stay updated with design trends and tools."
    ],
    qualifications: [
      "Degree in Graphic Design/Multimedia or relevant experience.",
      "2+ years of graphic design and video editing experience.",
      "Proficient in Photoshop, Illustrator, Premiere Pro, After Effects.",
      "Bonus: Knowledge of 3D software like Blender or Maya.",
      "Solid typography, color theory, and layout skills.",
      "Attention to detail and storytelling ability.",
      "Strong communication and organizational skills."
    ]
  },
  {
    id: "4",
    title: "2D Animator & 3D Artist",
    description: (
      <>
        URGENT HIRING – 2D Animator & 3D Artist<br />
        Location: Madurai, Tamilnadu
      </>
    ),
    responsibilities: [
      "Create high-quality 2D and 3D animations.",
      "Collaborate with game designers and creative leads.",
      "Deliver motion graphics and animations with precision.",
      "Work on fitness, product, or motion design animation tasks.",
      "Model and texture realistic or stylized 3D assets.",
      "Rig and animate characters or mechanical elements."
    ],
    qualifications: [
      "Strong portfolio with fitness/product animation work.",
      "Expertise in After Effects, Photoshop, Illustrator, Premiere Pro.",
      "3D proficiency with Blender, Maya, or Cinema4D.",
      "Experience with V-Ray, Unreal, or Cycles rendering.",
      "Understanding of anatomy, movement, and cinematic lighting.",
      "Strong storytelling and visual communication skills."
    ]
  }
];

export default function Careers() {
  const [open, setOpen] = useState();
 const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");


  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setModalOpen(true);
  };
 const handleApplyClick1 = (role) => {
    const subject = encodeURIComponent(`Application for ${role} role at Beeyoond`);
    const body = encodeURIComponent(`Hi Beeyoond team,\n\nI'm interested in the ${role} position. Please find my resume attached.\n\nBest regards,\n[Your Name]`);
    window.location.href = `mailto:info@beeyoondgaming.com?subject=${subject}&body=${body}`;
  };

  
  const toggle = (id) => {
    setOpen(open === id ? undefined : id);
  };

  return (
    <>
      <Header />

      <div className={`container-fluid ${styles.careerSection}`}>
          <img src='/assets/images/overlay-bg.png' className={styles.careerOvrlay}/>
          {/* <div className={styles.careerOvrlay}/> */}
            <h1 className={`${styles.careerTitle} text-start mt-2 md-mb-5`}>
              Join Our Creative Team
            </h1>

            <p className={`${styles.careerIntro} text-center md-p-5`}>
              Shape the future of digital innovation with Beeyoond Gaming, where
              creativity meets technology. Join a team that’s redefining what’s
              possible in animation, game development, and immersive digital
              experiences. Explore exciting opportunities to work on
              groundbreaking projects in a dynamic, collaborative environment.
              Here, your ideas matter, your growth is supported, and your impact
              is real. Let’s build something extraordinary — together.
            </p>

          <div className="md-mt-5">
            <h2 className={`${styles.currentOpening} md-mt-5`}>Current Openings</h2>
          </div>

          <div className={`container-fluid ${styles.accordianSec} md-mt-5`}>
            <div className={styles.accordion}>
              <Accordion open={open} toggle={toggle}>
                {jobList.map((job) => (
                  <AccordionItem key={job.id}>
                    <AccordionHeader targetId={job.id}>
                      {job.title}
                      <span style={{ float: "right" }}>
                        {open === job.id ? "×" : "+"}
                      </span>
                    </AccordionHeader>
                    <AccordionBody accordionId={job.id}>
                      <div className={styles.jobCard}>
                        <p>{job.description}</p>

                        <h5>Primary Responsibilities</h5>
                        <ul>
                          {job.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>

                        <h5>Preferred Qualifications</h5>
                          <ul className={styles.qualList}>
                            {job.qualifications.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>

                          {/* <div className={styles.Button}>
                            <button className={styles.applyBtn}
                            onClick={() => handleApplyClick(job.title)}
                            >Apply now</button>
                          </div> */}
                           <div className={styles.Button}>
                            <button className={styles.applyBtn}
                            onClick={() => handleApplyClick1(job.title)}
                            >Apply now</button>
                          </div>
                          
                      </div>
                    </AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
      </div>

      {/* </div> */}
      <Footer />
       <JobApplicationModal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        jobTitle={selectedJob}
      />
    </>
  );
}
