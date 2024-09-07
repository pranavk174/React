import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Head from "./components/head"
import Contentf from "./components/contentf"
import Contents from "./components/contents"
import UseGif  from "./hooks/UseGif"      


function App() {

  const {gif , fetchData , loading} = UseGif();
  return (
<div className="flex flex-col justify-evenly   items-center min-h-[120vh] cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52l9LTXoKBtNMgqGLv2Mmk7Up9Zf4dUIJNSxZJTVW2eJ7_dQSdeFCncLPLvTFvLuJeUc&usqp=CAU')] ">
  <Head/>
  <Contentf  />
  <Contents />
</div>
  )
}

export default App
