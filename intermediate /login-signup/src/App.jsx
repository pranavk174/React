import { useEffect, useState } from 'react'
import {Routes , Route } from 'react-router-dom'
import Mainheader from "./components/mainheader"
import Nav from "./components/nav"
import Dashboard from "./components/dashboard"
import Signup from "./components/signup"
import Login from "./components/login"
import Home from "./components/home"
import Notfound from "./components/notfound"
import About from "./components/about"
import Contact from "./components/contact"
import { FcAbout } from 'react-icons/fc'


function App() {
    
 
    
 
const [ IsLoggedIn , SetIsLoggedIn] = useState(false) ;
useEffect (()=>{
  
  console.log("app is ready to use bro", IsLoggedIn)
  
    
})
  return (

     <div className="bg-black text-white min-w-[100vw] min-h-[100vh]">
      <Nav IsLoggedIn = {IsLoggedIn} SetIsLoggedIn = {SetIsLoggedIn}/>
      <Routes>
      <Route path="/" element={ <Mainheader/> }>  {/* hamne nesting kr di routes ki ,ye parent route hai */} 
      <Route index element={ <Home /> }/>    {/*  this is the default route */}
      <Route path="/login" element={ <Login IsLoggedIn = {IsLoggedIn}  SetIsLoggedIn = { SetIsLoggedIn } /> }/> 

      <Route path="/signup" element={ <Signup IsLoggedIn = {IsLoggedIn} SetIsLoggedIn = {SetIsLoggedIn} /> }/> 
      <Route path="/about" element={<About/> }/>
      <Route path="/contact" element={<Contact/> }/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<Notfound/>} />  
      </Route>
       </Routes>
      
    
     </div>

  )
}

export default App
