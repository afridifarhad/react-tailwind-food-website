import React from "react";

function MenuCards({name, price, image}) {
  return (
    <div className="flex border border-gray-300 rounded-md px-4 py-2 gap-x-2 md:w-[40%]">
      <img
        className="w-32 h-32 object-cover rounded-md"
        src={image}
        alt=""
      />
      <div className="flex flex-col ">
        <span className="text-gray950 text-lg font-semibold">{name}</span>
        <span className="">Rs.{price}</span>
        <p>This is a brief description of the product.</p>
      <button className="py-2 w-32 px-2 text-white bg-pink-400 rounded-md">Order Now</button>
      </div>
    </div>

  );
}

export default MenuCards;
