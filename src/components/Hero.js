import React from 'react'

export default function Hero() {
  return (
    <div className='h-screen items-center flex flex-col bg-white py-6 px-10 bg-black text-white'>
      <div className='font-medium justify-content items-center space-x-3'>
        <button className='p-2 border-solid border-2 border-indigo-600 rounded-full'>Discover</button>
        <button className='p-2 border-solid border-2 border-indigo-600 rounded-full '>Amination</button>
        <button className='p-2 border-solid border-2 border-indigo-600 rounded-full '>Brandind</button>
        <button className='p-2 border-solid border-2 border-indigo-600 rounded-full'>Mobile</button>
        <button className='p-2 border-solid border-2 border-indigo-600 rounded-full'>Picture</button>
        <button className='p-2 border-solid border-2 border-indigo-600 rounded-full'>Movie</button>
      </div>
      <h1 className='lg:text-5xl md:text-3xl sm:text-xl text-xl mb-5'>Explore the world’s leading design portfolios</h1>
      <p className='text-xl font-small mb-5 justify-content items-center'>Millions of designers and agencies around the world showcase their portfolio work on Dribbble <br />
      - the home to the world’s best design and creative professionals.</p>
      <input className='h-50 mb-2 mt-2 max-w-2xl'/>
      <div className='flex font-medium justify-content items-center space-x-3 mt-5'>
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
