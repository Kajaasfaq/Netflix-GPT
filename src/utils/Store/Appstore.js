import GptState from "../Slice/GptStateSlice";
import MoviesSlice from "../Slice/MoviesSlice";
import UserSlice from "../Slice/UserSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appstore = configureStore({
    reducer : {
        user : UserSlice,
        movies : MoviesSlice,
        Gpt : GptState
    }
})

export default appstore