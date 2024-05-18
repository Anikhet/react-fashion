import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import Display from './components/Display'
import LocomotiveScroll from 'locomotive-scroll'
import Track from './components/Track'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='min-h-screen w-full  bg-zinc-900  '> 
    <Navbar></Navbar>
    <Landing></Landing>
    <Marquee></Marquee>
    <Display></Display>
    <Track></Track>
    </div>
  )
}

export default App