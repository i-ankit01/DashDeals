import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from '../components/ProductDetails'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/details' element={<ProductDetails/>} />
      </Routes>
    </div>
  )
}

export default Routing
