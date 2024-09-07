import React from 'react'


import Template from "./template"
export default function signup({IsLoggedIn , SetIsLoggedIn} ) {
  return (
    <Template 
    SetIsLoggedIn = { SetIsLoggedIn } 
    IsLoggedIn ={ IsLoggedIn }
    title = "Join the million Learning to Code with studyNotion for free" 
    desc1 = "Build skills for today ,tomorrow And beyond." 
    desc2 = "Eductaion to future-proof Your Career" 
    formtype = "signup" 
    image = "https://wallpapers.com/images/featured/information-technology-pictures-nucb4z97b3q78mjk.jpg"
  
    />
     

  )
}
