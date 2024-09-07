import React,{useContext} from 'react'
import { AppContext } from '../contexts/contextApi'

export default function paginations() {
const {page , handlePageChange , totalPages } = useContext(AppContext)

const onLeftClick = ()=>{
  handlePageChange(page-1)
}

const onRightClick = ( )=>{
  useNavigate()
  handlePageChange(page+1)
}

  return (
    <div className="flex justify-center border-2  bg-white  w-[100vw]">
      <div className="flex w-[40vw] py-3 items-center font-bold  justify-between "> 
        <div className="space-x-3">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
          >
            Next
          </button>
        )}
        </div>
        <div>
            Page {page} of {totalPages}
        </div>
      </div>
    </div>
  )
}
