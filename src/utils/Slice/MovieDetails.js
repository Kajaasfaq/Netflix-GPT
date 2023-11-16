import { createSlice } from "@reduxjs/toolkit";

const MovieDetails = createSlice({
    name : "moviedetails",
    initialState : {
        moviedetails : null
    },
    reducers : {
        addMovieDetails : (state , action) => {
        state.moviedetails = action.payload
        }
    }
})

export const { addMovieDetails } = MovieDetails.actions

export default MovieDetails.reducer