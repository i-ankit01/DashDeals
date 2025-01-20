import { useEffect, useState } from 'react'
import { Route,  Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import Home from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <div className='h-screen w-screen'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/details' element={<ProductDetails/>} />
          </Routes>
      </div>
    </>
    
  )
}

export default App
