import React from 'react'
import { useLocation , useNavigate  } from 'react-router-dom'
import Header from "../components/head" 
import Pagination from "../components/paginations"
import Blog from "../components/content"

export default function categoyPage() {

    const Navigate = useNavigate();
    const location = useLocation()
    const category = location.pathname.split("/").at(-1) 
  return (
    <div >
        <Header/>
       
        <div className="flex  flex-col  items-center">
       <div className="mt-5 w-[40vw]">
       <div className="flex gap-3">
            <button className="px-3 py-1 border-2 rounded-md " onClick ={ ()=> Navigate(-1) } >
                back
            </button>
            <h2 className="text-center mt-[.4rem] font-bold ">Blogs on <span>#{category}</span></h2>
        </div>
       
      
       </div> <Blog/>
        <Pagination/>
        </div>
       
    </div>
  )
}
