import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes , Route , NavLink} from 'react-router-dom'
import Help from "./components/help"
import About from "./components/about"
import Notfound from "./components/notfound"
import Home from "./components/home"
import Mainheader from "./components/Mainheader"


function App() {


  // React me ham <a/>  anchor tag ka use nhi krenge.. uske badle ham Link tag ta NavLink tag ka use krenge  jaise iss me kiya hai
  // <a href="/">Home</a>    ->  ye v same kaam krega 
  // <Link to="/">Home</Link>  ->  ye v same kaam krega
  // <NavLink to="/">Home</NavLink>    -> ye v same kaam krega   but ham isko use krenge 

  return (
    <>
    <nav >
      <NavLink to="/">Home</NavLink>     {/* hm Link tag v use kr skte the but usse hame pta nhi chalega ki ham abhi kon se rooute pe hai to issliye hamne NavLink tag use kiya jo clik hone k baad uspe "active" class laga deta and ham uspe styling add krke pta kr skte h ki abhi ham kon si route pe hai */}
      <NavLink to="/about">about</NavLink>
      <NavLink to="/help">Help</NavLink>

    </nav>
     
     <Routes>
      <Route path="/" element={ <Mainheader/> }>  {/* hamne nesting kr di routes ki ,ye parent route hai */} 
      <Route index element={<Home/>} />    {/*  this is the default route */}
      <Route path="/about" element={ <About/> }/> 
      <Route path="/help" element={ <Help/> }/> 
      <Route path="*" element={<Notfound/>} />  
      </Route>
       </Routes>
      
    </>
  )
}

export default App
