import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [forcedVisible, setForcedVisible] = useState(false);
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
      className={`font-['Coco_Gothic'] text-[#474477] rounded-2xl fixed z-[999] flex items-center justify-between w-full text-[1.5vw] px-12 py-6 bg-[#FFC7C7] ${
        visible ? 'top-0' : '-top-24' 
      } transition-all duration-500`}
    >
      <h2>Chic & Beauty</h2>
      <div className="links flex gap-24 text-2xl">
        {['Home', 'Work', 'Culture'].map((elem, index) => {
          return (
            <motion.a
            whileHover={{scale:1.2}}
            whileTap={{scale:0.9}}
            className="text-[1vw] flex items-center gap-1" href="#" key={index}>
              {index === 0 && (
                <span className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>
              )}
              {elem}
            </motion.a>
          );
        })}
        <motion.h2
        
        initial={{ width: 0 }} 
              whileHover={{ width: '4vw' }} 
             
              transition={{ 
                ease: [0.76, 0, 0.24, 1], 
                duration: 1, 
               
              
              }} 
              


          className="text-[1.5vw] font-bold absolute left-1/2 top-1/2 -translate-x-[50%] translate-y-[150%] cursor-pointer  border-t-2 border-b-2 border-black"
          onClick={handleMenuClick}
        >
          Menu
        </motion.h2 >
      </div>
    </div>
  );
};

export default Navbar;
