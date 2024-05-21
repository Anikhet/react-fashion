import { motion } from 'framer-motion'
import gsap, { Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useState } from 'react'



const Display = () => {
  const[useHover,setHover] = useState(false)
  const arr = [0,1,4,5]
 
 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1"   className='h-[100vh] bg-[#F6F6F6] w-full  text-black flex items-center justify-center gap-32'>
        <h1 className='absolute text-8xl z-10 font-semibold'>
            {"TRENDY".split('').map((item,index)=>{
               const isHoverable = [2, 3].includes(index); 
               return <motion.span
               onMouseEnter={!isHoverable ? () => setHover(true) : null}
              onMouseLeave={!isHoverable ? () => setHover(false) : null}
                 initial={{y:'-10%',opacity:0}} 
                 animate={useHover ? ({y:"0%",opacity:1}) : {y:"-100%"}} 
               transition={{ease: [0.34, 1.56, 0.64, 1], delay:index*0.05}}
               className={`${arr.indexOf(index)=== -1 ? 'text-black' : 'text-white' }  inline-block`}>{item}</motion.span>
            })}
           
            </h1> 
            
 
        <img data-scroll data-scroll-section data-scroll-speed="0.1" 
         onMouseEnter={()=>{setHover(true)}}
        onMouseLeave={()=>{setHover(false)}} 
        className=' w-1/3 object-cover object-bottom h-[70vh]' src="https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        <img data-scroll data-scroll-section data-scroll-speed="0.1"  onMouseEnter={()=>{setHover(true)}}
        onMouseLeave={()=>{setHover(false)}}  className=' w-1/3 object-cover object-bottom h-[70vh]' src="https://plus.unsplash.com/premium_photo-1707932485806-ce9b3c855339?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>

    </div>
    
  )
}

export default Display