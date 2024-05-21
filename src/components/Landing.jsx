import { motion } from "framer-motion";
import React from "react";

const Landing = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.05"  className= " w-full h-[100vh] p-10 bg-[#e8e8e8] text-[#514d8e]">
      <div  className="textstructure flex items-center mt-36 py-20 gap-[6vw]">
        <div className="masker">
          <h1 className=" uppercase text-[10vw] leading-none font-semibold ">
            Fashion
          </h1>
          <div className=" flex">
      
          <motion.div  
              initial={{ width: 0 }} 
              animate={{ width: '10vw' }} 
              transition={{ 
                ease: [0.76, 0, 0.24, 1], 
                duration: 3, 
                delay:0.5,
                repeat: Infinity, 
                repeatType: "reverse" 
              }} 
              className="h-[4.5vw] mt-[0.6vw] bg-[#FFC7C7]"
            ></motion.div>
         
          <h1 className="uppercase text-[6vw] leading-none font-semibold ">
           
            is an
          </h1>

          </div>
          <h1 className="uppercase text-[5vw] leading-none font-semibold">
            understatement
          </h1>
        </div>
        <video autoPlay muted loop className="w-[40vw] h-[30vw] object-cover rounded-md"  src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"></video>
        {/* <img className="w-[25vw] h-[25vw] object-cover" src="https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img> */}
      </div>
      <div className="  border-t-[1px] border-zinc-800 flex justify-between items-center px-20 py-2 mt-[7vw]  ">
        {["For everyone", "Good Fashion empowers you"].map((item, index) => {
          return (
            <p className="leading-none -tracking-tight font-light text-md text-[#8785A2] ">
              {item}
            </p>
          );
        })}
        <button className="border-rose-500 border-t-2 border-b-2 hover:border-l hover:border-r hover:bg-rose-700 text-white font-bold py-2 px-5 rounded-full transition duration-300 ease-in-out ">
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default Landing;
