import React from 'react'
import Spinner from "../utils/images/Rolling-1s-39px.svg"

const Shimmer = () => {
  return (
    <div className=" bg-gradient-to-r from-black via-gray-500 to-black w-[100%] h-screen ">
      <div className='top-[45%] absolute mx-[45%]'>
        <button className="text-center font-body font-normal bg-red-700 text-3xl text-white px-3 py-5 z-30 rounded-lg flex gap-1 cursor-none"><img className='' src={Spinner} alt='spinner svg'/>Loading </button></div>
    </div>
  )
}

export default Shimmer