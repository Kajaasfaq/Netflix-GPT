import React from 'react'
import { useSelector } from 'react-redux'
import useTrailerVideo from '../hooks/useTrailerVideo'

const MainTrailerVideo = ({movieid}) => {
  const VideoKey = useSelector(store => store.movies.TrailerVideoData)
  useTrailerVideo(movieid)
  return (
    <div><iframe width="560" height="315" 
    src={"https://www.youtube.com/embed/"+VideoKey?.key+"?&autoplay=1&mute=1&rel=0&loop=1"}
    title="YouTube video player" ></iframe></div>
  )
}

export default MainTrailerVideo