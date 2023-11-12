import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NetflixRed from "../utils/red profile icon.jpg"
import DownIcon from "../utils/down.png"
import NetflixBlue from "../utils/bule profile icon.png"
import NetflixYellow from "../utils/yellow profile icon.png"
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import   useNowplayingMovie from '../hooks/useNowplayingMovies'
import MainSection from './MainSection'
import SecondarySection from './SecondarySection'
import { TrailerMovie } from '../utils/Slice/MoviesSlice'
import usePopularMovies from '../hooks/usePopularmovie'
import useTopRatedMovies from '../hooks/useTopRatedMovie'
import useUpComingMovies from '../hooks/useUpComingMovies'

const Browse = () => {
  const user = useSelector(store => store.user)
  const NowPlayingList = useSelector(store => store.movies?.NowplayingMoviesList)

  useNowplayingMovie()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()

  const [showicon , setshowicon] = useState(false)
  const [error , Seterror] = useState("")

  const navigate = useNavigate()
  const Dispatch = useDispatch()
   
  if(!NowPlayingList) return
  const MoviesTrailer = NowPlayingList[0]
  Dispatch(TrailerMovie(MoviesTrailer))

  const IconShow = () => {
    setshowicon(!showicon)
  }

const handleSignout = () => {

signOut(auth).then(() => {
  navigate("/")
}).catch((error) => {
  if(error){
  Seterror("Check your Network Connection")
  }
});}

  return (
    <>
    <div className='flex flex-row bg-zinc-800 shadow-2xl h-[105px] '>
    <Link to="/"><Header/></Link>
    <div>
      <ul className='flex flex-row gap-4 ml-[360px] mt-[56px] text-white font-body font-normal'>
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Tv Shows</li>
        <li className="cursor-pointer">Movies</li>
        <li className="cursor-pointer">New & Popular</li>
        <li className="cursor-pointer">My List</li>
        <li className="cursor-pointer"> Browse By Languages</li>
      </ul>
    </div>
    {error ? <div className='text-white'>{error}</div> : null }
    <div className='flex gap-3'>
      <img alt="Netflix-Profile" className="w-12 h-12 mt-9 ml-[780px] rounded-lg" src={user?.photoURL}/>
      <img alt="Netflix-Profile" className="w-3 h-3 mt-14 cursor-pointer" src={DownIcon} onClick={IconShow} 
      onMouseEnter={() => setshowicon(true)}/>
    </div>
    </div>
    {showicon ? <div className='mt-0' onMouseEnter={() => setshowicon(true)}
      onMouseLeave={() => setshowicon(false)} >
      <img alt="Netflix-Profile" className="w-3 h-3 mt-1 ml-[1720px] rotate-180" src={DownIcon}/>
     <div className='bg-zinc-800 w-[230px] h-[400px] mt-[5px] ml-[1530px] opacity-85'>
     <img alt="Netflix-Profile" className="w-12 h-12 absolute mt-4 ml-6 rounded-lg" src={NetflixRed}></img>
      <img alt="Netflix-Profile" className="w-12 h-12 absolute mt-[70px] ml-6 rounded-lg" src={NetflixBlue}></img>
      <span className=' mt-8 absolute ml-24 text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>User 2</span>
      <img alt="Netflix-Profile" className="w-12 h-12 absolute mt-[125px] ml-6 rounded-lg hover:underline hover:underline-offset-1" src={NetflixYellow}></img>
      <span className=' mt-[85px] absolute ml-24 text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>User 3</span>
      <div className='h-[1px] w-[100%]  absolute mt-[190px] bg-white'></div>
      <span className=' mt-[135px] absolute ml-24 text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>Children</span>
      <span className=' mt-[210px] absolute ml-16 text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>Manage Profile</span>
      <span className=' mt-[250px] absolute ml-[85px] text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>Account</span>
      <span className=' mt-[290px] absolute ml-[76px] text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>Help Centre</span>
      <div className='h-[2px] w-[100%]  absolute mt-[340px] bg-white'></div>
      <button className=' absolute mt-[360px]  ml-[55px] text-white font-body hover:underline hover:underline-offset-1' onClick={handleSignout}>Sign out of Netflix</button>
      </div></div> : null}
      <div>
        <MainSection/>
        <SecondarySection/>
      </div>
    </>
  )
}

export default Browse