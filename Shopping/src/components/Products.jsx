import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartPage from "../components/Cartpage"
import {add ,remove} from "../redux/Slices/cartSlice"
import { button } from 'framer-motion/client'
import { toast } from 'react-hot-toast'
export default function Products({product}) {

  // const [Selected , setSelected] = useState(false)
  const cart = useSelector((state=> state.cart))
  
  const dispatch = useDispatch()
const Add = ()=>{
  dispatch(add(product)) ;
  toast.success("Add successfully")
}
const Remove = ()=>{
  dispatch(remove(product.id)) 
  toast.success("Removed successfully")
}
  return (
    <div className="flex  px-4  shadow-xl flex-col w-[15rem] border hover:scale-125 z-10 bg-[#f4f4f5] transition-[0.3s] duration-[0.4s] rounded-xl  overflow-hidden justify-evenly  items-center  h-[21rem] ">
      <div className="text-start flex  flex-col items-center  w-[11rem]  justify-center space-y-3">
        <h1 className="font-bold text-[1rem]  w-full">{product.title.substring(0, 17)}..</h1>
      <p className="text-[.8rem] text-wrap">{product.description.substring(0,48)}...</p>
      <img className="w-auto h-[8.5rem] " src={product.image} alt="" />
      </div>
      <div className="flex justify-between items-center font-bold w-full">
        <h3 className="font-bold text-green-600">${product.price}</h3>
       
       {
        cart.some((p)=> p.id == product.id) ? (<button className="bg-black text-white hover:text-black rounded-xl px-3 py-1 hover:bg-red-700 transition-[0.3s] duration-[.4s]" onClick={Remove}> Remove</button>) : (<button className="bg-black text-white hover:text-black rounded-xl px-3 py-1 hover:bg-green-500 transition-[0.3s] duration-[.4s]" onClick={Add}>Add</button>  )
       }
        
      </div>
    </div>
  ) 
}
