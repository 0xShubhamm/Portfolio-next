import ProjectCard from '@/components/ProjectCard'
import React from 'react'

export default function Page() {
    const projects = [
        {
            name: "blog-it blogs",
            description: "A simple website that lets you blog whatever you want.",
            imageurl: "/blogithome.png",
            technology: "React.js, Cloudflare, Zod, JWT, Postgresql, Prisma",
            url: "https://blogit-blogs.vercel.app",
            giturl: "https://github.com/0xshubham/medium-blog"
        },
        {
            name: "NoBunk",
            description: "Modern web application to monitor and keep records of attendance.",
            imageurl: "/nobunk.png",
            technology: "React.js, ExpressJs, TailwindCSS, Cursor, Postgresql, Prisma",
            url: "https://no-bunk-fe.vercel.app/",
            giturl: "https://github.com/0xshubham/nobunk"
        },
        {
            name: "Paytm Wallet - Basic",
            description: "Basic Paytm wallet-inspired web app to understand CRUD operations.",
            imageurl: "/paytm.png",
            technology: "React.js, ExpressJs, TailwindCSS, Cursor, MongoDB",
            url: "https://paytm-wallet-2okl.vercel.app/", 
            giturl: "https://github.com/0xshubham/paytm-wallet" 
        },
    ];

    return (
        <div className='pt-32'>
            <div className='flex flex-col max-w-screen-xl py-10 px-6'>
                <h3 className='text-3xl font-medium'>/projects</h3>
                <p className='text-lg'>
                    You have all my projects which I&apos;ve built while learning and some are college projects.
                </p>
            </div>

            <div className='flex gap-16 w-full justify-center max-w-screen-xl flex-wrap px-6'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        description={project.description}
                        imageurl={project.imageurl}
                        technology={project.technology}
                        url={project.url}
                        giturl={project.giturl}
                    />
                ))}
            </div>
        </div>
    );
}
