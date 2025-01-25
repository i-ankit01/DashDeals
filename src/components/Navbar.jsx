import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-[100%] h-[10%] bg-black p-3 '>
      <nav className='flex items-center justify-between'>
        <h1 className='font-bold text-white text-3xl ml-7 cursor-pointer'>DashDeals</h1>
        <div className='flex items-center gap-2 bg-white px-2 py-1 rounded-lg w-[30%] '>
        <i  className="ri-search-line  text-gray-400 text-lg mt-1 "></i>
        <input className=' w-[90%] focus:placeholder-gray-200 bg-transparent text-black text-xl outline-none placeholder-gray-400' type="text" placeholder='Explore items' />
        </div>
        <div className='flex items-center gap-5 mr-7'>
        <i className="ri-shopping-cart-2-fill text-white cursor-pointer hover:bg-gray-300 p-1 rounded-full text-3xl"></i>
        <i className="ri-user-3-fill text-3xl text-white cursor-pointer hover:bg-gray-300 p-1 rounded-full"></i>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
