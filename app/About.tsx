import AboutTerminal from '@/components/AboutTerminal'
import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <section className=" flex justify-center md:mt-5 bg-black md:my-2 md:mx-2  md:rounded-3xl ">
            <div className="w-full flex items-center md:flex-row flex-col">

                <div className="md:w-2/5 md:border-2 rounded-3xl md:border-black ">

                    {/* <Image src="/profile.jpg" className=" w-full  rounded-3xl  md:rounded-none md:p-1 p-2 md:rounded-l-3xl " alt='my image' width={120} height={100}/> */}
                    <img src="/profile.jpg"className=" w-full  rounded-3xl  md:rounded-none md:p-1 p-2 md:rounded-l-3xl " alt="" />
                </div>

                < div className="md:w-3/5 w-full rounded-xl px-2 py-4 md:px-8 md:py-0 min-h-[50vh]">

                    <span className="font-Grotesk font-bold text-xl text-white ">So here &apos;s a bit </span>
                    <h3 className="md:text-6xl text-3xl font-panchang font-bold text-white pb-4 ">about me</h3>

                    <AboutTerminal />
                </div>
            </div>

            {/* </div> */}

        </section>
    )
}
