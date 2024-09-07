import React from 'react'

export default function card({review, left , right, surprize}) {


  return (
    <div className="">
      <div className="bg-blue-500 w-[8rem] rounded-full relative left-[4rem] top-[4rem]">
        <img className="h-[8rem] w-[8rem] rounded-full relative top-2 right-3" src={review.image} alt="image" />
      </div>
      <div className="bg-white rounded-xl hover:shadow-xl text-black flex flex-col justify-center items-center h-[28rem] w-[40rem] gap-4 px p-[1rem]">
       <div>
       <h1 className="text-[1.4rem] font-extrabold">{review.name}</h1>
       <h3 className="opacity-[0.3] text-[0.8rem]">{review.job}</h3>
       </div>
       <i className="fa text-purple-500 fa-solid fa-quote-left"></i>
        <p className="text-center w-[33rem] h-[6rem]">{review.text}</p>
        <i className="fa text-purple-500 fa-solid fa-quote-right"></i> 
        <div onClick={left} className=" space-x-2">
        <button className=" bg-none hover:text-purple-600 text-purple-400">
          <i className="fa fa-solid fa-arrow-left"></i>{" "}
        </button>
        <button
          onClick={right}
          className="bg-none hover:text-purple-600 text-purple-400"
        >
          <i className=" fa fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <button 
        onClick={surprize}
        className=" bg-purple-500/60 hover:bg-purple-600 rounded-md px-[2rem] text-white font-bold py-2"
      >
        Surprize me
      </button>
             </div>
    </div>
  )
} 
