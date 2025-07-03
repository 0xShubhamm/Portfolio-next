import TechIcons from "@/components/TechIcons";
import Link from "next/link";

export default function page() {
  return (
    <div className=''>

      <div className='flex flex-col md:flex-row gap-5 md:gap-16 w-full  md:items-start  justify-center  pt-32 max-w-screen-lg  pb-6'>

        <div className=' flex flex-col items-center gap-4'>
          < img src="/profileColor.jpg" className='rounded-3xl md:max-w-sm block shadow-solid ' />
          <TechIcons type='about' />

        </div>

        <div className="flex flex-col gap-2 item-start pt-10 md:pt-0 p-1">
          <p className="w-full  font-medium text-2xl ">hello world, <i>@shubham_lad</i> this side :)<br />
          </p>
          <div className='flex gap-2   '>
            <span className='w-fit bg-black py-2 px-4 rounded-md text-white'>(btw i am a developer)</span>
            <li className="flex gap-2 items-center  font-bold hover:underline underline-offset-4 decoration-pink-300 border-2 border-black rounded-full px-2 "><img src="/github.svg" className="w-6 p-1 " /><Link href={"http://github.com/imthanos36"} target="_blank">github</Link> </li>
            <li className="flex gap-2 items-center font-bold hover:underline underline-offset-4 decoration-pink-300 border-2 border-black rounded-full px-2"><img src="/linkedin.svg" className="w-6" /> <Link href={"/"} target="_blank">linkedin</Link></li>
          </div>
          <p>    and all projects here <img src="/app-computer-desktop-svgrepo-com.svg" className="w-4 inline mx-1" alt="desktop" />: <i className='underline decoration-black'><Link href={"/work"} className='bg-pink-200 rounded-md px-2'>/work</Link></i></p>



          <p className='text-lg pt-6  flex items-center '>reading about me is boring so checkout me here also<img src="/prickly-pear.svg" alt="prickly-pear" className="w-6 inline mx-1 " />:)</p>
          <span className='font-medium'>{'const socials = {'}</span>
          <ul className='pb-4 pl-4'>
            <li className="flex gap-2 items-center hover:underline underline-offset-4 decoration-pink-300"><img src="/github.svg" className="w-5" /><Link href={"http://github.com/imthanos36"} target="_blank">: github</Link> </li>
            <li className="flex gap-2 items-center hover:underline underline-offset-4 decoration-pink-300"><img src="/linkedin.svg" className="w-5" /> <Link href={"/"} target="_blank">: linkedin</Link></li>
            <li className="flex gap-2 items-center hover:underline underline-offset-4 decoration-pink-300"><img src="/twitter.svg" className="w-5" /> <Link href={"/"} target="_blank">: twitter</Link></li>
            <li className="flex gap-2 items-center hover:underline underline-offset-4 decoration-pink-300"><img src="/instagram.svg" className="w-5" /> <Link href={"/"} target="_blank">: instagram</Link></li>
          </ul>
          <span className="font-medium">{'}'}</span>

          <p className=" underline decoration-pink-300 underline-offset-4  text-lg font-normal">
            if you wanna know more about me then, <br />  here&apos;s more about me
            <Link href={"#about-me-section"}>
              <img
                src="/down-arrow.svg"
                className="inline w-5 ml-4 align-middle"
                alt="down arrow"
              />

            </Link>
          </p>




        </div>
      </div>
      <hr />


      <ul className=' p-2  ' id="about-me-section font-spaceGrotek">

        <li className='font-medium underline decoration-pink-300 underline-offset-4 py-4  flex items-center gap-1 text-lg'>bit more about me <img src="/pixelheart.svg" alt="pixelheart" className="w-4 inline " /></li>
        <div className="pl-6 border-l border-gray-300">


          <p className='pb-2 font-light  text-lg'>apart from the tech i like to wear my <b> headphones</b> and listen to different type of music (depend on my mood) everyday and i like to go for treking and i like mountains and i love this part of my life so much checkout my @instagram to know more about this</p>
         


        </div>



        <li className='font-medium underline decoration-pink-300 underline-offset-4 py-4 flex items-center  gap-1 text-lg'>lets talk about my education <img src="/student.svg" alt="avatar" className="w-4 inline " /></li>
        <div className="pl-6 border-l  border-gray-300 font-light">

          <p className='text-lg'> i am  diploma 2025 passout student, i&apos;ve done my <b> diploma in computer science and engineering </b> from @#&%$ (worst collage possible), so i am now taking admission to good collage for my higher studies i&apos;ll be completing my b.tech engineering in 2028 (Expected) , and i got <b> 86.80% in 10th SSC (i am proud of myself) </b>   </p>
        </div>
        <li className='font-medium underline decoration-pink-300 underline-offset-4 py-4 flex items-center  gap-1 text-lg'>apart from this <img src="/student.svg" alt="avatar" className="w-4 inline " /></li>
        <div className="pl-6 border-l  border-gray-300 font-light">

          <p className='text-lg'> <b> i wrote poems and write songs sometimes (for one of my favourite dream...)</b> i&apos;m fine so where we yah you can checkout all that on my website called <b> <Link href={"https://blogit-blogs.vercel.app"}
          className="italic"
          >blogit-blogs</Link> </b>, and yah i do like travelling and while traveling observing other peoples living and their life and for me central bus stand is filled with lots of stories daily so its my favourite place for this  </p>
        </div>
      </ul>
    </div>
  )
}
