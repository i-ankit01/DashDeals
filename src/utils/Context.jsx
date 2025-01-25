import React, { createContext, useEffect, useState } from 'react'
import axios from './Axios';

export const ProductContext = createContext()

const Context = (props) => {

    const [products , SetProducts ] = useState([])
    async function getProducts (){
        const product = await axios.get("/products");
        // console.log(product)
        SetProducts(product.data.products);
      }
      
     useEffect(()=>{
      getProducts()
     } , [])

  return (
    <div>
      <ProductContext.Provider value = {[products , SetProducts ]} > {props.children} </ProductContext.Provider>
    </div>
  )
}

export default Context
