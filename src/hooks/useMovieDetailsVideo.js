import { useEffect } from 'react'
import { Apioptions } from '../utils/Api'
import { useDispatch} from 'react-redux'
import { addMovieDetailsVideo } from '../utils/Slice/MovieDetails'


const useMovieDetailsVideo = (movieid) => {

const dispatch = useDispatch()
const VideoData = async () => {
  const Video = await fetch("https://api.themoviedb.org/3/movie/" + movieid +"/videos", Apioptions)
  const json = await Video.json();
  const trailersVideo = json.results?.filter((video) => video.type ===  "Trailer") 
  const VideoTrailerData = json?.results && trailersVideo[0];
  dispatch(addMovieDetailsVideo(VideoTrailerData))  
}

useEffect(() => {
  VideoData()
  }, [])
  
}


export default useMovieDetailsVideo