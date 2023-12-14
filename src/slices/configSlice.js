import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        langauge:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.langauge = action.payload;
        }
    }
});

export const {changeLanguage} = configSlice.actions;
export default configSlice.reducer;