"use client";

import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { experienceData } from '@/lib/data';

import UniAugsburgLogo from '@/public/Uni_Augsburg_logo.png'

export default function Vita() {
  const { ref } = useSectionInView("Vita");

  return (
    <section className="scroll-mt-28 mb-28 sm:mb-40 -z-1"
      id="vita" ref={ref} >
        <SectionHeading>My CV</SectionHeading>
        <VerticalTimeline>
          {
            experienceData.map((experience, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={{
                  background: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af",
                }}
                date={experience.date}
                icon={<img src={experience.iconPath} />}
                iconStyle={{background: "white", fontSize: "1.5rem", padding:"1px"}}
                >
                  <h3 className='font-semibold capitalize'>{experience.title}</h3> 
                  <p className='font-normal mt-0!'>{experience.location}</p>
                  <p className='mt-1! font-normal! text-gray-700 dark:text-white/75'>{experience.description}</p>

                </VerticalTimelineElement>

              </React.Fragment>
              
            ))
          }
          
        </VerticalTimeline>
        
    </section>
  )
}