import "./style.css"


function itemDate(props){
    return (
    <div className="bg-black text-[1.1rem] w-[7rem] text-white p-5  w-[6rem] h-[7rem] rounded-xl">
     <div > {props.month} </div>
     <div > {props.day} </div>
    
     <div > {props.year} </div>
     {props.children}
        </div>
    
    )
}

export default itemDate;