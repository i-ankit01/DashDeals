import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[10%] p-3 bg-white bg-opacity-70 backdrop-blur-md'>
      <nav className='flex items-center justify-between'>
        <h1 className='font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-3xl md:ml-7 ml-3 cursor-pointer'>
          DashDeals
        </h1>

        <div className='flex items-center gap-2 bg-gray-300 px-2 py-1 rounded-lg w-[35%] hidden md:block '>
          <i className="ri-search-line text-gray-500 text-lg mt-1"></i>
          <input
            className='w-[90%] focus:placeholder-gray-400 bg-transparent text-xl outline-none placeholder-gray-500'
            type="text"
            placeholder='Explore items'
          />
        </div>

        <div className='flex items-center gap-5 mr-7 hidden md:flex'>
          <i className="ri-shopping-cart-2-fill cursor-pointer hover:bg-gray-300 p-1 rounded-full text-3xl"></i>
          <i className="ri-user-3-fill text-3xl cursor-pointer hover:bg-gray-300 p-1 rounded-full"></i>
        </div>

        {/* menu icon  */}
        <div className='md:hidden flex items-center'>
          <i className="ri-menu-fill text-3xl cursor-pointer hover:bg-gray-300 p-1 rounded-full"></i>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
