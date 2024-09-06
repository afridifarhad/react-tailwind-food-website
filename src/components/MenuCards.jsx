import React from "react";

function MenuCards() {
  return (
    <div className="flex border border-gray-500 px-4 py-2 gap-x-2 md:w-[40%]">
      <img
        className="w-32 h-32 object-cover rounded-md"
        src="https://images.pexels.com/photos/27626531/pexels-photo-27626531/free-photo-of-authentic-mexican-food.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <div className="flex flex-col ">
        <span className="text-gray950 text-lg font-semibold">K2 burgur</span>
        <span className="">Rs.300</span>
        <p>This is a brief description of the product.</p>
      <button className="py-2 w-32 px-2 text-white bg-pink-400 rounded-md">Order Now</button>
      </div>
    </div>

  );
}

export default MenuCards;
