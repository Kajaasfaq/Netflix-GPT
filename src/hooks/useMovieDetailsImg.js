import { useEffect } from "react"
import { Apioptions } from "../utils/Api"
import { useDispatch } from "react-redux"
import { addMovieDetailsImg } from "../utils/Slice/MovieDetails"

const useMovieDetailsImg = (movieid) => {
    const dispatch = useDispatch()
    useEffect(() => {
        MovieDetailsImg()
    }, [])

    const MovieDetailsImg = async() => {

        const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieid +"/images" , Apioptions)
        const response = await data.json()
        dispatch(addMovieDetailsImg(response))        
    }
}

export default useMovieDetailsImg