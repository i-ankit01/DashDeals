import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Menu from './Menu'
import axios from '../utils/Axios'


const Home = () => {

    const [products , SetProducts ] = useState([])
    async function getProducts (){
        const product = await axios.get("/products");
        console.log(product)
        SetProducts(product.data.products);
      }
      
     useEffect(()=>{
      getProducts()
     } , [])

  return (
    <>
      <div className="flex flex-col h-screen overflow-x-hidden"> 
      <div className="fixed top-0 left-0 w-full z-10 ">
        <Navbar />
      </div>
      <div className="flex flex-grow pt-[60px] "> 
        <div className='fixed top-[60px] left-0 w-[15%] h-[calc(100%-60px)] bg-red-400'>
        <Menu />
        </div>
        {/* <div className="flex-grow overflow-y-auto">  */}
        <div className="ml-[15%] w-[85%] overflow-y-auto  ">  
          <Card products={products} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
