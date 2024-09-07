import "./style.css"
import ItemDate from "./file.js"
import {useState} from "react"



const date = [
    {
      day :3,
      month : "june",
      year:2021
    },
    {
      day :2,
      month : "july",
      year:2022
    },
    {
      day :1,
      month : "aug",
      year:2020
    },
    {
      day :9,
      month : "sep",
      year:2023
    },
  ]
  

  

function Item(props){        
     
    
    return(
        <div className="flex bg-blue-500 rounded-xl p-4 justify-between  items-center">
         <ItemDate day = {props.day} month={props.month} year={props.year} > </ItemDate> 
         <h1 className=" font-bold text-[2rem]">{name}</h1>
         {props.children}
         <button className="bg-green-400 p-2 " onClick={clickHandler}>click me</button>
         </div>
       
    )
}

export default Item;