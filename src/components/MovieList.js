import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title , movies}) => {
  return (
    <div className=''>
    <div className='text-white font-body font-medium text-2xl px-9 pt-5 '>{title}</div>
    <div className='flex overflow-hidden hover:overflow-x-scroll pt-4 ml-7 scrollbar-hide'>
    <div className='flex'>
    {movies?.map(movie => <MovieCards key={movie.id} posterPath={movie?.poster_path}/>)}
    </div>
    </div>
   
    </div>
  )
}

export default MovieList