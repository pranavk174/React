import {useState} from "react"
const Card = ({image,info,price,name,id,removeTour}) => {

   
   
    const [readmore, SetReadMore] = useState(false)
    const description = readmore ? info : `${info.substring(0,200)}...... `;
    const readMoreHandler = ()=>{
        SetReadMore(!readmore)
    }
    
  return (
    <div className="w-[26rem] shadow-xl rounded-xl scale-[18rem] hover:scale-[20rem] py-[0.4rem]  h-[100%]  flex flex-col gap-2 justify-center items-center">
      <div className="w-full p-3 flex justify-center">
        <img className="w-full h-[23rem] cover" src={image} alt="" />
      </div>
      <div className="mx-4 space-y-2">
        <h1 className="font-extrabold text-[1.3rem] text-green-600">&#8377;  {price}</h1>
        <h1 className="text-[1.6rem] font-extrabold">{name}</h1>
        <p className=" w-full text-[1.2rem]">{description}
            <span className="text-blue-400 transition duration-[0.2s]" onClick={readMoreHandler} >
                {readmore ? `show-less` : `read-more`}
            </span>
        </p>
        </div>
       <div className="w-full flex mt-7 justify-center">
       <button onClick={()=> removeTour(id)}  className="my-4 w-[19rem] bg-red-100 font-bold border-red-500">Not Interested</button>
   
      </div>
     
    </div>
  );
};

export default Card;
