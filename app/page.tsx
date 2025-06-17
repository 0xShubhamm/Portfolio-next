
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

        <div className="absolute inset-0 -z-10 h-[90vh] w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_2px),linear-gradient(to_bottom,#f0f0f0_2px,transparent_1px)] bg-[size:6rem_4rem]"></div>



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
        <div className="rounded-t-[50px] rounded-xl  text-red-50 bg-black p-6">

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
      <section className="p-6 py-28 flex justify-center bg-black mt-5">

        <div className="flex gap-6   p-6 bg-white rounded-xl w-full max-w-3xl">


          <div className="flex flex-col gap-2 w-1/3 items-center h-full justify-center ">
            <img src="/profile.jpg" className="rounded-full w-full border-4 border-black" />


            <div className="gap-2 flex flex-col w-full">
              <button className='px-10  py-4 bg-black text-white rounded-xl w-full'>
                Instagram
              </button>
              <button className='px-10  py-4 bg-black text-white rounded-xl w-full'>
                Instagram
              </button>
            </div>



          </div>


          <div className="w-2/3 h-min">

            <Terminal>
              <TypingAnimation className=" w-full">&gt; pnpm dlx shadcn@latest init</TypingAnimation>

              <AnimatedSpan delay={1500} className="text-green-500">
                <span>✔ Preflight checks.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2000} className="text-green-500">
                <span>✔ Verifying framework. Found Next.js.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2500} className="text-green-500">
                <span>✔ Validating Tailwind CSS.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={3000} className="text-green-500">
                <span>✔ Validating import alias.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={3500} className="text-green-500">
                <span>✔ Writing components.json.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={4000} className="text-green-500">
                <span>✔ Checking registry.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={4500} className="text-green-500">
                <span>✔ Updating tailwind.config.ts</span>
              </AnimatedSpan>

              <AnimatedSpan delay={5000} className="text-green-500">
                <span>✔ Updating app/globals.css</span>
              </AnimatedSpan>

              <AnimatedSpan delay={5500} className="text-green-500">
                <span>✔ Installing dependencies.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={6000} className="text-blue-500">
                <span>ℹ Updated 1 file:</span>
                <span className="pl-2">- lib/utils.ts</span>
              </AnimatedSpan>

              <TypingAnimation delay={6500} className="text-muted-foreground">
                Success! Project initialization completed.
              </TypingAnimation>

              <TypingAnimation delay={7000} className="text-muted-foreground">
                You may now add components.
              </TypingAnimation>
            </Terminal>


          </div>

        </div>

      </section>
      <footer className="bg-white text-black p-20 ">
        copyrights reserved to shubham lad
      </footer>

    </div>
  );
}
