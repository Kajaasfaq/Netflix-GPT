import GptState from "../Slice/GptStateSlice";
import MovieDetails from "../Slice/MovieDetails";
import MoviesSlice from "../Slice/MoviesSlice";
import MultiLang from "../Slice/MultiLang";
import UserSlice from "../Slice/UserSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appstore = configureStore({
    reducer : {
        user : UserSlice,
        movies : MoviesSlice,
        Gpt : GptState,
        MultiLang : MultiLang,
        moviedetails : MovieDetails,
    }
})

export default appstore