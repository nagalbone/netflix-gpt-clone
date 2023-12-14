import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addTmdbMovieResults:(state,action)=>{
            const {movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});

export const {toggleGptSearch,addTmdbMovieResults} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;