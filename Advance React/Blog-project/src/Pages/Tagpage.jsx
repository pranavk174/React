import React from 'react'
import { useNavigate , useLocation } from 'react-router-dom'
import Header from "../components/head"
import Card from "../components/Card"
import Pagination from "../components/paginations"
import Blog from "../components/content"

export default function Tagpage() {

    const navigation = useNavigate()
    const location = useLocation()
    const tag = location.pathname.split("/").at(-1) 
  return (
    <div className="">
        <Header/>
        <div className="flex flex-col items-center">
       <div className=" w-[40vw] ">
       <div className="ml-2 flex gap-4 mt-4 ">
            <button className="px-3 py-1 border-2 rounded-md " onClick ={ ()=> navigation(-1) } >
                back
            </button>
            <h2 className="text-center mt-[.4rem] font-bold ">Blogs Tagged  <span>#{tag}</span></h2>
        </div>
       </div>
        <Blog/>
        <Pagination/>
        </div>
      
    </div>
  )
}
