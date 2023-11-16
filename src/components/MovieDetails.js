import React from 'react'
import { useSearchParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails'

const MovieDetails = () => {
  const [GetParams] = useSearchParams()
  
  useMovieDetails(GetParams.get('q'))

  return (
    <>
    <div>
   </div>
    </>
    
  )
}

export default MovieDetails