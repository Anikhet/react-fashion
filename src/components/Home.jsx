import React from 'react'

import LocomotiveScroll from 'locomotive-scroll'

import Navbar from './Navbar';
import Landing from './Landing';
import Marquee from './Marquee';
import Display from './Display';
import Track from './Track';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='min-h-screen w-full  bg-zinc-900    '> 
   
    <Navbar></Navbar>
    <Landing></Landing>
    <Marquee></Marquee>
    <Display></Display>
    <Track></Track>
 
   
    
    </div>
  )
}

export default App