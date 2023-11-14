import { useEffect } from 'react'
import { Apioptions } from '../utils/Api'
import { AddTopRatedTvShow} from '../utils/Slice/MoviesSlice'
import { useDispatch } from 'react-redux'


const useTopRatedTvShow = () => {

const dispatch = useDispatch()


useEffect(() => {
Nowplaying()
}, [])

const Nowplaying = async () => {
  const Now = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', Apioptions)
  const data = await Now.json()
  const moviesNow = data?.results
  dispatch(AddTopRatedTvShow(moviesNow))
}}


export default  useTopRatedTvShow
