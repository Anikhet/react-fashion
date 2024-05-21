import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [forcedVisible, setForcedVisible] = useState(false);
  const [bgColor, setBgColor] = useState('#FFC7C7');
  let scrollTimeout = null;

  const handleScroll = () => {
    if (forcedVisible) {
      return;
    }

    const currentScrollPos = window.scrollY;

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    // Change background color based on scroll position
    if (currentScrollPos > 50) { // Adjust the value as needed
      setBgColor('bg-[#FFC7C7] '); // Change to the desired color when scrolling down
    } else {
      setBgColor(''); // Change to the original color when at the top
    }

    scrollTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000); // Hide after 2 seconds of no scrolling

    setPrevScrollPos(currentScrollPos);
  };

  const handleMenuClick = () => {
    setForcedVisible(!forcedVisible);
    setVisible(!visible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [prevScrollPos, forcedVisible]);

  return (
    <div
      className={`font-['Coco_Gothic'] ${bgColor} text-[#474477] rounded-2xl fixed z-[999] flex items-center justify-between w-full text-[1.5vw] px-12 py-6 transition-all duration-500`}
      style={{  top: visible ? '0' : '-6rem' }}
    >
      <h2>Chic & Beauty</h2>
      <div className="links flex gap-24 text-2xl">
       <NavLink
          className={
            `text-[1vw] flex items-center gap-1 `
          }
          to="/"
        >
          {({ isActive }) => (
            <>
              <span className={`inline-block w-1 h-1 rounded-full ${isActive ? 'bg-green-500' : 'bg-transparent'}`}></span>
              Home
            </>
          )}
        </NavLink>
        <NavLink
          className={
            `text-[1vw] flex items-center gap-1 `
          }
          to="/shopping"
        >
          {({ isActive }) => (
            <>
              <span className={`inline-block w-1 h-1 rounded-full ${isActive ? 'bg-green-500' : 'bg-transparent'}`}></span>
              Shop
            </>
          )}
        </NavLink>
        
       
        <div className='relative w-100%'>
          <h5 className='font-serif rounded-full px-2 absolute w-6 bottom-4 left-4 text-[1vw]'>1</h5>
          <i className="ri-shopping-cart-2-fill"></i>
        </div>
        
      
      </div>
    </div>
  );
};

export default Navbar;
