import Card from "./Card"
import {useState} from "react"

const Cards = ({ courses, category }) => {
 
    let allCourses = []
    const [liked , setLiked] = useState([])
    const getCourses = () => {
        if (category === "All") {
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach(course => {
                    allCourses.push(course)
                })
            })
            return allCourses
        }
        else {
            console.log("ye data hai",  courses[category])
            return courses[category]
        }
    }
    return (
        <div className="flex flex-wrap w-[70vw] gap-[1rem]  justify-center items-center "> {
            getCourses().map(course => {
                return (
                    <Card liked={liked} setLiked = {setLiked} key={course.id} course={course} />
                )
            })
        }
        </div>





    )
};

export default Cards