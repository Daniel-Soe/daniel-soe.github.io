"use client";

import React from 'react'
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { experienceData } from '@/lib/data';



export default function Vita() {
  const { ref } = useSectionInView("Vita", 0.2);

  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 -z-1"
      id="vita" ref={ref} >
      <SectionHeading>My Academic Career</SectionHeading>
      <div className="relative mx-auto max-w-6xl">
      {/* Linie */}
      <div className="absolute left-4 top-0 h-full w-px bg-gray-300 md:left-1/2 md:-translate-x-1/2 dark:bg-gray-700" />

      <ul className="space-y-20">
        {experienceData.map((item, index) => {
          {/* const isLeft = index % 2 === 0; */}
          const isLeft = item.isLeft === "true";

          return (
            <li key={index} className="relative">
              {/* Punkt */}
              <div className="absolute left-4 z-10 flex h-15 w-15 -translate-x-1/2 items-center justify-center rounded-full border bg-white shadow md:left-1/2 md:-translate-x-1/2 dark:border-gray-700 dark:bg-gray-900">
                <Image
                  src={item.iconPath}
                  alt=""
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>


              {/* Inhalt */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={` 
                  relative
                  ml-14 md:ml-0
                  md:w-[62%]
                  ${isLeft ? "md:mr-auto md:pr-27" : "md:ml-auto md:pl-27"}
                `}
              >
                {/* Arrow */}
                <div
                  className={`
                    absolute top-7 hidden -translate-y-1/2 md:block z-10
                    ${isLeft ? "right-25" : "left-25"}
                  `}
                >
                  <div
                    className={`
                      h-0 w-0
                      border-y-8 border-y-transparent
                      ${isLeft
                        ? "border-l-8 border-l-gray-500 dark:border-l-gray-900"
                        : "border-r-8 border-r-gray-500 dark:border-r-gray-900"}
                    `}
                  />
                </div>
                {/* Date (Desktop) */}
                <span   className={`
                    absolute top-7 hidden -translate-y-1/2 md:block
                    text-sm text-gray-500 whitespace-nowrap
                    ${isLeft
                      ? "left-[80%] ml-12 text-left"
                      : "right-[80%] mr-12 text-right"}
                  `}>
                    {item.date}
                </span>

                {/* Box */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
                  {/* Date (Mobile) */}
                  <span className="mb-2 -mt-1 block text-sm text-gray-500 md:hidden">
                    {item.date}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white -mt-2">
                    {item.title}
                  </h3>

                  {item.location && (
                    <p className="text-sm text-gray-500">{item.location}</p>
                  )}

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>

        
    </section>
  )
}