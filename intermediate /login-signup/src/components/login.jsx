
import React from 'react'
import Template from "./template"

export default function login({IsLoggedIn , SetIsLoggedIn} ) {
  return (
    <Template 
    IsLoggedIn ={IsLoggedIn }
    SetIsLoggedIn = { SetIsLoggedIn } 
    title = "Welcome Back !" 
    desc1 = "Build skills for today ,tomorrow And beyond." 
    desc2 = "Eductaion to future-proof Your Career" 
    formtype = "login" 
    image = "https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg"
  
    />
  )
}
