
import Card from "./cards"
const Content = ({tours,removeTour}) =>{
    return(
        <div className="flex  w-[100vw] min-h-[100vh]   flex-wrap gap-7 justify-center ">
           {
           tours.map( (tour) =>{      // agr hme multiple cards bnane h to ham yhi technique use krenge map function
            return (
                <Card {...tour} removeTour ={removeTour}/>     
           )
            } )
            }
        </div>
 )
}

export default Content