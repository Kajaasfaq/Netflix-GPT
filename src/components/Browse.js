import React, { useState } from 'react'
import NetflixIcon from "../utils/netflix-removebg-preview.png"
import { Link, useNavigate } from 'react-router-dom'
import NetflixRed from "../utils/red profile icon.jpg"
import DownIcon from "../utils/down.png"
import NetflixBlue from "../utils/bule profile icon.png"
import NetflixYellow from "../utils/yellow profile icon.png"
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase'

const Browse = () => {
  const [showicon , setshowicon] = useState(false)
  const navigate = useNavigate()
  const IconShow = () => {
    setshowicon(!showicon)
  }

  const handleSignout = () => {

signOut(auth).then(() => {
  navigate("/")
}).catch((error) => {
  // An error happened.
});
  }

  return (
    <>
    <div className='flex flex-row bg-zinc-800 shadow-2xl h-[85px]'>
    <Link to="/"><img alt='icon' className="cursor-pointer w-[140px] h-[140px] ml-[90px] mt-[-23px] relative" src={NetflixIcon}></img></Link>
    <div>
      <ul className='flex flex-row gap-4 ml-14 mt-[32px] text-white font-body font-normal'>
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Tv Shows</li>
        <li className="cursor-pointer">Movies</li>
        <li className="cursor-pointer">New & Popular</li>
        <li className="cursor-pointer">My List</li>
        <li className="cursor-pointer"> Browse By Languages</li>
      </ul>
    </div>
    <div className='flex gap-3'>
      <img alt="Netflix-Profile" className="w-12 h-12 mt-5 ml-[870px] rounded-lg" src={NetflixRed}/>
      <img alt="Netflix-Profile" className="w-3 h-3 mt-10 cursor-pointer" src={DownIcon} onClick={IconShow}/>
    </div>
    </div>
    {showicon ? <div className='mt-0'>
      <img alt="Netflix-Profile" className="w-3 h-3 mt-1 ml-[1720px] rotate-180" src={DownIcon}/>
     <div className='bg-zinc-800 w-[230px] h-[300px] mt-[5px] ml-[1530px] opacity-85'>
      <img alt="Netflix-Profile" className="w-12 h-12 absolute mt-6 ml-6 rounded-lg" src={NetflixBlue}></img>
      <span className=' mt-9 absolute ml-24 text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>User 2</span>
      <img alt="Netflix-Profile" className="w-12 h-12 absolute mt-20 ml-6 rounded-lg hover:underline hover:underline-offset-1" src={NetflixYellow}></img>
      <span className=' mt-[90px] absolute ml-24 text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>Children</span>
      <span className=' mt-[140px] absolute ml-16 text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>Manage Profile</span>
      <span className=' mt-[180px] absolute ml-[85px] text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>Account</span>
      <span className=' mt-[220px] absolute ml-[76px] text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>Help Centre</span>
      <div className='h-[2px] w-[100%]  absolute mt-[250px] bg-white'></div>
      <button className=' absolute mt-[262px] ml-[55px] text-white font-body hover:underline hover:underline-offset-1' onClick={handleSignout}>Sign out of Netflix</button>
      </div></div> : null}
    </>
  )
}

export default Browse