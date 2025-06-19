
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { HyperText } from "@/components/magicui/hyper-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import Appbar from "@/components/ui/Appbar";
import { TextAnimate } from "@/components/magicui/text-animate";
import ProjectCard from "@/components/ProjectCard";
import { TechCircles } from "@/components/ui/TechCircles";

// import { SmoothCursor } from "@/components/ui/smooth-cursor";
// import StackIcon from "tech-stack-icons";
// import TechButton from "@/components/ui/TechButton";
// import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
// import { ShimmerButton } from "@/components/magicui/shimmer-button";
// import { motion } from "motion/react";
import Cta from "@/components/ui/Cta";
import AboutTerminal from "@/components/AboutTerminal";

const defaultSpringConfig = {
  damping: 45,
  stiffness: 400,
  mass: 1,
  restDelta: 0.001,
};
export default function Home() {
  return (
    <div className="  overflow-hidden ">
      <section className="">

        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_2px),linear-gradient(to_bottom,#f0f0f0_2px,transparent_1px)] bg-[size:6rem_4rem]"></div>



        {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */}

        <Appbar />


        <main className="flex flex-col py-32 gap-5 w-full items-center ">

          <div className="flex flex-col items-center gap-1 ">


            <h1 className="wmd:text-6xl xl:9xl lg:text-9xl text-4xl w-full text-center font-panchang font-bold ">Web <AuroraText colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]} >Developer</AuroraText>  </h1>


            {/* <TechButton /> */}

          </div>
          <div className="absolute w-full h-full max-h-[50vh]">

            <TechCircles />
          </div>
          <div className="flex  justify-around  gap-2 text-lg text-center">
            <p className="w-3/4 text-2xl font-Grotesk ">Hey, my name is Shubham Lad, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users
              to know more checkout :
            </p>


          </div>
          <div className="flex justify-center w-1/2">

            <Cta />
          </div>


        </main>
        {/* <SmoothCursor springConfig={defaultSpringConfig}/> */}
      </section>
      <section className=" p-2 pb-0">
        <div className="rounded-t-[50px] rounded-3xl  text-red-50 bg-black p-6 pb-36">

          <VelocityScroll numRows={1} defaultVelocity={1} className="text-xl"> ___ PROJECTS </VelocityScroll>

          <div className="flex flex-wrap gap-5 justify-center pt-12 flex-col md:flex-row">

            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />

          </div>
        </div>
      </section>
      <section className=" flex justify-center mt-5 bg-black mx-2 rounded-3xl  ">


        {/* <div className="flex gap-8   p-6  rounded-3xl w-full max-w-6xl items-center "> */}


        {/* <div className="flex flex-col gap-2 w-1/3 items-center h-full justify-center bg-white p-8 rounded-xl ">
            <img src="/profile.jpg" className="rounded-full w-full border-4 border-black" />


            <div className="gap-2 flex flex-col w-full text-black">
              <button className='px-10  py-4 bg-black  rounded-xl w-full'>
                Instagram
              </button>
              <button className='px-10  py-4 bg-black  rounded-xl w-full'>
                Instagram
              </button>
            </div>



          </div> */}
        <div className="w-full flex items-center">

          <div className="w-2/5 border-2 rounded-2xl border-black">

            <img src="/profile.jpg" className=" w-full rounded-l-2xl " />
          </div>

          < div className="w-3/5  rounded-xl px-8">

              <span className="font-Grotesk font-bold text-xl text-white ">So here's a bit </span>
              <h3 className="text-6xl font-panchang font-bold text-white pb-4 ">about me</h3>
            
            <AboutTerminal />
          </div>
        </div>

        {/* </div> */}

      </section>
      <footer className="  border-white text-white p-2 pb-0 ">
        <div className="bg-black   p-20 pb-0   rounded-t-3xl">

          <div className="text-center p-12">
            <p className="font-mono">All copyright rights are reserved</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
