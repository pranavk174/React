import React,{useState , useEffect} from 'react'
import UseGif from "../hooks/UseGif"    // hamne hook banaya khud ka


export default function Contents( ) {

  const {gif , fetchData , loading} = UseGif()
  const [tag , SetTag] = useState("")

const onClickHandler =()=>{
  fetchData()
 }

const ChangeHandler =(event)=>{
   SetTag(event.target.value)
  }


  return (
    <div className="flex flex-col w-[47vw] rounded-xl justify-around items-center bg-green-400 h-[50vh] ">
      <h1 className="font-bold text-[1.5rem] uppercase underline">RANDOM {tag} GIF</h1>
      <img className="w-[30vw] h-[27vh] rounded-xl " src={loading ? "https://loading.io/assets/mod/spinner/spinner/lg.gif" : gif }/> 
    
     <input onChange={ChangeHandler}  value={tag} className="w-[80%] text-center rounded-xl py-2" type="text" />
     <button className="bg-white w-[80%] rounded-xl font-bold py-2" onClick={onClickHandler} >GENERATE</button>
   
    </div>
  )
}
