import Appbar from '@/components/ui/Appbar'
import Cta from '@/components/ui/Cta'
import { TechCircles } from '@/components/ui/TechCircles'
import React from 'react'
import Heroheading from '@/components/Heroheading'
export default function Hero() {
    return (
        <section className="">

            <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_2px),linear-gradient(to_bottom,#f0f0f0_2px,transparent_1px)] bg-[size:6rem_4rem]"></div>





            <Appbar />


            <main className="flex flex-col py-32 gap-5 w-full items-center ">

                <div className="flex flex-col items-center gap-1 ">


                    <Heroheading />
                </div>
                <div className="md:absolute w-full h-full max-h-[50vh] flex justify-center gap-2">

                    <TechCircles />
                </div>
                <div className="flex  justify-around  gap-2 text-lg text-center">
                    <p className="w-full md:text-2xl font-Grotesk ">Hey, my name is Shubham Lad

                    </p>


                </div>
                <div className="flex justify-center w-1/2">

                    <Cta />
                </div>


            </main>
            {/* <SmoothCursor springConfig={defaultSpringConfig}/> */}
        </section >
    )
}
