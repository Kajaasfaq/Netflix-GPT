import { useEffect } from 'react'
import { Apioptions } from '../utils/Api'
import { AddTopRated } from '../utils/Slice/MoviesSlice'
import { useDispatch } from 'react-redux'


const useTopRatedMovies = () => {

const dispatch = useDispatch()


useEffect(() => {
Nowplaying()
}, [])

const Nowplaying = async () => {
  const Now = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', Apioptions)
  const data = await Now.json()
  const moviesNow = data?.results
  dispatch(AddTopRated(moviesNow))
}}


export default useTopRatedMovies
