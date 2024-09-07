
import React from "react"

function Card(props){

    return(
        <div className="space-y-2 rounded-xl">
 {props.children}
        </div>
       
    )
}

export default Card;