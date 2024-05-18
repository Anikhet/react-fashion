import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import Display from './components/Display'
import LocomotiveScroll from 'locomotive-scroll'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='h-screen w-full text-white'> 
    <Navbar></Navbar>
    <Landing></Landing>
    <Marquee></Marquee>
    <Display></Display>
    </div>
  )
}

export default App