import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from "./components/heading"
import Div from "./components/div"
import Testimonials from "./components/testimonials"
import reviews from "./assets/data"

function App() {
  

  return (
    <>
     <div className="bg-red-100 min-w-[100vw] flex flex-col justify-center items-center min-h-[100vh]">
     <div className="flex flex-col  relative top-[7rem] gap-3  items-center">
     <Heading/>
     <Div/>
     </div>
      <Testimonials reviews={reviews} />
     </div>
       
    </>
  )
}

export default App
