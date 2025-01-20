import { useState } from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import  Card  from './components/Card'
import { Route, Router, Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import Routing from './utils/Routing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className="flex flex-col h-screen"> 
      <div className="fixed top-0 left-0 w-full z-10 ">
        <Navbar />
      </div>
      <div className="flex flex-grow pt-[60px] "> 
        <div className='fixed top-[60px] left-0 w-[15%] h-[calc(100%-60px)] bg-red-400'>
        <Menu />
        </div>
        <Routing/>
        {/* <div className="flex-grow overflow-y-auto">  */}
        <div className="ml-[15%] w-[85%] overflow-y-auto">  
          <Card/>
        </div>
      </div>
    </div>
   
    </>
    
  )
}

export default App
