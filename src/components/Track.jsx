
import gsap, { Power4, ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const Track = () => {
    const parent = useRef()

    const picture = useRef()
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(picture.current,{
            scrollTrigger:{
                trigger:parent.current,
                top:"0 0",
    
                scrub:1,
                pin:true
            },
            width:"120%",
            height:"120%",
            ease: Power4
        }

        )
    })
  return (
    <div ref={parent}  className='w-full h-[100vh] overflow-hidden flex items-center justify-center'>
        <div ref={picture} className=' bg-cover bg-center w-1/2 h-1/2 bg-[url("https://images.unsplash.com/photo-1583778477928-531a25a0baf2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'></div>
    </div>
  )
}

export default Track