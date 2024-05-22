import React from 'react'

import LocomotiveScroll from 'locomotive-scroll'

import Navbar from './Navbar';
import Landing from './Landing';
import Marquee from './Marquee';
import Display from './Display';
import Track from './Track';
import Portfolio from './Portfolio';
import Postport from './Postport';
import Footer from './Footer';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='min-h-screen w-full  bg-zinc-900    '> 
   
    <Navbar></Navbar>
    <Landing></Landing>
    {/* <Marquee></Marquee> */}
    <Display></Display>
    <Track></Track>
    <Portfolio></Portfolio>
    <Postport></Postport>
    <Footer></Footer>
    
 
   
    
    </div>
  )
}

export default App