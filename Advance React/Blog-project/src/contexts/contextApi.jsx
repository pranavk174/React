import React,{createContext , useState} from 'react'
import axios from "axios"
import {baseUrl} from "../baseUrl"
import {useNavigate} from "react-router-dom"


// step 1 creation 
export  const AppContext = createContext()
export default function AppcontextProvider({children}) {  
    const [loading , setLoading] = useState(false)
    const [posts , setPosts] = useState([])
    const [page , setPage] = useState(0)
    const [totalPages , setTotalPages] = useState(null)
    const navigate = useNavigate()



    const fetchBlog = async( page=1 , tag=null , category )=>{ 
       
        setLoading(true)
         let url = `${baseUrl}?page=${page}`
         if(tag) url += `&tag=${tag}`
         if(category) url += `&category=${category}`
         
       try{
        const res = await fetch(url)
     const data = await res.json()
     if(!data.posts || data.posts.length === 0){
        throw new Error("Something went wrong")
     }
        setPage(data.page)
        setPosts(data.posts)
        setTotalPages(data.totalPages)
       }
       catch(err){
        console.log(err)
        setPage(1)
        setPosts([])
        setTotalPages(null)
       }
       setLoading(false)
    }

    const handlePageChange = (page)=>{
        navigate({search: `?page=${page}`})
    
        setPage(page)
        
    }

const value = {
    posts , 
    setPosts,
    loading ,
    setLoading ,
    page , 
    setPage ,
    totalPages ,
    setTotalPages,
    fetchBlog,
    handlePageChange 
}

return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>

}

