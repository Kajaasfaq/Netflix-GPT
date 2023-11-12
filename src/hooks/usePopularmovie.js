import { useEffect } from 'react'
import { Apioptions } from '../utils/Api'
import { useDispatch } from 'react-redux'
import { AddPopular } from '../utils/Slice/MoviesSlice'


const usePopularMovies = () => {

const dispatch = useDispatch()


useEffect(() => {
Nowplaying()
}, [])

const Nowplaying = async () => {
  const Now = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', Apioptions)
  const data = await Now.json()
  console.log(data)
  const moviesNow = data?.results
  dispatch(AddPopular(moviesNow))
}}


export default usePopularMovies
