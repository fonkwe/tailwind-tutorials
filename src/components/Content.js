import React from 'react'

export default function Content() {
  return (
    <>
         <div className='mt-35 bg-white p-4 justify-content items-center flex '>
            <div className='pl-5 px-10'><button>Popular</button></div>
            <div className='pr-5 px-10'><button>Filter</button></div>
         </div>
         <div>
            <div className='grid grid-rows px-6 gap-2 md:grid-rows-4 sm:grid-rows-2'>
                <div class="justify-content items-center">
                 <img src='./image.jpg' alt="cars" className='rounded'  />
                    <div className="flex mt-1">
                       <img src='./image.jpg' alt="" className="rounded-lg w-10 h-10" />
                        <p className="p-2" >Tailwind </p>
                           <div className="flex px-10">
                               <div className='flex p-2'>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentrowor" className="w-6 h-6">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                     </svg><p>125</p>
                                </div>
                                <div className='flex p-2'>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentrowor" class="w-6 h-6">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                   </svg><p>25</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
             
        </div>
    </>
  )
}
