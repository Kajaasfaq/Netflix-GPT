import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NetflixRed from "../utils/images/red profile icon.jpg"
import DownIcon from "../utils/images/down.png"
import NetflixBlue from "../utils/images/bule profile icon.png"
import NetflixYellow from "../utils/images/yellow profile icon.png"
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
import useTvTrending from '../hooks/useTvTrending'
import Footer from '../components/Footer'
import useTopRatedTvShow from '../hooks/useTopRatedTvShow'
import usePopularTvShow from '../hooks/usePopularTvShow'
import useAiringTvShow from '../hooks/useAiringTvShow'
import { ToogleGptState } from '../utils/Slice/GptStateSlice'
import Gptsearch from './Gptsearch'
import { SUPPORT_LANG } from '../utils/Constants'
import { AddSupportLang } from '../utils/Slice/MultiLang'
import Shimmer from './Shimmer'

const Browse = () => {
  const GptOpenToG = useSelector(store => store.Gpt.GptOpen)
  const user = useSelector(store => store.user)
  const NowPlayingList = useSelector(store => store.movies?.NowplayingMoviesList)

  useNowplayingMovie()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()
  useTvTrending()
  useAiringTvShow()
  useTopRatedTvShow()
  usePopularTvShow()

  
  
  const [showicon , setshowicon] = useState(false)
  const [error , Seterror] = useState("")

  const navigate = useNavigate()
  const Dispatch = useDispatch()
   
  if(!NowPlayingList) return <Shimmer/>

  const MoviesTrailer = NowPlayingList[1]
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

const handleGptOpen = () => {
  Dispatch(ToogleGptState())
}

const handleMultiLang = (e) => {
  Dispatch(AddSupportLang(e.target.value))
}

  return (
    <>
    <div>
    <div className='flex flex-row h-[105px] absolute z-10 bg-gradient-to-l from-black'>
    <Link to="/"><Header/></Link>
    <div>
      <ul className='flex flex-row gap-4 ml-[370px] mt-[56px] text-white font-body font-normal'>
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Tv Shows</li>
        <li className="cursor-pointer">Movies</li>
        <li className="cursor-pointer">New & Popular</li>
        <li className="cursor-pointer">My List</li>
        <li className="cursor-pointer"> Browse By Languages</li>
      </ul>
    </div>
    {error ? <div className='text-white'>{error}</div> : null }
    <div className='flex gap-3 '>
      {user && (<div className='text-white absolute z-30 mt-[37px] ml-[660px] '>
        <button className='p-3 bg-red-600 text-white rounded-xl hover:bg-red-800' onClick={handleGptOpen}>{GptOpenToG ? "Home" : "GPT-Search"}</button>
      </div>)}
      {user &&  (GptOpenToG ?  
        <div className=' absolute ml-[550px] text-white mt-10 '>
          <select className='bg-black text-white  rounded-lg focus:border-white active:border-white p-3 font-body' onChange={handleMultiLang}>
            {SUPPORT_LANG.map(lang => 
            <option value={lang.identifier} key={lang.identifier}>{lang.name}</option> )}
          </select>
        </div> : null )}
      <img alt="Netflix-Profile" className="w-12 h-12 mt-9 ml-[780px] rounded-lg cursor-pointer z-30" src={user?.photoURL} onClick={IconShow}/>
      <img alt="Netflix-Profile" className="w-4 h-3 mt-14 cursor-pointer" src={DownIcon} onClick={IconShow} 
      onMouseEnter={() => setshowicon(true)}/>
    </div>
    </div>
    {showicon ? <div className='absolute top-[120px] left-[1520px] z-30' onMouseEnter={() => setshowicon(true)}
      onMouseLeave={() => setshowicon(false)} >
      <img alt="Netflix-Profile" className='ml-[200px]  rotate-180' src={DownIcon}/>
     <div className='bg-zinc-800 w-[230px] h-[400px] opacity-85 mt-2'>
     <img alt="Netflix-Profile" className="w-12 h-12 absolute rounded-lg mt-4 ml-3" src={NetflixRed}></img>
      <img alt="Netflix-Profile" className="w-12 h-12 absolute rounded-lg mt-[70px] ml-3" src={NetflixBlue}></img>
      <span className='mt-8 absolute ml-24 text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>User 2</span>
      <img alt="Netflix-Profile" className="w-12 h-12 absolute rounded-lg mt-[125px] ml-3" src={NetflixYellow}></img>
      <span className='mt-[85px] absolute ml-24 text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>User 3</span>
      <div className='h-[1.2px] w-[100%]  absolute mt-[190px] bg-white'></div>
      <span className=' mt-[135px] absolute ml-24 text-white cursor-pointer font-body hover:underline hover:underline-offset-1 '>Children</span>
      <span className='mt-[210px] absolute ml-16 text-white cursor-pointer font-body hover:underline hover:underline-offset-1 '>Manage Profile</span>
      <span className=' mt-[250px] absolute ml-[85px] text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>Account</span>
      <span className=' mt-[290px] absolute ml-[76px] text-white cursor-pointer font-body hover:underline hover:underline-offset-1'>Help Centre</span>
      <div className='h-[1.2px] w-[100%]  absolute mt-[340px] bg-white'></div>
      <button className='absolute mt-[360px]  ml-[55px] text-white font-body hover:underline hover:underline-offset-1' onClick={handleSignout}>Sign out of Netflix</button>
      </div></div> : null}
    
    <div> 
      {GptOpenToG ? <Gptsearch/> : 
      <>
        <MainSection/>
        <SecondarySection/>
      </> }
        
    </div>
    {GptOpenToG ? null : 
    <div className='bg-black h-[395px] w-[100%] flex flex-row'>
      <Footer/> 
    </div>}
    </div> 
    </>
  )
}

export default Browse