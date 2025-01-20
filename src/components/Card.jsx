import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails';
//https://dummyjson.com/products

const Card = () => {
  return (
    <>
    <div className='w-full h-full p-10  bg-blue-100 flex flex-wrap gap-12 overflow-y-auto '>
      <div className='bg-red-400 w-[13%] h-64 p-2  flex flex-col rounded-md'>
          <img className='bg-blue-400 w-[90%] h-[65%] m-auto object-contain rounded-md' src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="" />
          <h2 className='text-sm m-auto font-medium'>Essence Mascara Lash Princess</h2>
          <div className='flex justify-between items-center'>
          <h2 className='text-xl font-bold'>$460</h2>
          <Link to={"/details"} className='text-sm bg-black px-2 py-1 rounded-lg text-white font-semibold'>View More</Link>
          </div>
      </div>
      </div>
      </>
     
  )
}

export default Card;
