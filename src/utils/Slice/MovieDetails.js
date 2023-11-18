import { createSlice } from "@reduxjs/toolkit";

const MovieDetails = createSlice({
    name : "moviedetails",
    initialState : {
        movieData : null,
        movieImg : null,
        movieVideo : null,

    },
    reducers : {
        addMovieDetails : (state , action) => {
        state.movieData = action.payload
        },
        addMovieDetailsImg : (state , action) => {
            state.movieImg = action.payload
        },
        addMovieDetailsVideo : (state , action) => {
            state.movieVideo = action.payload
        }
    }
})

export const { addMovieDetails ,  addMovieDetailsImg  , addMovieDetailsVideo} = MovieDetails.actions

export default MovieDetails.reducer