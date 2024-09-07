import React from 'react'
import Card from "./card"
import {useState} from "react"
export default function testimonials({reviews}) {

    const [index , setindex] = useState(0)

    const onLeftClickHandler = ()=>{
     if(index - 1 < 0){
        setindex(reviews.length - 1)
     }
     else{
        setindex(index-1)
     }
    }
    const onRightClickHandler = ()=>{
        if(index + 1 >= reviews.length){
            setindex(0)
         }
         else{
            setindex(index+ 1)
         }
    }
    const onSurprizeClickHandler = ()=>{
        let result = Math.floor(Math.random() * reviews.length)
        setindex(result)
    }
  return (
    <div>
      <Card  left = {onLeftClickHandler} right = {onRightClickHandler}  surprize={onSurprizeClickHandler} review={reviews[index]} />
      
    </div>
  );
}
