
import UseGif from "../hooks/UseGif"    // hamne hook banaya khud ka

export default function contentf( ) {
   const {gif , fetchData , loading} = UseGif()
  const onClickHandler =()=>{
    console.log("ye first function call hua")
     fetchData()
    }
  return (
    <div className="flex flex-col w-[47vw] rounded-xl justify-around items-center bg-green-400 h-[44vh] ">
      <h1 className="font-bold text-[1.5rem] underline">RANDOM GIF</h1>
      <img className="w-[30vw] rounded-xl h-[27vh]" src={loading ? "https://loading.io/assets/mod/spinner/spinner/lg.gif" : gif } alt="image" />
      <button className="bg-white w-[80%] rounded-xl font-bold py-2" onClick ={onClickHandler} > GENERATE</button>
    </div>
  )
}
