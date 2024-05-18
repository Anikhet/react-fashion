import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-999 flex items-center justify-between w-full px-20 py-10 bg-zinc-900'>
        <h2>Chic & Beauty</h2>

        <div className="links flex gap-24 text-2xl ">
       
            {["Home","Work","Culture"].map((elem,index)=>{
              return  <a className=' text-sm flex items-center gap-1 ' href='#'>
               {index===1 && ( <span className='inline-block w-1 h-1  bg-green-500 rounded-full '> </span>)}
                {elem}
               
                
                </a>
            })}


        </div>
        </div>
  )
}

export default Navbar