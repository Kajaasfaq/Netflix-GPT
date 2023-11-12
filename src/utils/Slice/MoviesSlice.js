import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name : "movies" ,
    initialState : {
        TrailerMovieData : null,
        TrailerVideoData : null,
        NowplayingMoviesList : null,
        PopularMovieList : null,
        TopRatedMovieList : null,
        UpComingMovieList : null,

    },
    reducers : {
        AddNowmovies : (state , action) => {
            state.NowplayingMoviesList = action.payload
        },
        TrailerMovie : (state , action) => {
            state.TrailerMovieData = action.payload
        },
        TrailerVideo : (state , action ) => {
            state.TrailerVideoData = action.payload
        },
        AddPopular : (state , action ) => {
            state.PopularMovieList = action.payload
        }, 
        AddTopRated : (state , action ) => {
            state.TopRatedMovieList = action.payload
        },
         AddUpcoming : (state , action ) => {
            state.UpComingMovieList = action.payload
        },
        
    }
})

export const {AddNowmovies , TrailerMovie , TrailerVideo , AddPopular, AddUpcoming , AddTopRated} = MoviesSlice.actions

export default MoviesSlice.reducer