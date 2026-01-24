"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";

export default function About() {
  const { ref } = useSectionInView("About");
  

  return (
    <motion.section className="mb-28 max-w-240 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about" ref={ ref } >
        <SectionHeading>About me</SectionHeading>
        <p className='text-xl font-normal sm:leading-13 sm:text-3xl'>
            I am a PhD student at the University of Aberdeen, supervised by <a href='https://www.abdn.ac.uk/people/r.levi' className='font-bold hover:underline'> Ran Levi</a>. 
            My research lies in algebraic topology, with a particular focus on fusion systems and the relationship between classifying spaces and linking systems. 
            I am also interested in category theory and its applications to computer science as well as topological data analysis.
        </p>
    </motion.section>
  )
}
