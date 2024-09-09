import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes , Route} from "react-router-dom"
// import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from "./pages/Cart.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/> } ></Route>
      <Route path="/cart" element={<Cart/> }></Route>
    </Routes>

   </div>
  )
}

export default App
