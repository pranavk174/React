
import Form from "./newForm"



const Newproduct = (props)=>{

    const beta = (data)=>{
        console.log(data)
        console.log("mai beta hu")

        props.parent(data)
    }
    return(
        <div className="bg-red-300 w-[50vw] p-4 rounded-xl flex justify-center">
            <Form Beta = {beta} />
        </div>
    )
}


export default Newproduct