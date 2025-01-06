'use client';

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip,TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
   
//   {
//      num: '01',
//      category : 'MERN Stack',
//      title : 'Expense Tracker',
//      description : 'Implemented state management in React for real-time updates on expenses and budget tracking.',
     
//      stack : [
//           {name :'React'},
//           {name :'Node js'},
          


//      ],

//      image : '/expense-tracker.png',
//      live : '',
//      github : 'https://github.com/ankitjha93/expense-tracker_fullstack',
//   },
//   {
//      num: '02',
//      category : 'Full Stack',
//      title : 'PrepSmart AI',
//      description : 'Developed a Full Stack AI platform for mock interviews with dynamic question generation and real-time feedback.',
     
//      stack : [
//           {name :'Next Js'},
//           {name :'Drizzle ORM'},
//           {name :'Gemini API'},


//      ],

//      image : '/PrepSmart-AI.png',
//      live : 'https://prepsmart-jade.vercel.app',
//      github : 'https://github.com/ankitjha93/PrepSmart-AI-2.0',
//   },
  {
     num: '03',
     category : 'Full Stack Clone',
     title : 'Netflix Clone',
     description : 'Implemented Google Authentication for secure user login and streamlined authentication flow.',
     
     stack : [
          {name :'Firebase'},
          {name :'Stripe'},

     ],

     image : '/netflix-clone.png',
     live : 'https://playflare.netlify.app/',
     github : 'https://github.com/ankitjha93/Netflix',
  },
]




function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
      // get current slide index
      const currentIndex = swiper.activeIndex;
      // update project state based on current slide index
      setProject(project[currentIndex]);
  }
  return (
    <motion.section 
    initial = {{opacity : 0}} 
    animate = {{opacity : 1, transition : {delay : 2.4, duration : 0.4, ease : 'easeIn'}}}
    
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    
    >
       <div className="container mx-auto">
        <div className="flex flex-col xl:flex-col xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">

             <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
             </div>
             {/* project category */}
             <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
             {/* project description */}
             <p className="text-white/60">{project.description}</p>
             {/* stack */}
             <ul className="flex gap-4">
               {project.stack.map((item, index) => {
                  return <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ','}
                    
                    
                    </li>
               })}
             </ul>


             {/* border */}

             <div className="border border-white/20"></div>
             {/* buttons */}
             <div className="flex items-center gap-4">
              {/* live project button */}
               <Link href={project.live}>
                 <TooltipProvider delayDuration={100}>
                    <Tooltip>
                         <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                             <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                         </TooltipTrigger>
                         <TooltipContent>
                             <p>Live Project</p>
                         </TooltipContent>
                    </Tooltip>
                 </TooltipProvider>
               </Link>

                {/* github project button */}
                <Link href={project.github}>
                 <TooltipProvider delayDuration={100}>
                    <Tooltip>
                         <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                             <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                         </TooltipTrigger>
                         <TooltipContent>
                             <p>GitHub Repository</p>
                         </TooltipContent>
                    </Tooltip>
                 </TooltipProvider>
               </Link>


             </div>
          </div>
          <div className="w-full xl:w-[50%]">
             <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
             >
                {projects.map((project, index) => {
                    return <SwiperSlide key={index} className="w-full">
                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        
                         {/* overlay */}
                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                          {/* image */}
                          <div className="relative w-full h-full">
                             <Image 
                             src={project.image} 
                             fill 
                             className="object-cover"
                             alt=""/>
                          </div>
                        </div>
                    </SwiperSlide>
                })}
                {/* slider buttons */}
                <WorkSliderBtns containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none' btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'/>
             </Swiper>
          </div>
        </div>
       </div>
    </motion.section>
  );
};

export default Work