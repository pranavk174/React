import React from 'react'
import Header from "../components/head"
import Card from "../components/Card"
import Pagination from "../components/paginations"
import Blog from "../components/content"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header/>
      
        <Blog/>
        <Pagination/>
      
    </div>
  )
}
