"use client"
import React, { useState } from 'react'
import { motion } from "motion/react"
import { easeInOut } from 'framer-motion'
import Image from 'next/image'


function Appbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className='flex justify-between px-4 py-6  text-white w-full gap-5   rounded-full'>
            <div className=' flex items-center  px-10  py-4   rounded-full bg-black border-blue-600  font-panchang font-bold border-4  md:text-xl text-base'>
                Shubham Lad :)
            </div>
            <nav className=' w-1/2 rounded-full bg-black  text-lg font-Grotesk hidden md:block  '>
                <ul className='flex justify-around items-center px-10 py-2 h-full '>
                    <li className='p-2'>Home</li>
                    <li className='p-2'>Projects</li>
                    <li className='p-2'>About</li>
                </ul>
            </nav>
            <div className=' md:flex items-center  px-10 py-4  rounded-full bg-black  border-4 border-purple-700  gap-4   font-panchang hidden  '>
                <Image src="/spotify.png" alt="" className='w-10' />
                <div className='text-sm text-center hidden sm:block'>

                    <p className=' '>Let's Connect </p>
                    <span className=''>Through Music</span>
                </div>
            </div>
            <button className='z-30 md:hidden visible bg-black rounded-full w-16 h-16 text-white flex items-center justify-center border-4 border-violet-600 ' onClick={() => {
                setIsOpen(!isOpen)
            }}>
                menu
            </button>
            {isOpen ? <motion.div className='z-20 transition-transform ease-in-out absolute left-0 top-0 bg-black h-full w-full'

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    duration: 0.2,
                    ease: easeInOut,
                    repeatType: "mirror"
                }}
            >





                <li>Projects</li>
                <li>About Me</li>
                <li>Get In Touch</li>



            </motion.div> : ""}
        </header >
    )
}

export default Appbar
