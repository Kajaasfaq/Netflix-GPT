import { useEffect } from 'react'
import { Apioptions } from '../utils/Api'
import { AddPopularTvShow} from '../utils/Slice/MoviesSlice'
import { useDispatch } from 'react-redux'


const usePopularTvShow = () => {

const dispatch = useDispatch()


useEffect(() => {
Nowplaying()
}, [])

const Nowplaying = async () => {
  const Now = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', Apioptions)
  const data = await Now.json()
  const moviesNow = data?.results
  dispatch(AddPopularTvShow(moviesNow))
}}


export default usePopularTvShow 
