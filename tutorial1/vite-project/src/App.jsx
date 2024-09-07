import { useState } from 'react'

// import './App.css'
import Heading from "./components/heading"
import Content from "./components/contents"
import data from "./assets/data"

function App() {


 const [tours, setTours] = useState(data)
 const removeTour = (id)=>{

  const newTour = tours.filter(tour => tour.id !== id)        // ye method krega ki srf uss particular id ka data ko nikaal k baaki k bache ho data ko store krwa dega variable me and fir vo new variable ki avalue ko set kr dega
  setTours(newTour)
 }

 if(tours.length <= 0){
  return(
    <div className='min-h-[100vh] w-[100vw] flex flex-col gap-3  justify-center items-center '>
      <h2 className="font-bold text-[2rem]">No tours Left</h2>
      <button className="text-white" onClick={ ()=>{
        setTours(data)
      } }>Refresh</button>
    </div>
  )
 }

  return (
    
  <div className="space-y-[2rem] mb-[5rem]">
    <Heading/>

    <Content tours={tours} removeTour = {removeTour}></Content>
  </div>
  
  )
}

export default App
