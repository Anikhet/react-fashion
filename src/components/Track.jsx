import gsap from 'gsap'
import { Power4, ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

const Track = () => {
    const parent = useRef(null)
    const picture = useRef(null)
    const panache = useRef(null)
    const tl = gsap.timeline()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        tl.to(picture.current, {
            scrollTrigger: {
                trigger: parent.current,
                start: "50vh",
                end: "center center",
                scrub: 1,
                pin: true,
                markers:true
            },
            width: "100%",
            height: "100%",
            ease: Power4.easeInOut
        })

        tl.from(panache.current, {
            x: '-50%',
            ease: Power4.easeInOut
        })
    }, [tl])

    return (
        <div ref={parent} className='relative w-full h-[200vh] overflow-hidden flex items-center justify-center'>
            <div ref={picture} className='bg-cover bg-center w-1/2 h-1/2 bg-[url("https://images.unsplash.com/photo-1583778477928-531a25a0baf2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'></div>
            <h1 ref={panache} className='absolute text-white text-[5vw]'>Panache</h1>
        </div>
    )
}

export default Track
