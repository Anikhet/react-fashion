import { motion } from "framer-motion";
import React from "react";

const Landing = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.05"  className="w-full h-[100vh] p-10 bg-[#F6F6F6] text-[#8785A2]">
      <div  className="textstructure flex items-center mt-36 py-20 gap-[6vw]">
        <div className="masker">
          <h1 className="uppercase text-[10vw] leading-none font-semibold ">
            Fashion
          </h1>
          <div className=" flex">
      
            <motion.img initial={{width:0}} animate={{width:'5vw'}} transition={{ease:[0.76, 0, 0.24, 1],duration:2.5}} className=" w-[9vw] h-[4.2vw] mt-[1vw]" 
            src="https://plus.unsplash.com/premium_photo-1673125287031-a0ba6172bb5d?q=80&w=3514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></motion.img>
         
          <h1 className="uppercase text-[6vw] leading-none font-semibold ">
           
            is an
          </h1>

          </div>
          <h1 className="uppercase text-[5vw] leading-none font-semibold">
            understatement
          </h1>
        </div>
        <video autoPlay muted loop className="w-[40vw] h-[30vw] object-cover rounded-md"  src="https://download-video.akamaized.net/v3-1/playback/66710880-7060-4d65-965e-38a29da54c52/5ac47112?__token__=st=1716015580~exp=1716029980~acl=%2Fv3-1%2Fplayback%2F66710880-7060-4d65-965e-38a29da54c52%2F5ac47112%2A~hmac=ed3ab3cbdd8d8fd7f6d11058a0eca545e97135874ccd9779031374f1f35b73d4&r=dXMtY2VudHJhbDE%3D"></video>
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
