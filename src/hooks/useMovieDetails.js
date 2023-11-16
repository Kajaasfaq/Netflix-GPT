import { useEffect } from "react"
import { Apioptions } from "../utils/Api"
import { useDispatch } from "react-redux"
import { addMovieDetails } from "../utils/Slice/MovieDetails"

const useMovieDetails = (movieid) => {

    const dispatch = useDispatch()

    useEffect(()=> {
    MovieDetails()
    } , [])

    const MovieDetails = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieid +'?language=en-US', Apioptions)
        const respone = await data.json()
        dispatch(addMovieDetails(respone))
    }

}

export default useMovieDetails