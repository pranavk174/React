
import ProductItem  from  "./ProductItem.js"
import Card from "./card"


function productItem(props){
    return(
        <div className="bg-white border w-[50%] p-4"> 
            
            <Card >
                <ProductItem 
                title ={props.items[0].title} 
                amount = {props.items[0].amount}
                date ={props.items[0].date} /> 

            <ProductItem 
                title ={props.items[1].title} 
                amount = {props.items[1].amount}
                date ={props.items[1].date} /> 
             <ProductItem 
                title ={props.items[2].title} 
                amount = {props.items[2].amount}
                date ={props.items[2].date} /> 
              <ProductItem 
                title ={props.items[3].title} 
                amount = {props.items[3].amount}
                date ={props.items[3].date} /> 
            </Card>
        </div>
       
    )
}

export default productItem