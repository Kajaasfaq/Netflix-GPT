import { createSlice } from "@reduxjs/toolkit";

const MovieDetails = createSlice({
    name : "moviedetails",
    initialState : {
        movieData : null,
        movieImg : null,
    },
    reducers : {
        addMovieDetails : (state , action) => {
        state.movieData = action.payload
        },
        addMovieDetailsImg : (state , action) => {
            state.movieImg = action.payload
            }
    }
})

export const { addMovieDetails ,  addMovieDetailsImg  } = MovieDetails.actions

export default MovieDetails.reducer