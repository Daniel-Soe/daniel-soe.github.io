"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { conferencesData, preprintsData} from '@/lib/data';

export default function Publications() {
  const { ref } = useSectionInView("Publications");

  return (
    <section className="mb-28 max-w-200 text-center leading-8 sm:mb-40 scroll-mt-28"
      id="publications" ref={ref}>
        <SectionHeading>Publications & Preprints</SectionHeading>

        

        <h2 className='text-left font-medium text-3xl mb-1' >Preprints</h2>
        <ul className='list-disc text-left text-sm sm:text-base py-2 pr-8 pl-4 text-gray-900 dark:text-white'>
            <li><a href='https://arxiv.org/abs/2604.20527' className="font-medium hover:underline underline-offset-4">Representation Cohomology of a Small Category</a> 
            {" "} (with Markus Klemetti, Ran Levi and Henri Riihimäki)</li>
          </ul>
       
    </section>
  )
}
