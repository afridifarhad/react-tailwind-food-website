import React from "react";
import FoodCards from "./FoodCards";
import MenuCards from "./MenuCards";

function Home() {
    const foodCards = [
        {
            id: 1,
            imgUrl: "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8fDA%3D",
            name: "Pizza"
        },
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
    ];

    const menuCards = [
      {
        id: 1,
        name: "Pizza",
        price: "600",
        imgURL: "https://images.pexels.com/photos/19239118/pexels-photo-19239118/free-photo-of-fresh-pepperoni-sausage-pizza.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 2,
        name: "Pasta",
        price: "400",
        imgURL: "https://images.pexels.com/photos/24869092/pexels-photo-24869092/free-photo-of-a-plate-of-pasta-with-mushrooms-and-wine.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 3,
        name: "K2 Burger",
        price: "580",
        imgURL: "https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 4,
        name: "Foodies",
        price: "230",
        imgURL: "https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://images.pexels.com/photos/16350426/pexels-photo-16350426/free-photo-of-a-knife-and-a-cabbage-on-a-cutting-board.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="h-[60vh] sm:h-[80vh] w-full object-cover"
        />

        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
            <div className="flex gap-1 flex-col sm:flex-row">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-[70vw] sm:w-[35vw] border-none px-4 py-2 focus:outline-none rounded-lg"
                />
                <button className="py-2 px-4 mt-2 sm:mt-0 text-white bg-pink-600 hover:bg-pink-700 rounded-md">Search</button>
            </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center p-5">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-pink-600">
    Explore Food
  </h2>

  
  <div className="w-full flex flex-wrap items-center justify-center gap-16">
             {
               foodCards.map((item) => (
                 <FoodCards key={item.id} name={item.name} image={item.imgUrl} />
               ))
             }
         </div>
</section>


      {/* MenuCards Section */}
      <section className="mx-auto mt-10">
        <h2 className="text-center font-bold text-2xl text-pink-600">Food Menu</h2>

        <div className="flex flex-wrap justify-around mt-10 gap-4">
        {
          menuCards.map((item) => (
            <MenuCards key={item.id} name={item.name} price={item.price} image={item.imgURL} />
          ))
        }
        </div>
      </section>
    </div>
  );
}

export default Home;


























// import React from "react";
// import FoodCards from "./FoodCards";
// import MenuCards from "./MenuCards";

// function Home() {
//     const foodCards = [
//         {
//             id: 1,
//             imgUrl: "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8fDA%3D",
//             name: "Pizza"
            
//         } ,
//         {
//             id: 2,
//             imgUrl: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2QlMjBpbWFnZXMlMjBidXJndXJ8ZW58MHx8MHx8fDA%3D",
//             name: "Pasta"
            
//         },
//          {
//             id: 3,
//             imgUrl: "https://images.unsplash.com/photo-1552611052-d59a0d9741bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudCUyMGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
//             name: "Food"
            
//         }
//     ]
//     const menuCards = [
//       {
//         id: 1,
//         name: "Pizza",
//         price: "600",
//         imgURL: "https://images.pexels.com/photos/19239118/pexels-photo-19239118/free-photo-of-fresh-pepperoni-sausage-pizza.jpeg?auto=compress&cs=tinysrgb&w=600"
//       },
//       {
//         id: 2,
//         name: "Pasta",
//         price: "400",
//         imgURL: "https://images.pexels.com/photos/24869092/pexels-photo-24869092/free-photo-of-a-plate-of-pasta-with-mushrooms-and-wine.jpeg?auto=compress&cs=tinysrgb&w=600"
//       },
//       {
//         id: 3,
//         name: "K2 Burgur",
//         price: "580",
//         imgURL: "https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=600"
//       },
//       {
//         id: 4,
//         name: "Foodies",
//         price: "230",
//         imgURL: "https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&w=600"
//       }
//     ]
//   return (
//     <div>
//       <section className="relative">
//         <img
//           src="https://images.pexels.com/photos/16350426/pexels-photo-16350426/free-photo-of-a-knife-and-a-cabbage-on-a-cutting-board.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//           alt=""
//           className="h-[80vh] w-full object-cover "
//         />

//         <div className="absolute top-[50%] left-[10%] translate-x-[50%] translate-y-[50%]">
//             <div className="flex gap-1">
//                 <input type="text" placeholder="Search..." 
//                 className=" sm:w-[35vw] w-[50vw] border-none px-4 py-2 w-[35vw] focus:outline-none rounded-lg"
//                 />
//                 <button className="py-2 px-4 text-white  bg-pink-600 hover:bg-pink-700 rounded-md">Search</button>
//             </div>
//         </div>
//       </section>



//      <section className="w-[100vw] flex flex-col justify-center items-center p-5">
//         <h2 className="text-3xl font-bold text-gray-700 mb-8 text-pink-600">
//             Explore Food
//         </h2>
//         <div className="w-full flex flex-wrap items-center justify-center gap-16">
//             {
//               foodCards.map((item) => (
//                 <FoodCards key={item.id} name={item.name} image={item.imgUrl} />
//               ))
//             }
//         </div>
//      </section>

//         <section className="mx-auto mt-10">
//           <h2 className="text-center font-bold text-2xl text-pink-600">Food Menu</h2>
       
//        <div className="flex flex-wrap justify-around mt-10 gap-4">
//         {
//           menuCards.map((item) => (
//             <MenuCards key={item.id} name={item.name} price={item.price} image={item.imgURL} />
//            ) )
//         }
//           </div>
//           </section>
//     </div>
//   );
// }

// export default Home;