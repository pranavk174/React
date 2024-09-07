import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState(" ")
  const [name ,setName] = useState("panav")

 

  //   useEffect() ->  iss state ka kaam ye hai ki agr hmne koi functionality add ki hai nd ham nhi chahte ki uske alawa vo effect khi dure component pe pre to issliye ye use krte hai ye render hone k baad last me call hota hai / 
//   useEffect() -> agr ham koi tsk perform karwan chahte hai screen render hone ke baaad to iss hook ka use krte hai
  // useEffect( ()=>{               // ye FIRST variant hai isme hm jitni baar v ui me change karenge ye utni baar call hoga
  //   console.log("UI rendered bro");
  // })

 //  useEffect( ()=>{               // ye SECOND variant hai isme hm jitni baar v ui me change karenge ye sirf ek baar hi call hoga 1st render k baad
 //   console.log("Ui rendered bro ");
 // },[] )  // y empy array me hmne dependency define kii hai ki 
 

  useEffect( ()=>{               // ye THIRD variant hai isme hm jitni baar v ui me change karenge ye sirf ek baar hi call hoga 1st render k baad
    console.log("changes observed ");
  },[name] )   // isme ye hua ki agr name ki value change hogi tb ye call hoga wrna nhi hoga... , isme ham multiple value daal skte hai array me jinpe v effect chahte h to
 
  const onChangeHandler =(e)=>{
    setText(e.target.value)
    console.log(e.target.value) 
  }

  return (
    <>
    <div>
      <input className="bg-white w-[30rem] h-[14rem] " onChange={onChangeHandler} type="text" />
    </div>
    </>
  )
}

export default App
