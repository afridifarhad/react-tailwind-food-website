import React from "react";
import FoodCards from "./FoodCards";
import MenuCards from "./MenuCards";

function Home() {
    const foodCards = [
        {
            id: 1,
            imgUrl: "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8fDA%3D",
            name: "Pizza"
            
        } ,
        {
            id: 2,
            imgUrl: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2QlMjBpbWFnZXMlMjBidXJndXJ8ZW58MHx8MHx8fDA%3D",
            name: "Pasta"
            
        },
         {
            id: 3,
            imgUrl: "https://images.unsplash.com/photo-1552611052-d59a0d9741bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudCUyMGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            name: "Food"
            
        }
    ]
  return (
    <div>
      <section className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhtvijk6diUl5BkJkq5jAEW2bsiQ0LyM4Zm25fSJS2UtmHp6hscBQY_U6YgUev9DzTXQ&usqp=CAU"
          alt=""
          className="h-[80vh] w-full object-cover "
        />

        <div className="absolute top-[50%] left-[10%] translate-x-[50%] translate-y-[50%]">
            <div className="flex gap-1">
                <input type="text" placeholder="Search..." 
                className="px-4 py-2 w-[35vw] focus:outline-none border border-gray-600 rounded-lg"
                />
                <button className="py-2 px-4 text-white bg-pink-400 rounded-md">Search</button>
            </div>
        </div>
      </section>



     <section className="w-[100vw] flex flex-col justify-center items-center p-5">
        <h2 className="text-3xl font-bold text-gray-700 mb-8 ">
            Explore Food
        </h2>
        <div className="w-full flex items-center justify-center gap-10">
            {
              foodCards.map((item) => (
                <FoodCards key={item.id} name={item.name} image={item.imgUrl} />
              ))
            }
        </div>
     </section>

        <section className="mx-auto">
          <h2 className="text-center font-bold text-2xl">Food Menu</h2>
       
       <div className="flex flex-wrap justify-around">
        <MenuCards /> 
         <MenuCards /> 
          <MenuCards />
          <MenuCards />
          </div>
          </section>
    </div>
  );
}

export default Home;






















// import React from 'react'

// function Search() {
//   return (
//    <>

//    <div class="relative  h-screen bg-cover bg-center">
//   <img src="/bg-img.webp" alt="here img" class="w-full h-4/5" />

//   <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//     <div class="text-center">
//       <div class="flex justify-center mb-40">
//         <input
//           type="text"
//           placeholder="Search..."
//           class="w-full   px-10  text-lg border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button class="px-6 py-4 bg-blue-500 text-white text-lg rounded-r-lg hover:bg-blue-600">
//           Search
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

//    </>
//   )
// }

// export default Search
