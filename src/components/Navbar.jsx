import React from 'react'

function Navbar() {
  return (

    <nav  className='flex justify-between px-5 p-2'>
      <div className='flex justify-center items-center'>
        <img src="/public/logo.jpg" alt="img-here" className='w-[60px]' />
      <h2 className='font-bold text-gray-600 text-lg text-pink-600'>wow food</h2>
      </div>

     <div className='flex gap-x-5 justify-center items-center'>

      <h2 className='text-pink-600 hover:text-pink-800 hover:underline hover:cursor-pointer'>Home</h2>
      <h2 className='text-pink-600 hover:text-pink-800 hover:underline hover:cursor-pointer'>About</h2>
      <h2 className='text-pink-600 hover:text-pink-800 hover:underline hover:cursor-pointer'>Food</h2>
      <h2 className='text-pink-600 hover:text-pink-800 hover:underline hover:cursor-pointer'>Contact</h2>
     </div>

    </nav>
  )
}

export default Navbar




























// import React, { useState } from 'react';
// import logo from '/public/logo.jpg'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <> 
//     <nav className="bg-gray-500 p-4">
//       <div className="container mx-auto flex justify-between items-center ml-19">
//         <div className="text-white text-xl font-bold flex items-center">
//           <img src={logo} alt=""  className='w-16 h-12 flex ml-20 space-3 px-1 py-1   rounded-lg' />
//           wowfood
//         </div>
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <ul className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
//           <li className="border-b border-gray-400 md:border-none">
//             <a href="#" className="text-white hover:text-gray-300 block py-2 md:py-0 md:inline">
//               Home
//             </a>
//           </li>
//           <li className="border-b border-gray-400 md:border-none">
//             <a href="#" className="text-white hover:text-gray-300 block py-2 md:py-0 md:inline">
//               About
//             </a>
//           </li>
//           <li className="border-b border-gray-400 md:border-none">
//             <a href="#" className="text-white hover:text-gray-300 block py-2 md:py-0 md:inline">
//               Item
//             </a>
//           </li>
//           <li className="border-b border-gray-400 md:border-none">
//             <a href="#" className="text-white hover:text-gray-300 block py-2 md:py-0 md:inline">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>








// </>

//   );
// };

// export default Navbar;
