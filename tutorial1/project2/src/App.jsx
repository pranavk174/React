import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { PiCursorClickFill } from "react-icons/pi";
import viteLogo from '/vite.svg'


import "./App.css"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import {filterData , apiUrl } from "./components/data"
import Spinner from "./components/spinner"

function App() {

  const [courses , setCourses] = useState([]);   // isme hamne course ki initial value empty array rkhi hai
  const [loading , setLoading ] = useState(false)
  const [category , setCategory] = useState(filterData[0].title)
  useEffect(()=>{

    const fetchData = async()=>{     // isse ham api se data fetch krne k liye likha hai
      setLoading(true)     // ye true kr diya taaki jb tk content load nhi hota tb tk loading hota rhega spinner

      try{     
      const res = await fetch(apiUrl)
      const output = await res.json()
      console.log("fetched successfully")
      

      setCourses(output.data)
      }
      catch(err){
        toast.error("Not fetched succesfuuly")
      }
      setLoading(false)
    }
    fetchData()
  },[])


  


  return (
    <>
      <div className="flex flex-col  gap-[2rem] min-h-[100vh] w-[100vw] items-center ">
    
        <div>
        <Navbar/>
        </div>
        <div>
        <Filter  filterdata = {filterData} category = {category} setCategory={setCategory}/>
        </div>
        <div className=" flex items-center justify-center min-h-[90vh]">
        {loading ? <Spinner />: <Cards category ={category}  courses={courses}/>  }
        </div>
        <div id="circle" className="circle"></div>
    
    
     
        </div>
    </> 
  )
}

export default App
