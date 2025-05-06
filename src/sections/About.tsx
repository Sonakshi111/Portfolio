'use client';
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import HTMLIcon from "@/assets/icons/html5.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PythonIcon from "@/assets/icons/logo-python.svg";
import StarIcon from "@/assets/icons/star.svg";
import { motion } from "framer-motion";
import { useRef } from "react";


const toolboxItems = [
  {
    title: 'HTML',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS',
    iconType: CSSIcon,
  },
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  // {
  //   title: 'Python',
  //   icon: <PythonIcon/>,
  // },
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: "5%",
    top: '5%',
  },
  {
    title: 'Reading',
    emoji: '📖',
    left: "50%",
    top: '15%',
  },
  {
    title: 'Music',
    emoji: '🎶',
    left: "15%",
    top: '35%',
  },
  {
    title: 'Travel',
    emoji: '🧳',
    left: "60%",
    top: '40%',
  },
  {
    title: 'Badminton',
    emoji: '🏸',
    left: "5%",
    top: '65%',
  },
  {
    title: 'Craft',
    emoji: '✂️',
    left: "45%",
    top: '75%',
  },
]

export const AboutSection = () => {
  const constraintRef =useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">

      <div className="container">

        <SectionHeader eyebrow="About Me" title="A Glimpse into my world" description="Learn more about who I am, what I do and what inspires me." />

        <div className=" md:grid md:grid-cols-2 md:gap-8">

          <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-0 pt-4  md:pt-6 md:mt-20 lg:mt-28">

            {/* <div className="h-[320px]"> */}


            <div className="flex flex-col px-8">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-8 text-emerald-300" />
                <h3 className="font-serif text-3xl">My ToolBox</h3>
              </div>
              <p className="text-sm text-white/60 mt-2 lg:text-lg">Explore the technologies and tools I use</p>

            </div>
            <div className="h-[200px] lg:mt-8 overflow-x-hidden relative ">
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-left [animation-duration:20s]" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6 lg:mt-8 "
                itemsWrapperClassName="animate-move-right [animation-duration:20s]"/>
            </div>

          </div>

          <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-0 md:pt-6 mt-20 lg:mt-28">

            <div className="px-8 py-4 md:py-0 lg:py-0">


              <div className="inline-flex items-center gap-2 ">
                <StarIcon className="size-8 text-emerald-300" />
                <h3 className="font-serif text-3xl">Beyond the code</h3>
              </div>
              <p className="text-sm text-white/60 mt-2 lg:text-base">Explore my interests and hobbies beyond the digital domain <span className="text-rose-300">(you can drag icons)</span></p>
            </div>
            <div className="flex flex-col relative h-[200px] lg:h-[240px] pt-4 lg:mt-2" ref={constraintRef}>
              {hobbies.map(hobby => (
                <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
