import "./Stylings/card.css"
import { FcLike , FcLikePlaceholder } from "react-icons/fc"
import {useState} from "react"
import {toast } from "react-toastify"

const Card = ({course,liked,setLiked}) =>{
   

    const [readmore, SetReadMore] = useState(false)
   let  info = course.description
    const description = readmore ? info : `${info.substring(0,100)}...... `;
    const readMoreHandler = ()=>{
        SetReadMore(!readmore)
    }

    const onClickHandler = ()=>{

        // to unlike the course
        if(liked.includes(course.id)){
            setLiked(liked.filter(previous_item=>previous_item!==course.id))     // ye code liked wale course se uss course ko nikaal ke unlike kr dega 
            toast.warning("Unliked Successfully!")
        }
        else{
            // agr pahle se course liked nhi hai
            // ye like kar dega and liked me insert krega 
            if(liked.length === 0){
                setLiked([course.id])
            }
            else{
                // agr empty nhi hai to purane liked course k sath naye liked course ko add kra diya
                setLiked(previous_item => [...previous_item , course.id])
            }
            toast.success("Liked Successfully!")
        }
    }
    return (
        <div className="w-[20rem] crd h-full   transition duration-[0.2s] bg-[#1a1918] rounded-xl  ">
            <div ><img className="rounded-xl rounded-b " src={course.image.url} alt={course.image.alt} /> 

              <div className="relative left-[15.9rem] bottom-[1.8rem] bg-white w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full">
              <button onClick={onClickHandler} className="text-[1.8rem]"> 
             {
             liked.includes(course.id) ? <FcLike /> : <FcLikePlaceholder/> 
             } 
               </button>
              </div>
             
            </div>
            <div className="text-start px-3 relative z-10 bottom-[2rem] "><h2 className="w-[10rem] text-[1rem] font-extrabold">{course.title}</h2>
            <p className="  text-[0.9rem]">{description}
            <span className="text-blue-400 cursor-pointer transition duration-[0.2s]" onClick={readMoreHandler} >
                {readmore ? `show-less` : `read-more`}
            </span>
        </p>
        </div>
             </div>
    )
}

export default Card