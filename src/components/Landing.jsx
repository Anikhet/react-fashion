import { motion } from "framer-motion";
import React from "react";

const Landing = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.4"  className="w-full h-[100vh] p-10 bg-[#F6F6F6] text-[#8785A2]">
      <div  className="textstructure flex items-center mt-36 py-20">
        <div className="masker">
          <h1 className="uppercase text-[10vw] leading-none font-semibold ">
            Fashion
          </h1>
          <div className=" flex">
      
            <motion.img initial={{width:0}} animate={{width:'7vw'}} transition={{ease:[0.76, 0, 0.24, 1],duration:1.5}} className=" w-[9vw] h-[4.2vw] mt-[1vw]" src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=3518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></motion.img>
         
          <h1 className="uppercase text-[6vw] leading-none font-semibold ">
           
            is an
          </h1>

          </div>
          <h1 className="uppercase text-[5vw] leading-none font-semibold">
            understatement
          </h1>
        </div>
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
