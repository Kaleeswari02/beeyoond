'use client'
import './accordian.css';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
export default function AccordianFunction(props){
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        setOpen(open === id ? undefined : id);
      };
    
    return(
        <>

            <div className='container-fluid accordian-sec'>
                <h1 className='accordian-head mb-xl-3 mb-lg-3'>FAQ</h1>
                <div>
                    <Accordion open={open} toggle={toggle}>
                        <AccordionItem>
                        <AccordionHeader targetId="1">1. How to I request a quotes?  <span style={{ float: "right" }}>{open === "1" ? "×" : "+"}</span></AccordionHeader>
                        <AccordionBody accordionId="1">
                            <ul>
                                <li>Experience with front-end development (HTML, CSS, JavaScript) is a plus. </li>
                                <li>Familiarity with agile methodologies and working in sprints. </li>
                                <li>Understanding of analytics tools like Google Analytics or Hotjar to inform design decisions. </li>
                            </ul>
                        </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                        <AccordionHeader targetId="2">2. Where is Gamecrio Studios based? <span style={{ float: "right" }}>{open === "2" ? "×" : "+"}</span></AccordionHeader>
                        <AccordionBody accordionId="2">
                            <ul>
                                <li>Experience with front-end development (HTML, CSS, JavaScript) is a plus. </li>
                                <li>Familiarity with agile methodologies and working in sprints. </li>
                                <li>Understanding of analytics tools like Google Analytics or Hotjar to inform design decisions. </li>
                            </ul>
                        </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                        <AccordionHeader targetId="3">3. What makes Gamecrio's games different from others? <span style={{ float: "right" }}>{open === "3" ? "×" : "+"}</span></AccordionHeader>
                        <AccordionBody accordionId="3">
                            <ul>
                                <li>Experience with front-end development (HTML, CSS, JavaScript) is a plus. </li>
                                <li>Familiarity with agile methodologies and working in sprints. </li>
                                <li>Understanding of analytics tools like Google Analytics or Hotjar to inform design decisions. </li>
                            </ul>
                        </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                        <AccordionHeader targetId="4">4. Do you develop games for mobile platforms?  <span style={{ float: "right" }}>{open === "4" ? "×" : "+"}</span></AccordionHeader>
                        <AccordionBody accordionId="4">
                            <ul>
                                <li>Experience with front-end development (HTML, CSS, JavaScript) is a plus. </li>
                                <li>Familiarity with agile methodologies and working in sprints. </li>
                                <li>Understanding of analytics tools like Google Analytics or Hotjar to inform design decisions. </li>
                            </ul>
                        </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                        <AccordionHeader targetId="5">5. Can Gamecrio Studios develop custom slot games for clients? <span style={{ float: "right" }}>{open === "5" ? "×" : "+"}</span></AccordionHeader>
                        <AccordionBody accordionId="5">
                            <ul>
                                <li>Experience with front-end development (HTML, CSS, JavaScript) is a plus. </li>
                                <li>Familiarity with agile methodologies and working in sprints. </li>
                                <li>Understanding of analytics tools like Google Analytics or Hotjar to inform design decisions. </li>
                            </ul>
                        </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='image-area'>
                    <img src='/assets/images/accordarrow.png' alt='accord-arrow' className='accord-arrow'/>
                </div>
            </div>
        </>
    )
}
