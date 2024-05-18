import React from 'react'

const Display = () => {
  return (
    <div className=' bg-zinc-100 w-full h-screen text-black flex items-center justify-center gap-32'>
        <h1 className='absolute text-8xl z-10 font-semibold'>
            {"TRENDY".split('').map((item,index)=>{
               return <span className=''>{item}</span>
            })}
            </h1> 
 
        <img className='hover:scale-x transform transition duration-y w-1/3 object-cover object-bottom h-1/2' src="https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        <img  className=' w-1/3 object-cover object-bottom h-1/2' src="https://plus.unsplash.com/premium_photo-1707932485806-ce9b3c855339?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>

    </div>
    
  )
}

export default Display