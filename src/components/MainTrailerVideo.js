import React from 'react'
import { useSelector } from 'react-redux'
import useTrailerVideo from '../hooks/useTrailerVideo'

const MainTrailerVideo = ({movieid}) => {
  const VideoKey = useSelector(store => store.movies.TrailerVideoData)
  useTrailerVideo(movieid)
  return (
    <div className='w-[100%]'><iframe className='w-[100%] h-[100%] aspect-video' 
    src={"https://www.youtube.com/embed/"+VideoKey?.key+"?&autoplay=1&mute=1&rel=0&loop=1"}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    title="YouTube video player" ></iframe></div>
  )
}

export default MainTrailerVideo