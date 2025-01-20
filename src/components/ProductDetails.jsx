import React from 'react'
import Navbar from './Navbar'

const ProductDetails = () => {
  return (
    <>
      <Navbar/>
    <div className='w-[100%] h-[90%] flex '>
      <div className=' w-[30%] h-[75%] ml-14 mt-14 flex flex-col items-center rounded-md border-2 border-black'>
        <img className='bg-red-500 w-[90%] h-[80%] mt-5 rounded-md ' src="/" alt="" />

      </div>
    </div>
    </>
  )
}

export default ProductDetails
