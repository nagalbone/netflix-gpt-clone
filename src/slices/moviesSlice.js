import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies:null,
    populerMovies:null,
    trailer:null
  },
  reducers: {
    addNowPlayingMovies: (state,action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopulerMovies: (state,action) => {
      state.populerMovies = action.payload;
    },
    addTrailer:(state,action)=>{
        state.trailer = action.payload;
    }
  },
});

export const { addNowPlayingMovies,addTrailer,addPopulerMovies } = moviesSlice.actions;
export default moviesSlice.reducer;