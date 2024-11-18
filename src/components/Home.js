import React, { useState } from 'react'
import Header from './Header'
import { NetflixBG, NetflixTv2, NetflixTv4} from '../utils/Image'
import { TextField} from '@mui/material'
import { useFormControl } from "@mui/material/FormControl";
import { Link } from 'react-router-dom';
import Underline from './Underline';
// import { NetflixTv } from '../utils/Image';
import  NetflixTv3  from '../utils/images/netflix-pic_3-removebg-preview.png'
import MyAccordion from './MyAccordion';
import Footer from './Footer';
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import SpaceLine from './SpaceLine';

const Home = () => {
    const formControl = useFormControl();
    const [Textvalue , SetTextValue] = useState("")
    const movies = useSelector(store => store.movies)

  const inputStyles = {
    color: "#BCBBBA",
    fontSize : "16px",
  };

  const inputStyles2 = {
    color: "#BCBBBA",
    backgroundColor:"#0F0F0F",
    fontSize : "16px",
  };

  const containerStyles = {
    border: "1px solid #626261",
    backgroundColor: "black",
    opacity: 0.6,
  };
  return (
    <>
    <div>
    <img src={NetflixBG} alt="icon" className="lg:h-[839px] lg:w-[100%] w-[100%] h-[700px]"/>
    <div className=" bg-black opacity-[0.75] h-[839px] w-[100%] absolute top-0"></div>
    <div className="">
        <Header />
        <Link to="/login"><button className="bg-[#E50914] hover:bg-[#C11119] text-white border-solid rounded-b-[3px] rounded-t-[3px]  h-[34px] w-[72px] lg:h-[34px] lg:w-[72px] absolute lg:top-[50px] lg:ml-[1500px]">Sign In</button></Link>
    </div>
    <div className='absolute top-[310px] text-center ml-[550px]'>
        <h1 className='text-[70px] font-black font-body  text-white'>Unlimited movies,<br />TV shows and more</h1>
        <h1 className='font-body text-[22px] font-medium text-white mt-8'>Starts at ₹149. Cancel at any time. </h1>
        <h1 className='font-body text-[17px] text-white mt-5'>Ready to watch? Enter your email to create or restart your membership.</h1>
        <TextField
          label="Email address"
          id="filled-basic"
          variant="filled"
          required
          value={Textvalue}
          onChange={(e) => SetTextValue(e.target.value)}
          className='h-[56.5px] w-[400px] top-4 right-[13px]'
          InputProps={{
            style: inputStyles,
          }}
          InputLabelProps={{
            style: inputStyles,
          }}
          style={containerStyles}
          {...formControl}
        />
        <Link to="/login"><button className='bg-[#E50914] hover:bg-[#C11119] text-white text-[24px] border-solid rounded-b-[3px] rounded-t-[3px]  h-[55px] w-[205px] mt-4'> Get Started<span className='ml-4 font-extralight text-[28px]'>{">"}</span></button></Link>
    </div>
    </div>
    <SpaceLine/>
    {/* <MovieList title={"Now Playing"} movies={movies.NowplayingMoviesList}/> */}
    <div  className='bg-black h-[660px] w-[100%] flex flex-row justify-around '>
    <img  className="h-[510px] w-[680px] mt-[40px]  ml-[210px] hover:shadow-2xl hover:bg-white hover:shadow-zinc-950" src={NetflixTv2} alt='tv'/>
    <div className="pt-[180px] pr-[100px] mr-[100px]" >
    <h1 className="text-[52px] font-black font-body text-white text-start">Download your shows to watch offline</h1>
     <h1 className='font-body text-[25px] text-white mt-3 text-start'>Save your favourites easily and always have something to watch.</h1>
     </div>
    </div>
    <Underline/>
    <div  className='bg-black h-[660px] w-[100%] flex flex-row justify-evently gap-[50px] '>
     <div className="pt-[220px] pl-[200px]" >
      <h1 className="text-[52px] font-black font-body text-white text-start">Watch everywhere</h1>
      <h1 className='font-body text-[25px] text-white mt-3 text-start'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h1>
     </div>
     <img  className="h-[510px] w-[680px] mt-[60px] mr-[175px] hover:shadow-xl hover:shadow-gray-950 " src={NetflixTv3} alt='tv'/>
    </div>
    <Underline/>
    <div  className='bg-black h-[660px] w-[100%] flex flex-row justify-around '>
    <img  className="h-[510px] w-[680px] mt-[55px]  ml-[210px] hover:shadow-2xl  hover:shadow-zinc-950" src={NetflixTv4} alt='tv'/>
    <div className="pt-[200px] pr-[90px] mr-[120px]" >
    <h1 className="text-[52px] font-black font-body text-white text-start">Create profiles for kids</h1>
     <h1 className='font-body text-[25px] text-white mt-3 text-start'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h1>
     </div>
    </div>
    <Underline/>
    <div  className='bg-black h-[980px] w-[100%]'>
    <h1 className='text-center text-[48px] text-white font-body font-black pt-12'>Frequently Asked Questions</h1>
    <div className='flex flex-col'>
    <MyAccordion/>
    <h1 className='font-body text-[23px] text-white mt-[50px] text-center'>Ready to watch? Enter your email to create or restart your membership</h1>
    <div className='flex flex-row justify-center'>
        <TextField
          label="Email address"
          id="filled-basic"
          variant="filled"
          required
          value={Textvalue}
          onChange={(e) => SetTextValue(e.target.value)}
          className='h-[58px] w-[400px] top-6 bg-gray-600 right-2 border-b-[#626261]'
          InputProps={{
            style: inputStyles2,
          }}
          InputLabelProps={{
            style: inputStyles2,
          }}
          style={containerStyles}
          {...formControl}
        />
        <Link to="/login"><button className='bg-[#E50914] hover:bg-[#C11119] text-white text-[24px] border-solid rounded-b-[3px] rounded-t-[3px]  h-[58px] w-[205px] mt-6'> Get Started </button></Link></div>
    </div>

    </div>
    <Underline/>
    <div  className='bg-black h-[395px] w-[100%] flex flex-row'>
       <Footer/>
    </div>
    <Underline/>
    <div  className='bg-black h-[50px] w-[100%]'>
      <h1 className="text-white text-center text-2xl pt-2 ">Made by A<span className='hover:text-[#E50914]'>sfaq</span> - <a href='https://github.com/Kajaasfaq'><span className='hover:text-[#E50914]'>Github</span></a></h1>
    </div>
    </>
  )
}

export default Home