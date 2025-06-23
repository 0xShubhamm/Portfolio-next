import { VelocityScroll } from '@/components/magicui/scroll-based-velocity'
import ProjectCard from '@/components/ProjectCard'
import React from 'react'

export default function Projects() {
  return (
       <section className="p-0 md:p-2 pb-0">
        <div className="md:rounded-t-[50px] rounded-t-3xl md:rounded-3xl  text-red-50 bg-black p-6 pb-36 ">

          <VelocityScroll numRows={1} defaultVelocity={1} className="text-xl"> ___ PROJECTS </VelocityScroll>

          <div className="flex flex-wrap gap-5 justify-center pt-12 flex-col md:flex-row w-full ">

            <ProjectCard />            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />

          </div>
        </div>
      </section>
  )
}
