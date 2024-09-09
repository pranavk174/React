import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from "../redux/Slices/cartSlice"
import { toast } from 'react-hot-toast'




export default function Cartpage({item,index}) {

  const dispatch = useDispatch()
  const handleRemove = () => {
    dispatch(remove(item.id))
    toast.success("Removed successfully")

  }
  return ( 
    <div className="flex p-7  w-full border-b-2 border-black px-3 ">


      <div className=" flex justify-center items-center w-[60%] ">
    <img className="h-[15rem] w-[10rem] flex justify-center items-center" src={item.image} alt="" />
      </div>
      <div className=" flex gap-[2rem]  flex-col w-full ">
<h1 className='font-bold text-[1.3rem]' >{item.title}</h1>
<p className='w-full '>{item.description.substring(0,90) }...</p>
<div className="flex justify-between">
  <p className="text-green-600 font-bold text-[1.2rem]">${item.price}</p>
  <button className="bg-red-600 p-3 hover:bg-red-800 rounded-full" onClick={handleRemove} ><MdDelete />
  </button>
</div>
      </div>
    </div>
  )
}
