import { createSlice } from "@reduxjs/toolkit";

const MultiLang = createSlice({
    name : "MultiLang",
    initialState : {
        SupportLang : "en"
    },
    reducers : {
        AddSupportLang : (state , action) => {
            state.SupportLang = action.payload
        }
    }
})

export const {AddSupportLang} = MultiLang.actions

export default MultiLang.reducer 