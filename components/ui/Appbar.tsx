"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'


function Appbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pageName = usePathname()
    console.log(pageName)
    return (
        <header className='fixed w-full flex justify-center items-center  bg-white/10 backdrop-blur-sm z-20 '>

            <div className=' flex justify-between px-4 py-6 w-full  font-spaceGrotesk '>
                <div>

                    <h1 className='text-lg flex items-center  px-2  py-4 font-bold   '>

                        <Link href={"/"}>
                            Shubham Lad :)
                        </Link>

                    </h1>

                </div>
                <nav className='flex gap-3 text-white items-center   font-bold  '>
                    <ul className='flex justify-around items-center lowercaase px-4 py-2   bg-black rounded-full '>
                        <Link href={"/"} className={` p-2  hover:underline underline-offset-4 decoration-pink-300 decoration-2 bg-black rounded-full
                        ${pageName === "/" ? "underline" : "no-underline"}`} > home </Link>

                        <span> /</span>
                        <Link href={"/work"} className={` p-2 hover:underline underline-offset-4 decoration-pink-300 decoration-2 
                        ${pageName === "/work" ? "underline" : "no-underline"}`} > work </Link>


                        <span> /</span>

                        <Link href={"/about"} className={`p-2 hover:underline underline-offset-4 decoration-pink-300 decoration-2 ${pageName === "/about" ? "underline" : "no-underline"}`}>about </Link>
                    </ul>
                </nav>



            </div>
        </header >
    )
}

export default Appbar
