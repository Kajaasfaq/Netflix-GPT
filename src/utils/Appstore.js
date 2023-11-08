import UserSlice from "./UserSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appstore = configureStore({
    reducer : {
        user : UserSlice
    }
})

export default appstore