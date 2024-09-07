import React from 'react'
import Login from "./loginpage"
import Signup from "./signupPage"

export default function template({title,desc1,desc2,formtype,image , IsLoggedIn, SetIsLoggedIn}) {
    
  return (
    
        <div className="flex w-full md:min-h-[100vh] text-white bg-black md:justify-center  ">
     <div className="">
        <div className="min-w-[50vw]   min-h-[70vh] flex items-center flex-col  ">
      <div className="space-y-4 w-[25vw] mt-[3rem] ">
        <h1 className="font-bold text-[1.8rem]    ">{title}</h1>
        <p className="max-w-[25rem] ">{desc1} <br /><i className="text-blue-400">{desc2}</i></p>
     </div>

     {
        formtype === "signup" ? <Signup  SetIsLoggedIn = {SetIsLoggedIn} IsLoggedIn ={IsLoggedIn }/> : <Login  SetIsLoggedIn = { SetIsLoggedIn }  IsLoggedIn  = { IsLoggedIn } />
     }


</div> 
</div>  
<div className="w-[40vw] flex  flex-col items-center justify-center min-h-[70vh]  ">
        <div className="w-[30rem]   h-[25rem] ml-7  mt-[10rem] opacity-[0.8] bg-[url('https://img.freepik.com/free-photo/green-paint-wall-background-texture_53876-23269.jpg')]"></div>
            <img className="w-[30rem] relative bottom-[31rem] z-10 rounded-xl h-[25rem] mt-[5rem] shadow-inner shadow-white" src={image} alt="image" />
             </div>   
    </div>
  )
}
