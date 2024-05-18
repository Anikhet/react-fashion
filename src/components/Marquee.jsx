import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
   
    <div data-scroll data-scroll-section data-scroll-speed="0.2"  className=' rounded-3xl pt-10 pb-10 w-full py-20 z-10   bg-[#003a32] '>
    <div className="  leading-none flex text-[25vw] text border-t-8 border-b-8 border-zinc-300 overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:15}} className=' pr-20'>ADD A LITTLE ZHUZH </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:15}} className='pr-20'>ADD A LITTLE ZHUZH</motion.h1>
    </div>
    </div>
  )
}

export default Marquee