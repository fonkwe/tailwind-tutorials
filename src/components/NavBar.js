import React from 'react'

export default function NavBar() {
  return (
    <nav className='flex justify-between items-center relative bg-white shadow h-full'>
      
      <div className=' pl-5 hidden w-full md:flex md:items-center md:w-auto'> 
      <ul
      class="
        pt-4
        text-base text-gray-700
        md:flex
        md:justify-between 
        md:pt-0"
    >
      <li>
        <a class="md:p-4 py-2 block hover:text-purple-400" href="/"
          >Dribble</a
        >
      </li>
      <li>
        <a class="md:p-4 py-2 block hover:text-purple-400" href="/"
          >Inspiration</a
        >
      </li>
      <li>
        <a class="md:p-4 py-2 block hover:text-purple-400" href="/"
          >Find Work</a
        >
      </li>
      <li>
        <a class="md:p-4 py-2 block hover:text-purple-400" href="/"
          >Learn Design</a
        >
      </li>
      <li>
        <a
          class="md:p-4 py-2 block hover:text-purple-400"
          href="log"
          >Go Pro</a
        >
      </li>
      <li>
        <a
          class="md:p-4 py-2 block hover:text-purple-400"
          href="/"
          >Hire Designers</a
        >
      </li>
    </ul>  
      </div>
      <div className='pr-6 flex relative'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8">
           <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
         </svg>
        <li  className='p-2 list-none text-base font-medium text-gray-900 hover:text-gray-700'>Sign In</li>
        <button className='p-2 p-2 border-solid border-2 border-indigo-600 rounded-full bg-yellow-500'>Share my work</button> 
      </div>
    </nav>
  )
}
