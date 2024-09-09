import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

import { TbBrandApplePodcast } from "react-icons/tb";
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function Navbar() {
  const cart = useSelector((state) => state.cart)


    const iconVariants = (duration)=>({
        initial:{y:-3 },
        animate:{
            y:[3, -2],
            
            transition:{
                duration:duration,
                ease:"linear",
                repeat :Infinity,
                repeatType:"reverse"
            }
        }
    })
  return (
    <div className="bg-green-500 flex py-2 items-center ">
      <NavLink to = "/" > <div className="w-[50vw] flex text-black justify-center items-center text-[3rem]"><TbBrandApplePodcast />eCom  </div></NavLink>
     
      <div className="w-[50vw] flex gap-3 justify-center " ><NavLink to = "/"><h1 className="text-[1.1rem] mt-1 font-bold" >Home</h1></NavLink>
      <NavLink to="/cart"> <div className="flex"> <FaShoppingCart className="text-[2rem]" />
    {
      cart.length > 0 &&  <motion.i variants={iconVariants(.8)} initial="initial" animate="animate" className="bg-white text-[.7rem] text-red-500 -z-5 relative right-3 flex justify-center items-center w-[1rem] h-[1rem] rounded-full" >{cart.length}</motion.i>
    
    } </div> </NavLink>   

      </div>
    </div>
  )
}
