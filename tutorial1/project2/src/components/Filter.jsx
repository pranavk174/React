import "./Stylings/filter.css"

const Filter = ({filterdata,setCategory,category})=>{

    const onClickHandler = (title)=>{
                setCategory(title)
    }
    return (
        <div className="flex gap-[3rem] ">
            {
                filterdata.map(data => {
                    return (
                        <button onClick={ ()=>onClickHandler(data.title) } className="p-3 btn rounded-xl  bg-black" key={data.id} >{data.title}</button>
                    )
                })
            }
        </div>
    )
}

export default Filter