import React from 'react'

function Navbar() {
  return (

    <nav  className='flex justify-between px-5 p-2 sm:flex-row flex-col'>
      <div className='flex justify-center items-center'>
        <img src="/public/logo.jpg" alt="img-here" className='w-[60px]' /> 
      <h2 className='font-bold text-lg text-pink-600'>wow food</h2>
      </div>

     <div className='flex gap-x-5 justify-center items-center'>

      <h2 className='text-pink-600 font-bold hover:text-pink-800 hover:underline hover:cursor-pointer'>Home</h2>
      <h2 className='text-pink-600 font-bold hover:text-pink-800 hover:underline hover:cursor-pointer'>About</h2>
      <h2 className='text-pink-600 font-bold hover:text-pink-800 hover:underline hover:cursor-pointer'>Food</h2>
      <h2 className='text-pink-600 font-bold hover:text-pink-800 hover:underline hover:cursor-pointer'>Contact</h2>
     </div>

    </nav>
  )
}

export default Navbar
