import React from 'react'
import {useNavigate} from "react-router-dom"

export default function () {
const navigate = useNavigate();    // ye hook navigation ke liye use krte hai ham.... 

const clickhandler = ()=>{
    navigate("/about")
}
const backhandler = ()=>{
    navigate(-1)
}

  return (
    <div>
      How can i help you sir
      <button onClick={clickhandler}>Move to About page</button>
      <button onClick={backhandler}>Move to Backward</button>
    </div>
  )
}
