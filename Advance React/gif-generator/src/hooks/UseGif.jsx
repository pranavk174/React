import React,{useState , useEffect} from 'react'
import axios from "axios"

const API_KEY = "9fWIq5Y5HNiGMHaWCGGGL5Tlkz4x9kUq"
export default function UseGif(tag) {
    
     const memeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
     const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`


    const [ gif , setGif ] = useState("")
    const [loading , setLoading] = useState(true)
    const fetchData =  async(tag)=>{
    try{
      setLoading(true)  
      const {data} =  await axios.get(tag ? tagMemeurl : memeurl)
      const fetchedData = data.data.images.downsized_large.url  
      setGif(fetchedData)
      setLoading(false)
      
    }
    catch(err){
        console.log("ye error ho gya",err)
    }
  } 
  
  useEffect(()=>{
    fetchData("car")
  },[])
  

  return  {  gif, loading,fetchData}
}
