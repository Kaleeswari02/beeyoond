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
                            <ul className='listedit'>
                                <li>Requesting a quote is simple! Just reach out to us through our contact form, email us, or give us a call. Share a brief overview of your project — including your goals, timelines, and any specific requirements — and our team will get back to you with a tailored proposal as soon as possible </li>
                            </ul>
                        </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                        <AccordionHeader targetId="2">2. Where is Beeyoond Gaming based? <span style={{ float: "right" }}>{open === "2" ? "×" : "+"}</span></AccordionHeader>
                        <AccordionBody accordionId="2">
                                <ul className='listedit'>
                                <li>Beeyoond Gaming is proudly based in India, operating as a creative technology studio under the Sportstech umbrella. We collaborate with global partners while delivering world-class digital experiences from our Indian headquarters. </li>
                            </ul>
                        </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                        <AccordionHeader targetId="3">3. What makes Beeyoond Gaming different from others?<span style={{ float: "right" }}>{open === "3" ? "×" : "+"}</span></AccordionHeader>
                        <AccordionBody accordionId="3">
                                <ul className='listedit'>
                                <li>Beeyoond Gaming stands out for its unique blend of creativity, innovation, and purpose-driven design. As a Sportstech Venture, we combine deep industry expertise with a passion for storytelling, delivering immersive games, cinematic visuals, and interactive digital experiences that resonate emotionally.
                                 </li>
                                 <li>What truly sets us apart is our commitment to inclusivity, user engagement, and pushing creative boundaries — turning bold ideas into unforgettable realities for players and clients worldwide.</li>
                            </ul>
                        </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                        <AccordionHeader targetId="4">4. Do you develop games for mobile platforms?<span style={{ float: "right" }}>{open === "4" ? "×" : "+"}</span></AccordionHeader>
                        <AccordionBody accordionId="4">
                                <ul className='listedit'>
                                <li>Yes, absolutely! At Beeyoond Gaming, we specialize in developing high-quality games for mobile platforms, including both iOS and Android. From casual experiences to feature-rich casino and slot games, our mobile titles are optimized for performance, engagement, and immersive gameplay across all devices</li>
                            </ul>
                        </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                        <AccordionHeader targetId="5">5. Can Beeyoond Gaming develop custom slot games for clients?<span style={{ float: "right" }}>{open === "5" ? "×" : "+"}</span></AccordionHeader>
                        <AccordionBody accordionId="5">
                                <ul className='listedit'>
                                <li>Yes, we specialize in developing fully custom slot games tailored to your brand, audience, and business goals. From concept design and unique game mechanics to rich visuals, sound, and seamless platform integration — Beeyoond Gaming delivers end-to-end slot game development solutions that stand out in the market.
                                </li>
                                <li>As a Sportstech Venture, we combine creative innovation with technical excellence to bring your vision to life. </li>
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
