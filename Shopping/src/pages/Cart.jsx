import { div } from 'framer-motion/client';
import React,{useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import Cartpage from "../components/Cartpage"
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cart } = useSelector((state)=>state) ;
    const [totalAmount , setTotalAmount] = useState(0); 
    useEffect(()=>{
      setTotalAmount( cart.reduce((acc, curr) => acc + curr.price, 0) )
    },[cart])
  return (
    <div className="flex justify-center "> 
      {
        cart.length>0 ? (
       <div className=" flex gap-[3rem]  ">
         <div className="  w-full md:w-[55%] h-[100vh] mb-6 overflow-scroll ">
          {
            cart.map((item,index)=> {
              return  <Cartpage key={item.id} item={item} index = {index}/>
            })
          }
           
        </div>
        <div className="w-full md:w-[40%] max-h-[100vh] flex flex-col p-3 justify-evenly">
          <div className='font-bold text-green-700'><h2 className='text-[1.3rem]'>YOUR CART <br /> <span className='text-[2.7rem]'>SUMMARY</span></h2>
          <h1 className='text-[1.3rem] text-gray-700'>Total Items : {cart.length}</h1>
          </div>
          <div className="gap-3 flex flex-col" > 
            <h2 className="font-bold text-gray-500">Total Amount: <span className="text-black font-extrabold text-[1.3rem]">${totalAmount}</span> </h2>
            <Link to=""><button className="bg-green-600 w-full p-4 rounded-xl font-bold" >CheckOut</button></Link>
          </div>
        </div>
       </div>
        ) : (
          <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col gap-3">
            <h1 className="font-bold">Cart Empty</h1>
            <Link to="/"><button className="font-bold bg-green-700 rounded-xl p-5">Go To Home</button></Link>
          </div>
        )
      }
    </div>
  )
    }