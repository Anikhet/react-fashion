import { motion } from 'framer-motion'
import React from 'react'


const Postport = () => {
    
  return (
    <div className='w-full h-[80vh] bg-[#F6F6F6] flex gap-[2vw] items-center justify-center tracking-tighter  '>
         {["Explore","Our","Shopper's page."].map((item,index)=>{
              return(
        <div className='w-auto h-[15%]  overflow-hidden'>
           
                <motion.h1 key={index}
                  initial={{rotate:-90,
                      y:"90%",opacity:0}}
                  whileInView={{rotate:0,y:0,opacity:1}}
                  viewport={{once:true}}
                  transition={{  ease: [0.22, 1, 0.36, 1], 
                      duration: 1.5}}
          
          
                  
                  
                  className='text-[5vw] font-semibold '>{item}</motion.h1>
                     </div>


                  )

            })}
      
     
    </div>
  )
}

export default Postport