import { useEffect } from 'react'
import { Apioptions } from '../utils/Api'
import { AddAiringTvShow} from '../utils/Slice/MoviesSlice'
import { useDispatch } from 'react-redux'


const useAiringTvShow = () => {

const dispatch = useDispatch()


useEffect(() => {
Nowplaying()
}, [])

const Nowplaying = async () => {
  const Now = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', Apioptions)
  const data = await Now.json()
  const moviesNow = data?.results
  dispatch(AddAiringTvShow(moviesNow))
}}


export default useAiringTvShow
