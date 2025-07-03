"use client"

import { motion } from "motion/react"
import Link from "next/link";

export default function ProjectCard() {
    const project = {
        name: "blog-it blogs",
        description: "a simple website that lets you blog whatever you want.",
        imageurl: "/blogit.png",
        technology: "React.js, Cloudflare, Zod",
        url: "https://blogit-blogs.vercel.app"
    }

    return (

        <div

            className={` rounded-xl p-4  shadow-solid border border-black gap-5`}
        >
            <div className="max-w-xs" >
                <Link href={project.url} target="_blank">
                    <motion.img
                        src={project.imageurl}
                        alt={project.name}
                        className="aspect-video object-cover rounded-md mb-4 hover:shadow-lg border border-gray-300"
                        initial={{ scale:1 }}
                        whileHover={{scale:2 }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut"
                        }}
                    />
                </Link>
                <div className="">
                    <h2 className="text-xl font-semibold text-black">{project.name}</h2>
                    <p className="text-gray-900">{project.description}</p>
                    <p className="text-base text-gray-700 mt-2"><b>Technologies:</b> {project.technology}</p>

                    <div className="flex gap-1 w-full py-6">

                        <Link href={project.url} className="px-2 py-2 bg-black text-white rounded-md  w-1/2  flex justify-center">live</Link>
                        <Link href={project.url} className="px-2 py-2 bg-black text-white rounded-md  w-1/2  flex justify-center">github</Link>
                    </div>
                </div>

            </div>
           
        </div>

    );
}
