import React,{useContext} from 'react'
import Card from "./Card"
import { Audio } from 'react-loader-spinner'
import {AppContext} from "../contexts/contextApi"


export default function content() {
  const {loading,posts} = useContext(AppContext)

  
  return (
    <div className="flex  justify-center gap-[3rem] items-center flex-col w-[40rem] min-h-[100vh] mt-6 mb-[4rem]">
    {
      loading ? <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle 
      wrapperClass
    />
     : posts.length === 0 ? ( <div>
      <h1>No Post Found Bro</h1>
     </div> ) : ( posts.map(post=>{ return   <Card  key = {post.id} post = {post} /> }))
    }  
    </div>
  )
}
