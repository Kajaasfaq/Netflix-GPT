import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails'
import { useDispatch, useSelector } from 'react-redux'
import NetFlixIcon from '../utils/images/netflix-removebg-preview.png'
import { addMovieDetails, addMovieDetailsImg, addMovieDetailsVideo } from '../utils/Slice/MovieDetails'
import Shimmer from './Shimmer'
import { ImageCDN } from '../utils/Api'
import MovieCards from './MovieCards'
import Footer from './Footer'

const MovieDetails = () => {

  const [GetParams] = useSearchParams()
  const dispatch = useDispatch()
  const MovieData = useSelector(store => store.moviedetails)

  const MovieDetailData = MovieData?.movieData

  const VideoKey = MovieData?.movieVideo?.key

  useMovieDetails(GetParams.get('q'))

  const handleBack = () => {
    dispatch(addMovieDetails(null)) 
    dispatch(addMovieDetailsImg(null))
    dispatch(addMovieDetailsVideo(null))
  }
  return (
    <>    
      <div className='flex h-28 bg-gradient-to-l from-black  to-black w-full'>
           <div className="ml-36 h-36 absolute top-0  ">
            <Link to={"/"}><img src={NetFlixIcon} alt="icon" className='w-36 h-36'/></Link>
           </div>
           <Link to="/browse"><div className='text-white absolute mt-[48px] ml-[1500px] '>
           <button className='p-3 bg-red-600 text-white rounded-xl hover:bg-red-800 -z-30' onClick={handleBack}>Back To Broswe</button>
           </div></Link>
      </div>
   <div>{!VideoKey ? <Shimmer/>  : 
   <div className='absolute top-0 -z-40 aspect-video w-full h-full'>
     <div className="bg-black"><iframe  width="" height="900" className="aspect-video ml-20"
      src={"https://www.youtube.com/embed/"+ VideoKey +"?&autoplay=1&mute=1&rel=0&loop=1"}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      title="YouTube video player" ></iframe>
      
      <img className='absolute z-40 top-52 ml-32' src={ImageCDN + MovieData?.movieImg?.logos[0]?.file_path} alt='MoviePoster'/>
      <button className='bg-white text-black p-3 px-12 font-body text-xl rounded-lg opacity-80 hover:opacity-60 absolute z-40 top-[480px] ml-36'>▶ Play</button>
      <button className='bg-gray-500 text-white p-3 px-12 font-body text-xl rounded-lg mx-2 opacity-50 hover:opacity-70  absolute z-40 top-[480px] ml-80'>More Info</button>


      <div className=' w-full h-[800px] relative -top-14 bg-gradient-to-t from-transparent'>
        <div className='bg-black'>
        <h1 className="text-green-600 font-body font-medium text-2xl ml-36 mt-5">99% Match</h1>
          <div className='flex flex-row gap-3 mt-5'>
          <div className='flex flex-row ml-36'><h1 className='text-white'><span className="text-gray-500">Genres : </span></h1>{MovieDetailData?.genres.map(genre =>  <div key={genre.id} className='text-white px-1'>{genre.name}</div>)}</div>
          <h1 className="text-white "><span className="text-gray-500">Total BoxOffice Collection : </span>{MovieDetailData?.revenue}</h1>
          <h1 className="text-white "><span className="text-gray-500">Total Budget : </span>{MovieDetailData?.budget}</h1>
          <h1 className="text-white "><span className="text-gray-500">Date :  </span>{MovieDetailData?.release_date}</h1>
          <h1 className="text-white "><span className="text-gray-500">RunTime :  </span>{MovieDetailData?.runtime}</h1>
          <h1 className="text-white "><span className="text-gray-500">Rating :  </span>{MovieDetailData?.vote_average}</h1>
          <h1 className="text-white "><span className="text-gray-500">Total Review count :  </span>{MovieDetailData?.vote_count}</h1>
          </div>
          <h1 className='text-white font-body font-medium text-l ml-36 w-3/4 mt-5'>{MovieDetailData?.overview}</h1>

         <div className='text-white font-body font-medium text-2xl pt-2 ml-36'>Movie Images</div>
         <div className='flex overflow-hidden hover:overflow-x-scroll pt-4 ml-32 scrollbar-hide'>
         <div className='flex'>
         {MovieData?.movieImg?.backdrops?.map(file =><MovieCards posterPath={file?.file_path}/>)}
          </div></div>

         <div className='text-white font-body font-medium text-2xl pt-6 ml-36'>Movie Posters</div>
         <div className='flex overflow-hidden hover:overflow-x-scroll pt-6 ml-32 scrollbar-hide'>
         <div className='flex'>
         {MovieData?.movieImg?.posters?.map(file =><MovieCards posterPath={file?.file_path}/>)}
          </div></div>
        </div>
        </div> 
        </div>
        <div className='bg-black h-[395px] w-[100%] flex flex-row '>
        <Footer/>
        </div>
       </div>}
       
 </div>
  </> 
  )
  
}

export default MovieDetails