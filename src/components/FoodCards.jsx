import React from 'react'

function FoodCards({ name, image }) {
  return (
    <div className=' relative rounded-md overflow-hidden'>
        <img className='h-[400px] rounded-md'
        src={image} alt="" />
        <p className='bottom-[10%] right-[50%] translate-x-[50%] translate-y-[50%] absolute text-white font-semibold '>{name }</p>

    </div>
  )
}

export default FoodCards