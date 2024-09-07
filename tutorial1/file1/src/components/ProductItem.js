
import React from "react"

import ProductDate from "./ProductDate"
import Card from "./card"

const Productitem = (props)=>{
    return(
        <Card >
            <div className="flex rounded-xl bg-blue-400 justify-between w-full border p-5 space-y-5">
            <ProductDate date = {props.date} />
            <div>
                <h2 className="font-bold text-[2rem]">{props.title}</h2>
            </div>
            <div>
            <button className="bg-red-600  p-4 text-white rounded-xl">Add to cart</button>
          
            </div>
             </div>
        </Card>
    )

    
}

export default Productitem