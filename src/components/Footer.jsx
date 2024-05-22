import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
  return (
    <div className='bg-zinc-900 w-[100vw] h-[60vh] text-[#F6F6F6] flex items-center justify-between px-[20vw] gap-[5vw] '>


<div className='flex flex-col items-start gap-[2vw]'>
<i className="ri-instagram-fill text-[2vw] "></i>
<i className="ri-tiktok-fill text-[2vw] "></i>
<i className="ri-facebook-circle-fill text-[2vw] "></i>
<i className="ri-linkedin-box-fill text-[2vw] "></i>

</div>
<h1 className='text-[5vw]'>Thanks for stopping by!</h1>
<iframe src="https://giphy.com/embed/1ktbIgriWfSGOlqUdT" className='w-[40vw] h-[40vw]' 
frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
  )
}

export default Footer