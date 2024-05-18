import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  let scrollTimeout = null;

  const handleScroll = () => {
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`rounded-2xl fixed z-[999] flex items-center justify-between w-full text-[1.5vw] px-12 py-8 bg-[#FFC7C7] ${
        visible ? 'top-0' : '-top-40' 
      } transition-all duration-500`}
    >
      <h2>Chic & Beauty</h2>
      <div className="links flex gap-24 text-2xl">
        {['Home', 'Work', 'Culture'].map((elem, index) => {
          return (
            <a className="text-[1vw] flex items-center gap-1" href="#">
              {index === 0 && (
                <span className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>
              )}
              {elem}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
