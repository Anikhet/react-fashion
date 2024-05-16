import React from 'react'

const Landing = () => {
  return (
    <div className='w-full h-screen p-10  '>
<div className="textstructure flex items-center mt-52">
    <div className="masker">
        <h1 className='uppercase text-8xl leading-none font-semibold '>Fashion <br></br> is an <br></br>understatement</h1>
    </div>

</div>
    <div className='  border-t-[1px] border-zinc-800 flex justify-between items-center px-10'>
    {["For everyone", "Good Fashion empowers you"].map((item,index)=>{
        return <p className='leading-none -tracking-tight font-light text-md '>{item}</p>

    })}
    <button className='p-2 rounded-full border-y-rose-400 border-t-2 border-b-2 hover:bg-rose-700  border-zinc-700 '>Start Shopping</button>
</div>
    </div>

  )
}

export default Landing