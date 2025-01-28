import { useEffect, useState } from 'react'
import { Route,  Routes } from 'react-router-dom'
import DetailsPage from './components/DetailsPage'
import Home from './components/HomePage'



function App() {

  return (
    <>
      <div className='h-screen w-screen'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/details/:id' element={<DetailsPage/>} />
          </Routes>
      </div>
    </>
    
  )
}

export default App
