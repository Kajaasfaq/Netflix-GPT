import React from 'react'
import { NetflixLogoBig } from '../utils/Image'



const Home = () => {

  return (
    <>
    <div className='box-border flex flex-col'>
    <div className="flex justify-center">
     <div  className='bg-black h-20 sm:w-[95%] w-[80%] mt-5'>
      <img src={NetflixLogoBig} className='w-[9.25rem] h-[2.5rem]' alt='netflix_logo' />
     </div>
     </div>
     </div>
    </>
  )
}

export default Home