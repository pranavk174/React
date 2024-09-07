import React from "react"


const Productdate = (props)=>{

    const month = props.date.toLocaleString('en-US',{month: 'long'})
    const day = props.date.toLocaleString('en-US',{day: '2-digit'})
    const year = props.date.getFullYear()


    return(
        <div className="border w-[100px] bg-black text-white rounded text-center rounded-xl p-3">
            <div >{month}</div>
            <div >{day}</div>
            <div >{year }</div>
        </div>
    )
}

export default Productdate