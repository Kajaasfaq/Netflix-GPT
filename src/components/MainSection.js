import React from 'react'
import MainTitle from './MainTitle'
import MainTrailerVideo from './MainTrailerVideo'
import { useSelector } from 'react-redux'

const MainSection = () => {

  const MovieData = useSelector(store => store.movies?.TrailerMovieData)
  
  const {title , id , overview} = MovieData

  return (
    <div>
        <MainTitle title ={title} overview={overview}/>
        <MainTrailerVideo movieid={id}/>
    </div>
  )
}

export default MainSection