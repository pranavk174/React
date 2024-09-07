
import './App.css';
import Products from "./components/Products"
import Newproduct from "./components/newProduct"

function App() {

  const products = [
    {
      id:"p1",
    title:"surf excel",
    amount : 345,
    date : new Date(2021 ,8 ,10)
  },
  {
    id:"p2",
  title:"popcorn",
  amount : 345,
  date : new Date(2022 ,9 ,14)
},
{
id:"p1",
title:"nirma",
amount : 345,
date : new Date(2021 ,1 ,27)
},
{
id:"p1",
title:"tide",
amount : 345,
date : new Date(2021 ,10 ,10)
},
 
    ]

 const ParentData = (data)=>{
  console.log("i am in APP.js file")
  console.log("mai dada hu ",data)
 }   
  return (
    <div className="bg-green-400 flex flex-col gap-3 justify-center items-center h-[100vh] w-[100vw]">
      <Newproduct parent = {ParentData}/>
<Products items={products} />
    </div>
  );
}

export default App;
