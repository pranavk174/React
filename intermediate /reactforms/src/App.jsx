import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formdata , setFormData] = useState({
    firstname : "" , lastname: "" , email:"" , isVisible :  true , isMarked : " " , favCar : " "    // isme hamne in feild ki initial value det kr di hai  ye "name" attributes ke through mapped hai 
  })
  console.log(formdata)


  const onChangeHandler = (event) => {       // iss function me ye hua ki poore form ke data k values ka state change kr rha hai ek baar ne hi... hamne object define kr diiya sare values ko
   const {name,value,type,checked} = event.target
    setFormData((prevState) => ({      // hamne form ki previous state ko parameter me liya and usme hi object cloning krwa di .....
      ...prevState,
      // [event.target.name]: event.target.value, 
      [name] : type === "checkbox" ?  checked : value    // is code ka matlb ye ki agr is input feild ka type checkbox hai to usko checked kr denge or agr nhi hai to usme value daal denge
    }));
  };

  return (
      <div>

        <form   className="flex flex-col gap-4">
          { <input onChange={onChangeHandler} value={formdata.firstname} type="text" name="firstname" placeholder="firstname" />   /*  isme 'value' attrive se state maintain ho rha hai  input feild ka */}
          <input onChange={onChangeHandler} value={formdata.lastname} type="text" placeholder="first-name" name="lastname" />
          <input onChange={onChangeHandler} value={formdata.email} type="email" placeholder="first-name" name="email" />

          <input type="checkbox" name="isVisible" onChange={onChangeHandler} checked={formdata.isVisible} />


          <input type="radio" id="on" name="isMarked" onChange={onChangeHandler}  value="on" checked={formdata.isMarked === "on" } />
          <label htmlFor="on">On</label>
          <input type="radio" id="of" name="isMarked" onChange={onChangeHandler} value="off" checked={formdata.isMarked === "off"} />
          <label htmlFor="of">Off</label>
          <input name="Notification" onChange={onChangeHandler}  id="no" checked={formdata.Notification === "No Push Notification" } value="No Push Notification" type="radio" />
          <label htmlFor="no">No Push Notifications</label>


<div>

     <label htmlFor="fv">Select Cars :</label>
          <select id="fv" name="favCar" value={formdata.favCar} onChange={onChangeHandler}>
            <option value="Scorpio"  >Scorpio</option>
            <option value="Thar"> Thar</option>
            <option value="Bolero"> Bolero</option>
            <option value=" Benz">Benz</option>
            <option value="SUV"> SUV</option>
          </select>
          </div>
       

        </form>
       </div>

  )
}

export default App
