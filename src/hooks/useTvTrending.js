import { useEffect } from 'react'
import { Apioptions } from '../utils/Api'
import { AddTvTrendingList } from '../utils/Slice/MoviesSlice'
import { useDispatch } from 'react-redux'


const useTvTrendingList = () => {

const dispatch = useDispatch()


useEffect(() => {
Nowplaying()
}, [])

const Nowplaying = async () => {
  const Now = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', Apioptions)
  const data = await Now.json()
  const moviesNow = data?.results
  dispatch(AddTvTrendingList(moviesNow))
}}


export default useTvTrendingList
