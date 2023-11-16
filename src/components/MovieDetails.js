import React from 'react'
import { useSearchParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails'
import { useSelector } from 'react-redux'
import useMovieDetailsImg from '../hooks/useMovieDetailsImg'

const MovieDetails = () => {
  const [GetParams] = useSearchParams()
  const MovieData = useSelector(store => store.moviedetails)
  
  useMovieDetails(GetParams.get('q'))
  useMovieDetailsImg(GetParams.get('q'))

  return (
    <>
    <div className='flex flex-col'>
    {MovieData.original_title}
    {MovieData.overview}
   </div>
    </>
    
  )
}

export default MovieDetails