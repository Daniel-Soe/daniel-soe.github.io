"use client";

import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion"
import profile from '@/public/daniel.jpg'
import { useSectionInView } from '@/lib/hooks';
import { MdEmail } from 'react-icons/md';
import { FaGithubSquare } from 'react-icons/fa';


export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);


  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-100'
        id="home" ref={ref}>
        <div className='flex items-center justify-center'>
            <motion.div 
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity:1, scale: 1 }}
                transition={{ type: "tween", duration: 0.2, }}
            >
                <Image src={profile} alt='Daniel Sölch portrait' priority={true} 
                className='h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
            </motion.div>
        </div>

        <motion.section className='mb-10 mt-5 px-4 text-2xl font-medium leading-normal! sm:text-4xl'
                initial={{ opacity: 0, y: 100}}
                animate={{ opacity:1, y: 0 }}
                transition={{ type: "tween", duration: 0.2, }}>
            <h1 className='text-4xl mb-4 font-bold' >Daniel Sölch</h1>
            <p>
                I am a PhD student in mathematics at the University of Aberdeen, working in algebraic topology.
                {/* I am currently a PhD student at the University of Aberdeen. My research under Professor Ran Levi is centred around Fusion Systems. */}
            </p>
        </motion.section>
        
        <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        >
                        <a
            href={`mailto:d.solch.24@abdn.ac.uk`}
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            >
            <MdEmail size={22} className="opacity-70 group-hover:translate-x-1 transition" />
            d.solch.24@abdn.ac.uk
            </a>
            {/*
            <a
            href={`mailto:daniel.solch@abdn.ac.uk`}
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            >
            <MdOutlineEmail size={22} className="opacity-70 group-hover:translate-x-1 transition" />
            daniel.solch@abdn.ac.uk
            </a>

            <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Daniel-Soe"
            target="_blank"
            >
            <FaGithubSquare />
            </a>
            LinkdIn
            */}
        </motion.div>


    </section>
  )
}
