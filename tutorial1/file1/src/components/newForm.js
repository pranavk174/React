import {useState} from "react"
const Form = (props)=>{

    let [newTitle ,setTitle] = useState(" ")
    let [newDate ,setDate ] = useState(" ")
    let [newAmount ,setAmount ] = useState(" ")


    const titleChangeHandler =(event)=>{
setTitle(event.target.value)
console.log(event.target.value)
    }
    const amountChangeHandler =(event)=>{
        setAmount(event.target.value)
        console.log(event.target.value)
            } 
    const dateChangeHandler =(event)=>{
                setDate(event.target.value)
                console.log(event.target.value)
                    }



    const submitHandler = (e)=>{
        e.preventDefault();

        const productData = {
            title:newTitle,
            date:newDate,
            amount : newAmount,
        }

        console.log(productData)

        setTitle("")
        setDate("")
        setAmount("")
    }

    
    const pota  = (data) =>{
        console.log("mai pota hu ")
        console.log(data)

        props.Beta(data)
    }
    return(
        <>
        
        <form action="" onSubmit= {submitHandler}>
            <div className="">
             <label htmlFor="t">title</label>
            <input type="text" value={newTitle} onChange={titleChangeHandler} id="t" />
            </div>
            <div className="">
             <label htmlFor="a">amount</label>
            <input type="text" value={newAmount} onChange={amountChangeHandler}  id="a"/>
            </div>
            <div className="">
             <label htmlFor="d">date</label>
            <input type="date" value={newDate} onChange={dateChangeHandler} min="2023-01-01" max="2023-12-12" id="d"/>
            </div>
           
            <button className="bg-red-600  p-4 text-white rounded-xl">Submit</button>
        </form>
        <button className="bg-red-600  p-4 text-white rounded-xl" onClick={pota}>Submit</button>
  
        </>
    )
}

export default Form