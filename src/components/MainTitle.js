import React from 'react'

const MainTitle = ({title , overview}) => {
  return (
    <div className='pt-[280px] px-36 absolute w-[100%] h-[875px] aspect-video bg-gradient-to-r from-black'>
     <div className='text-white font-body text-4xl font-bold'>{title}</div>
     <div className='text-white font-body text-sm w-1/4 py-4'>{overview}</div>
     <div>
      <button className='bg-white text-black p-3 px-12 font-body text-xl rounded-lg opacity-80 hover:opacity-60'>▶ Play</button>
      <button className='bg-gray-500 text-white p-3 px-12 font-body text-xl rounded-lg mx-2 opacity-50 hover:opacity-70'>ℹ️ More Info</button>
     </div>
    </div> 
  )
}

export default MainTitle