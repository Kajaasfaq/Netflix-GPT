import { createSlice } from "@reduxjs/toolkit";

const GptState = createSlice({
    name : "Gpt" ,
    initialState : {
        GptOpen : false
    },
    reducers : {
        ToogleGptState : (state ) => {
            state.GptOpen = !state.GptOpen
        }
    }
})

export const {ToogleGptState} = GptState.actions

export default GptState.reducer