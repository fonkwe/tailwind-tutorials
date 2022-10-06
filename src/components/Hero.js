import React from 'react'

export default function Hero() {
  return (
    <div className='h-screen items-center flex flex-col bg-white py-3 px-10 bg-black text-white p-20'>
      <div className='font-medium justify-center items-center space-x-3 '>
        <button className='p-2 border-solid border-2 border-indigo-600 rounded-full'>Discover</button>
        <button className='p-2 border-solid border-2 border-indigo-600 rounded-full '>Amination</button>
        <button className='p-2 border-solid border-2 border-indigo-600 rounded-full '>Brandind</button>
        <button className='p-2 border-solid border-2 border-indigo-600 rounded-full'>Mobile</button>
        <button className='p-2 border-solid border-2 border-indigo-600 rounded-full'>Picture</button>
        <button className='p-2 border-solid border-2 border-indigo-600 rounded-full'>Movie</button>
      </div>
      <h1 className='lg:text-5xl md:text-3xl sm:text-xl text-xl mb-2'>Explore the world’s leading design portfolios</h1>
      <p className='text-lg font-small mb-2 justify-center items-center'>Millions of designers and agencies around the world showcase their portfolio work on Dribbble <br />
      - the home to the world’s best design and creative professionals.</p>
      <input className='h-150 w-full mb-2 mt-1 max-w-2xl rounded-full p-5'/>
      <div className='font-medium justify-center items-center space-x-3 mt-5 md:flex flex-cols'>
        <p className=' p-2 items-center'>Trending Search</p>
         <button className=' p-2 border-solid border-2 border-indigo-600 rounded-full'>Landing page</button>
         <button className=' p-2 border-solid border-2 border-indigo-600 rounded-full'>ios</button>
         <button className=' p-2 border-solid border-2 border-indigo-600 rounded-full'>Apple</button>
         <button className=' p-2 border-solid border-2 border-indigo-600 rounded-full'>food</button>
         <button className=' p-2 border-solid border-2 border-indigo-600 rounded-full'>uxdesign</button>
         <button className=' p-2 border-solid border-2 border-indigo-600 rounded-full'>Shop now</button>
      </div>
    </div>
  )
}
