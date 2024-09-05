import React from 'react'

function Search() {
  return (
   <>
   
   
   <div class="relative w-full h-screen bg-cover bg-center">
  <img src="/bg-img.webp" alt="here img" class="w-full h-4/5" />

  <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="text-center">
      <div class="flex justify-center mb-40">
        <input
          type="text"
          placeholder="Search..."
          class="w-full   px-10  text-lg border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> 
        <button class="px-6 py-4 bg-blue-500 text-white text-lg rounded-r-lg hover:bg-blue-600">
          Search
        </button>
      </div>
    </div>
  </div>
</div>

   
   
   
   </>
  )
}

export default Search