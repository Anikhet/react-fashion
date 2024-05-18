import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
   
    <div data-scroll data-scroll-section data-scroll-speed="1"  className=' rounded-md pt-10 pb-15 w-full h-[50vh] bg-[#003a32] '>
    <div className=" z-10 leading-none flex text-[20vw] text border-t-4 border-b-4 border-zinc-300 overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:15}} className='pr-20'>ADD A LITTLE ZHUZH </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:15}} className='pr-20'>ADD A LITTLE ZHUZH</motion.h1>
    </div>
    </div>
  )
}

export default Marquee