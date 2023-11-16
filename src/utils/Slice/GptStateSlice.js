import { createSlice } from "@reduxjs/toolkit";

const GptState = createSlice({
    name : "Gpt" ,
    initialState : {
        GptOpen : false,
        MovieList : null,
        MovieResult : null,
    },
    reducers : {
        ToogleGptState : (state ) => {
            state.GptOpen = !state.GptOpen
        },
        AddMovieDataResults : (state , action) => {
            const {MovieList , MovieResult} =action.payload
            state.Movielist = MovieList
            state.MovieResult =MovieResult
        }
    }
})

export const {ToogleGptState , AddMovieDataResults} = GptState.actions

export default GptState.reducer