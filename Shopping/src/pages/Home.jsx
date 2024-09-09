import React,{useState ,useEffect } from 'react'
// import {products} from "../data" 
import Product from "../components/Products"
import { CgSpinnerTwoAlt } from "react-icons/cg";
import "../index.css"

import { div } from 'framer-motion/client';


export default function Home() {
const url = "https://fakestoreapi.com/products"
const [loading , SetLoading] = useState(false)
const [products , setProducts] = useState([])


const fetchData = async()=>{
   SetLoading(true)
    try{
        const res = await fetch(url)
        const data = await res.json()
        if(data){
            console.log("yhi data hai",data)
            setProducts(data)
        }
        else{
            console.log("error ho gya")
        }
    }
    catch(err){
        console.log(err, "yhi error hai bahi")
        setProducts([])
    }
    SetLoading(false)
}

useEffect(()=>{
    fetchData()
},[])

  return (
    <div className="flex justify-center items-center " >
    
      {
     
        loading ? (
          <div className="min-h-[100vh] flex  min-w-[100vw] justify-center items-center text-[5rem]">
            <CgSpinnerTwoAlt />
          </div>
        ) :( products.length > 0 ? (  <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem] my-[5rem]  justify-center items-center  ">
         { products.map((product) => (
            <Product key={product.id} product={product} className="" />
          ))
  }    </div> ): (
          <div>No data Found</div>
        ))
      
      
      }
    </div>
   ) 
}


