'use client'

import {
  FaHtml5, 
  FaCss3,
  FaJs, 
  FaReact,
  FaFigma, 
  FaNodeJs
} from 'react-icons/fa'


import {
  
  SiTailwindcss,
  SiNextdotjs,

} from 'react-icons/si'


// about data

const about = {
  title : 'About me',
  description : 'Hi, my name is Ankit Jha, and I’m a recent B.Tech graduate in Computer Science and Engineering from Chouksey Engineering College, Bilaspur. During my studies, I developed a strong foundation in React.js, Node.js, Drizzle ORM, and MongoDB',
  info : [
    {
       fieldName : 'Name',
       fieldValue : 'Ankit Jha',
    },
    {
       fieldName : 'Phone',
       fieldValue : '(+91) 758 7233 945',
    },
    {
       fieldName : 'Experience',
       fieldValue : '1+ Years',
    },
    {
       fieldName : 'Nationality',
       fieldValue : 'Indian',
    },
    {
       fieldName : 'Email',
       fieldValue : '93ankitjha@gmail.com',
    },
    {
       fieldName : 'Languages',
       fieldValue : 'English, Hindi',
    },
  ]
}

// experience data 

const experience = {
    icon : '',
    title : 'My Experience',
  description : 'Designed and implemented a landing page with a focus on user engagement, optimizing layout and visuals for UI/UX.',
  
   items : [
    {
       company : 'CodSoft',
       position : 'Web Developer Intern',
       duration : 'Feb 2024 - Mar 2024',
    },
   ]
}

const education = {
  icon : '',
  title : 'My Education',
description : 'Pursing Bachelor of Technology in Computer Science from Chouksey Engineering College, Passout Batch 2025',

 items : [
  {
     institute: 'Chouksey Engineering College',
     degree : 'B.Tech in Computer Science',
     duration : '2021-2025',
  },
 ]
}


// skills data

const skills = {
  title : 'My Skills',
description : 'I specialize in web development, UI/UX design, logo design, and SEO, combining technical expertise with creativity to deliver impactful solutions. I build responsive websites using modern tools like React, Next.js, and Tailwind CSS, focusing on functionality and user experience. My UI/UX designs are intuitive and user-centered, while my logo designs create memorable brand identities. With a strong foundation in SEO tools like Google Analytics, I optimize websites to enhance visibility and drive measurable growth.',
    skillList : [
      {
        icon : <FaHtml5/>,
        name : 'html 5',
      },
      {
        icon : <FaCss3/>,
        name : 'css 3',
      },
      {
        icon : <FaJs/>,
        name : 'javascript',
      },
      {
        icon : <FaReact/>,
        name : 'react.js',
      },
      {
        icon : <SiNextdotjs/>,
        name : 'next.js',
      },
      {
        icon : <SiTailwindcss/>,
        name : 'tailwind css',
      },
      {
        icon : <FaNodeJs/>,
        name : 'node.js',
      },
      {
        icon : <FaFigma/>,
        name : 'figma',
      },
    ]
}

import {Tabs, TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs'
 import { Tooltip, TooltipContent, TooltipProvider,TooltipTrigger } from '@radix-ui/react-tooltip'

 import { ScrollArea } from '@radix-ui/react-scroll-area'
 import {motion } from 'framer-motion'

function Resume() {
  return (
    <motion.div initial = {{opacity : 0}} animate={{opacity : 1, transition : {delay : 2.4, duration : 0.4, ease : 'easeIn'},
  

      
  }}
     
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
  
  >

    <div className="container mx-auto">


      <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
         <TabsList className = 'flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
              <TabsTrigger value = 'experience'>Experience</TabsTrigger>
              <TabsTrigger value = 'education'>Education</TabsTrigger>
              <TabsTrigger value = 'skills'>Skills</TabsTrigger>
              <TabsTrigger value = 'about'>About me</TabsTrigger>
         </TabsList>
         {/* content */}
         <div className='min-h-[70vh] w-full'>
          {/* experience */}
          <TabsContent value = 'experience' className='w-full'>
              
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                        return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                            <div className='flex items-center gap-3'>
                              {/* dot */}
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{item.company}</p>
                            </div>
                        </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
          </TabsContent>

          {/* education */}
          <TabsContent value = 'education' className='w-full'>
          <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                        return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                            <div className='flex items-center gap-3'>
                              {/* dot */}
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{item.institute}</p>
                            </div>
                        </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
          </TabsContent>

          {/* skills */}
          <TabsContent value = 'skills' className='w-full h-full'>
                 <div className='flex flex-col gap-[30px]'>
                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                        <h3 className='text-4xl font-bold '>{skills.title}</h3>
                        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                    </div>

                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                       {skills.skillList.map((skill, index) => {
                          return <li key={index}>
                             <TooltipProvider delayDuration={100}>

                                 <Tooltip>
                                     <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                         <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                     </TooltipTrigger>

                                     <TooltipContent>
                                          <p className='capitalize'>{skill.name}</p>
                                     </TooltipContent>

                                 </Tooltip>
                             </TooltipProvider>
                            
                            
                            </li>
                       })}
                    </ul>

                 </div>
          </TabsContent>

          {/* about */}
          <TabsContent value = 'about' className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                 <h3 className='text-4xl font-bold'>{about.title}</h3>
                 <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>

                 <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                     return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                       <span className='text-white/60'>{item.fieldName}</span>
                       <span className='text-xl'>{item.fieldValue}</span>
                     </li>
                  })}
                 </ul>
              </div>
          </TabsContent>

         </div>
      </Tabs>
    </div>
</motion.div>
  )
}

export default Resume