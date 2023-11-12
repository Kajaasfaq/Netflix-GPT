import { useEffect } from 'react'
import { Apioptions } from '../utils/Api'
import { AddUpcoming } from '../utils/Slice/MoviesSlice'
import { useDispatch } from 'react-redux'


const useUpComingMovies = () => {

const dispatch = useDispatch()


useEffect(() => {
Nowplaying()
}, [])

const Nowplaying = async () => {
  const Now = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', Apioptions)
  const data = await Now.json()
  console.log(data)
  const moviesNow = data?.results
  dispatch(AddUpcoming(moviesNow))
}}


export default useUpComingMovies
