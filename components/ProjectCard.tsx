import Image from 'next/image'
import React from 'react'

function ProjectCard() {
    return (
        <div className=" w bg-white rounded-xl border-white border-2 font-Grotesk max-w-md">
            <div className=" border-b-2 border-black">
                <img src='/image.png' alt='' className='aspect-video object-cover rounded-t-xl' />
            </div>
            <div className='text-black p-4 text-lg w-full'>

                <span className='font-bold'>Blog-it Blogs</span>
                <div className='flex gap-2 w-full text-white list-none text-center'>

                    <li className=' bg-black w-1/2  p-2 rounded-xl'>Github</li>
                    <li className=' bg-black w-1/2 p-2 rounded-xl'>Live</li>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard