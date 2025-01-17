import { useState } from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import  Card  from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col h-screen"> 
      <Navbar />
      <div className="flex flex-grow "> 
        <Menu />
        <div className="flex-grow"> 
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default App
