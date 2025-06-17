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
    title: "UI/UX Designer",
    description:
      "We are looking for an ambitious UX Designer to be a part of the UX function at Beeyoond Gaming. This new role will sit alongside our UI/UX team and report to the Head of Strategy and UX/UI Team Lead.",
    responsibilities: [
      "Conduct user research through interviews, surveys, and usability testing to gain insights into user behaviour and needs.",
      "Create wireframes, prototypes, and user flows to communicate design ideas effectively.",
      "Design intuitive and visually appealing user interfaces that align with business goals and user needs.",
      "Collaborate with cross-functional teams, including developers and product managers, to ensure designs are implemented accurately.",
      "Iterate designs based on user feedback and testing results.",
      "Maintain and contribute to a design system to ensure consistency across products.",
      "Stay up-to-date with industry trends, best practices, and emerging tools/technologies in UX design.",
    ],
    qualifications: [
      "Experience with front-end development (HTML, CSS, JavaScript) is a plus.",
      "Familiarity with agile methodologies and working in sprints.",
      "Understanding of analytics tools like Google Analytics or Hotjar to inform design decisions.",
    ],
  },
  {
    id: "2",
    title: "3D Animator",
    description:
      "We're seeking a skilled 3D Animator to breathe life into our characters and environments. You’ll work with a passionate team to create visually stunning animations for immersive gaming and fitness experiences.",
    responsibilities: [
      "Create high-quality 3D animations for characters, props, and environments.",
      "Collaborate with designers, modelers, and developers to bring ideas to life.",
      "Ensure animations run smoothly within game engines like Unity or Unreal.",
      "Participate in motion capture sessions and refine mocap data.",
      "Maintain consistent animation style across the project.",
    ],
    qualifications: [
      "Proficiency in Maya, Blender, or 3ds Max.",
      "Experience with Unity or Unreal Engine is a strong plus.",
      "Understanding of character rigging and skinning techniques.",
    ],
  },
  {
    id: "3",
    title: "Game Developer",
    description:
      "We are looking for a talented Game Developer to join our team to design and develop interactive games that integrate with fitness equipment and AR/VR systems.",
    responsibilities: [
      "Develop and maintain game code using Unity or Unreal Engine.",
      "Integrate hardware devices like treadmills and bikes into game mechanics.",
      "Collaborate with artists, designers, and testers for game polish.",
      "Implement gameplay systems, AI behaviors, and multiplayer logic.",
      "Optimize performance for smooth real-time gameplay.",
    ],
    qualifications: [
      "Strong knowledge of C# or C++.",
      "Familiarity with physics engines, animations, and rendering pipelines.",
      "Experience in VR/AR development is a bonus.",
    ],
  },
];

export default function Careers() {
  const [open, setOpen] = useState();
 const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");


  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setModalOpen(true);
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

                          <div className={styles.Button}>
                            <button className={styles.applyBtn}
                            onClick={() => handleApplyClick(job.title)}
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
