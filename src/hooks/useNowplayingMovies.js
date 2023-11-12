import { useEffect } from 'react'
import { Apioptions } from '../utils/Api'
import { AddNowmovies } from '../utils/Slice/MoviesSlice'
import { useDispatch } from 'react-redux'


const useNowplayingMovies = () => {

const dispatch = useDispatch()


useEffect(() => {
Nowplaying()
}, [])

const Nowplaying = async () => {
  const Now = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Apioptions)
  const data = await Now.json()
  console.log(data)
  const moviesNow = data?.results
  dispatch(AddNowmovies(moviesNow))
}}


export default useNowplayingMovies
