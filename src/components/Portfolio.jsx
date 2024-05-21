import React from 'react';
import video1 from '../assets/home-news-diesel-be-a-follower.mp4';
import video2 from '../assets/news-rino-pelle.mp4';
import LocomotiveScroll from 'locomotive-scroll';




const Portfolio = () => {
    const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen bg-[#F6F6F6] flex items-center justify-center'>
        <div className='w-[30%] h-1/2 relative'>
            <img data-scroll data-scroll-speed="-0.1"  className='w-full h-full object-cover object-top' 
            src="https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=2217&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        
      {/* <img
        className='w-10 h-10'

        src=""
        alt="Home News"
      /> */}
      <div className=' w-[20vw] h-[10vw] absolute top-[35%] left-[-50%] aspect-video'>
      <video data-scroll data-scroll-speed="-0.05" data-scroll-direction="horizontal" autoPlay muted loop className='w-full h-full ' >
        <source src={video1} type="video/mp4" />
      </video>
      </div>
      <div className=' w-[30vw] h-[15vw] absolute bottom-[-35%] right-[-60%] aspect-video'>
      <video data-scroll data-scroll-speed="-0.05" data-scroll-direction="horizontal"  autoPlay muted loop className='w-full h-full' >
        <source src={video2} type="video/mp4" />
      </video>
      
      </div>

      <div className=' w-[10vw] h-[15vw] absolute top-[0] right-[-30%]'>

        <img data-scroll data-scroll-speed="-0.05" data-scroll-direction="horizontal"  className='w-full h-full object-cover object-top' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"></img>
        </div>





    </div>
    </div>
  );
}

export default Portfolio;
