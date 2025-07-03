import ProjectCard from '@/components/ProjectCard'
import { div } from 'framer-motion/client'
import React from 'react'

export default function page() {
    return (
        <div className='pt-32 ' >
            <div className='flex flex-col items max-w-screen-xl py-10 p-6'>
                <h3 className='text-3xl font-medium'>/projects</h3>
                <p className='text-lg '>you have all my projects which i've build while learning and some are collage projects.</p>
            </div>
            <div className='flex gap-16 w-full justify-center  max-w-screen-xl flex-wrap'>


                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}
