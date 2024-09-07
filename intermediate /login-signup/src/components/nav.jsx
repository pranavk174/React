import React from 'react'
import {NavLink,Link, useNavigate } from "react-router-dom"
import "./stylings/nave.css"
import { SiKnowledgebase } from "react-icons/si";


export default function nav({ IsLoggedIn , SetIsLoggedIn }) {
  const navigate= useNavigate()

  const onClickLogin =()=>{
    navigate("/login")
  }

  const onClickSignUp =()=>{
    navigate("/signup")

  }

  const onClickLogout = ()=>{
    SetIsLoggedIn(false)
    toast.success("logged out Successfully")
    navigate("/login")
  }

  const onClickDashBoard = ()=>{
    navigate("/dashboard")
  }

  
  return (
   
   <nav className=" flex justify-evenly font-bold bg-black text-white h-[4rem]   items-center">
    <div className="flex text-center  items-center gap-1">
      <Link className="flex items-center gap-1" to="/"><SiKnowledgebase className="text-[2rem]" /> <span className="font-bold">StudyNotion</span> </Link>

    </div>
    
    <div className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </div>


  


    { !IsLoggedIn &&
    <div className="space-x-4 flex text-black">
        <button className="border-2 bg-white py-1 px-2 rounded-xl" onClick={onClickLogin}>Login</button>
        <button className="border-2 bg-white py-1 w-full px-2 rounded-xl" onClick={onClickSignUp}>SignUp</button>
    </div>
}
{ IsLoggedIn && 
   <div className="flex gap-3">
     <div className="space-x-4 flex text-black">
        <button className="border-2 bg-white py-1 px-2 rounded-xl" onClick={onClickLogout}>Log Out</button>   
    </div>
    <div className="space-x-4 flex text-black">
    <button className="border-2 bg-white py-1 px-2 rounded-xl" onClick={onClickDashBoard}>Dashboard</button>
</div>
   </div>

    
}

   </nav>
  )
}
