import { useState,useEffect,useContext } from 'react'
import { useNavigate , useLocation } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Head from "./components/head"
import Content from "./components/content"
import Pagination from "./components/paginations"
import { AppContext } from './contexts/contextApi'
import {Routes , Route , useSearchParams} from "react-router-dom"
import Home from "./Pages/Home"
import Category from "./Pages/categoyPage"
import Tag from "./Pages/Tagpage"
import Blogpage from "./Pages/blogpage"
// import './App.css'

function App() {
  const {fetchBlog} = useContext(AppContext)

  const [searchParams , setSeacrchParams] = useSearchParams()       // ye hook querysting se value ko fetch krne k kaam aata hai
  const location = useLocation();     
  
  
  useEffect(()=>{              // iss code ka poora explanation diya hai iss link me " https://chatgpt.com/share/16328b4a-9669-4620-ba9b-a9e9d79cc30e "
    const page = searchParams.get("page") ?? 1      
       if(location.pathname.includes("tags")){
      let tag = location.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchBlog(Number(page) , tag)
      console.log(tag)
      
    }
   else if(location.pathname.includes("category")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchBlog(Number(page), null , category)
    }
    else{
      fetchBlog(Number(page))
    }
    
    console.log("ui rendered")
    

  },[location.pathname ,location.search])

  return (
    <div className="min-h-[100vh] min-w-[100vw] flex flex-col items-center justify-center">
      <Routes>
        <Route path="/" element={  <Home/>}> Home </Route>
        <Route path="/blog/:blogId" element={ <Blogpage/> }> Content</Route>
        <Route path="/tag/:tagid" element={ <Tag/> }> Pagination</Route>
        <Route path="/category/:category" element={ <Category/> }> Pagination</Route>
      </Routes>


   
    
    
    </div>
  )
}

export default App
