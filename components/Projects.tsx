"use client"

import { motion } from "motion/react"
import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            name: "blog-it blogs",
            description: "a simple website that lets you blog whatever you want.",
            imageurl: "/blogithome.png",
            technology: "React.js, Cloudflare, Zod, JWT, Postgresql, Prisma",
            url: "https://blogit-blogs.vercel.app",
            giturl:"https://github.com/0xShubhamm/medium-blog"
        },
        {
            name: "NoBunk",
            description: "modern web application to monitor and keep records of attendance",
            imageurl: "/nobunk.png",
            technology: "React.js, ExpressJs, TailwindCSS, Cursor, Postgresql, Prisma",
            url: "https://no-bunk-fe.vercel.app/",
            giturl: "https://github.com/0xShubhamm/nobunk"
        },
        {
            name: "Paytm Wallet - Basic",
            description: "Basic payTM wallet insprired web app to understand CRUD Opperation",
            imageurl: "/paytm.png",
            technology: "React.js, ExpressJs, TailwindCSS, Cursor, MongoDB",
            url: "https://no-bunk-fe.vercel.app/",
            giturl: "https://github.com/0xShubhamm/paytm-wallet"
        },
    
       
    ];

    return (
        <div className="p-4 space-y-6">


            <p className='text-lg font-medium'>   below are my best projects :)</p>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={` rounded-xl p-4  shadow-solid border border-black md:flex gap-5 ${(index + 1) % 2 == 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                    <div className="md:w-1/2" >
                        <Link href={project.url} target="_blank">
                            <motion.img
                                src={project.imageurl}
                                alt={project.name}
                                className="aspect-video object-cover rounded-md mb-4 hover:shadow-lg border border-gray-300"
                                initial={{ scale: 1 }}
                                whileHover={{ scale:1.2}}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeInOut"
                                }}
                            />
                        </Link>
                        <div className="block md:hidden">
                            <h2 className="text-xl font-semibold text-black">{project.name}</h2>
                            <p className="text-gray-900">{project.description}</p>
                            <p className="text-base text-gray-700 mt-2"><b>Technologies:</b> {project.technology}</p>

                            <div className="flex gap-1 w-full py-6">

                                <Link href={project.url} className="px-2 py-2 bg-black text-white rounded-md  w-1/2  flex justify-center">live</Link>
                                <Link href={project.url} className="px-2 py-2 bg-black text-white rounded-md  w-1/2  flex justify-center">github</Link>
                            </div>
                        </div>

                    </div>
                    <div className="md:w-1/2 flex items-center">
                        <div className="hidden md:block">

                            <h2 className="text-2xl font-semibold text-black">/ {project.name}</h2>
                            <p className="text-lg text-gray-900">{project.description}</p>
                            <p className="text-base text-gray-700 mt-2"><b>Technologies:</b> {project.technology}</p>

                            <div className="flex gap-1 w-full py-6">

                                <Link href={project.url} className="px-2 py-2 bg-black text-white rounded-md  w-1/2  flex justify-center">live</Link>
                                <Link href={project.giturl} className="px-2 py-2 bg-black text-white rounded-md  w-1/2  flex justify-center">github</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
