import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shopping from '../components/Shopping'
import Home from '../components/Home'
import Bag from '../components/Bag'


const Routings = () => {
  return (
    <Routes>
      
        <Route path="/" element = {<Home></Home>}></Route>
        <Route path="/shopping" element = {<Shopping></Shopping>}></Route>
        <Route path="/shoppingcart" element = {<Bag></Bag>}></Route>




    </Routes>
  )
}

export default Routings