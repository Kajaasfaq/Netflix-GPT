import React, { useState } from 'react'
import { NetflixBG } from '../utils/Image'
import Footer from '../components/Footer'

const Gptsearch = () => {
  const [text , setText] = useState('')
  return (
    <div className=''>
        <div className='w-[100%] h-[130%] bg-black opacity-75 absolute'></div>
        <img alt='bg-Gpt' className='w-screen' src={NetflixBG} />
        <div className='absolute top-40 left-1/4'>
            <form onClick={(e) => e.preventDefault()} className='flex justify-center gap-3' >
              <h1 className='text-white mt-3'>GPT - Movie Suggestion Search </h1>
                <input type='text' placeholder='Currently Not Working - API Key Expired' className='ml-10 px-3 text-black w-[450px] h-12 rounded-lg' value={text} onChange={(e) => setText(e.target.value)}/>
                <button className='bg-red-600 text-white px-12 h-12 rounded-lg hover:bg-red-800'>Search</button>
            </form>
        </div>
        <div className='bg-black h-[395px] w-[100%] flex flex-row z-20 absolute'>
            <Footer/>
        </div>
    </div>
  )
}

export default Gptsearch