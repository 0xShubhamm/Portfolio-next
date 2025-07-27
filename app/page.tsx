import Projects from '@/components/Projects'
import TechIcons from '@/components/TechIcons'
import Link from 'next/link'
import React from 'react'

export default function App() {


  return (
    <section >


      <div className='p-4 max-w-screen-lg pb-10'>


        <div className='flex flex-col md:flex-row gap-5 md:gap-16 w-full  md:items-start  justify-center  pt-32 pb-12 max-w-screen-lg '>

          <div className=' flex flex-col items-center gap-4 '>
            < img alt='profile'  src="/profileBW.jpg" className='rounded-3xl md:max-w-sm block shadow-solid ' />

            <TechIcons type='work' />


          </div>

          <div className="flex flex-col gap-2 item-start pt-10 md:pt-0 p-1">
            <p className="w-full  font-medium text-2xl ">hello world, <i><Link href={"/about"}>@shubham_lad</Link> </i> this side :)<br />
            </p>


            <div className='flex gap-2   '>
              <span className='w-fit bg-black py-2 px-4 rounded-md text-white'>(btw i am a developer)</span>
              <li className="flex gap-2 items-center  font-bold hover:underline underline-offset-4 decoration-pink-300 border-2 border-black rounded-full px-2 "><img alt='github' src="/github.svg" className="w-6 p-1 " /><Link href={"http://github.com/imthanos36"} target="_blank">github</Link> </li>
              <li className="flex gap-2 items-center font-bold hover:underline underline-offset-4 decoration-pink-300 border-2 border-black rounded-full px-2"><img alt='linkedin' src="/linkedin.svg" className="w-6" /> <Link href={"/"} target="_blank">linkedin</Link></li>
            </div>
            <p className='text-lg font-medium mt-5 pl-4 border-l-2 border-black/50'>  i am tech student pursuing b.tech in computer science and have good intrest in building web pages and servers  </p>

            <div className='py-5'>

              <p className='text-lg font-medium'> i am learning and working in these technologies {'{'}</p>
              <ul className='text-base px-2 py-4'>
                <li className='font-medium' >frontend : <span className='font-normal'>{'[react.js, next.js, tailwindcss, react query tailwindcss ]'}</span></li>
                <li className='font-medium'>backend : <span className='font-normal'>{'[express.js, nextJs,jwt,postgresql,mongodb, zod, npm]'}</span></li>
                <li className='font-medium'>technologies : <span className='font-normal'>{'[docker,vim, git, github,postman]'}</span></li>
              </ul>
              <p className='text-lg font-medium'>{'}'}</p>

            </div>
            <div className='font-medium'>

              <p>   you can checkout all about me here <img src="/avatar.svg" alt="developer" className="w-6 inline mx-1" />: <i className='underline decoration-black'><Link href={"/about"} className='bg-pink-200 rounded-md px-2'> /about</Link> </i></p>
              <p>    and all projects here <img src="/app-computer-desktop-svgrepo-com.svg" className="w-4 inline mx-1" alt="desktop" />: <i className='underline decoration-black'><Link href={"/work"} className='bg-pink-200 rounded-md px-2'>/work</Link></i></p>
            </  div>

          </div>
        </div>
        <hr />
        <Projects />
      </div>
    </section >
  )
}
