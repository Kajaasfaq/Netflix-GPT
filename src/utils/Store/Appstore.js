import MoviesSlice from "../Slice/MoviesSlice";
import UserSlice from "../Slice/UserSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appstore = configureStore({
    reducer : {
        user : UserSlice,
        movies : MoviesSlice,
    }
})

export default appstore