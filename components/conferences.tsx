"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { conferencesData, talksData } from '@/lib/data';

export default function Conferences() {
  const { ref } = useSectionInView("Conferences");

  return (
    <section className="mb-28 max-w-190 text-center leading-8 sm:mb-40 scroll-mt-28"
      id="conferences" ref={ref}>
        <SectionHeading>Talks & Conferences</SectionHeading>

        <h2 className='text-left font-medium text-3xl mb-1' >Talks</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse">
            {/* <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Title</th>
                <th className="pb-3 font-medium">Location</th>            
              </tr>
            </thead>
            */}

            <tbody className="text-sm sm:text-base">
              {talksData.map((talk, index) => (
                <tr key={index} className="align-top">
                  <td className="py-2 pr-2 sm:pr-8 text-left text-gray-600 dark:text-gray-400">
                    {talk.date}
                  </td>
                  <td className="py-2 pr-2 sm:pr-8 text-left font-medium text-gray-900 dark:text-white">
                    {talk.title}
                  </td>
                  <td className="py-2 text-left  text-gray-600 dark:text-gray-400">
                    {talk.location}
                  </td>              
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className='text-left font-medium text-3xl mb-1' >Attended Conferences</h2>
        <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        {/* <thead>
          <tr className="text-left text-sm text-gray-500">
            <th className="pb-3 font-medium">Date</th>
            <th className="pb-3 font-medium">Conference</th>
            <th className="pb-3 font-medium">Location</th>            
          </tr>
        </thead>
        */}

        <tbody className="text-sm sm:text-base">
          {conferencesData.map((conference, index) => (
            <tr key={index} className="align-top">
              <td className="py-2 pr-2 sm:pr-8 text-left text-gray-600 dark:text-gray-400">
                {conference.date}
              </td>
              <td className="py-2 pr-2 sm:pr-8 text-left font-medium text-gray-900 dark:text-white">
                {conference.title}
              </td>
              <td className="py-2 text-left  text-gray-600 dark:text-gray-400">
                {conference.location}
              </td>              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>
  )
}
