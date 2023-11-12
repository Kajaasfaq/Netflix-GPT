import { useEffect } from 'react'
import { Apioptions } from '../utils/Api'
import { useDispatch} from 'react-redux'
import { TrailerVideo } from '../utils/Slice/MoviesSlice'


const useTrailerVideo = (movieid) => {

const dispatch = useDispatch()
const VideoData = async () => {
  const Video = await fetch("https://api.themoviedb.org/3/movie/"+movieid+"/videos", Apioptions)
  const json = await Video.json();
  console.log(json)
  const trailersVideo = json.results?.filter((video) => video.type === "Trailer")
  const VideoTrailerData = trailersVideo && trailersVideo[0];
  dispatch(TrailerVideo(VideoTrailerData))  
}

useEffect(() => {
  VideoData()
  }, [])
  
}


export default useTrailerVideo
