import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'

const App = () => {
  return (
    <div className='h-screen w-full bg-zinc-950 text-white'> 
    <Navbar></Navbar>
    <Landing></Landing>
    </div>
  )
}

export default App