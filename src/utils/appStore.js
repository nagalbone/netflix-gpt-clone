import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../slices/loginSlice';
import moviesSlice from '../slices/moviesSlice';
import gptSearchSlice from '../slices/gptSearchSlice';

const appStore = configureStore({
    reducer: {
        login:loginSlice,
        movies:moviesSlice,
        gpt:gptSearchSlice
    },
  });
  
  export default appStore;