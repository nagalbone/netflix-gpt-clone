import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../slices/loginSlice';
import moviesSlice from '../slices/moviesSlice';
import gptSearchSlice from '../slices/gptSearchSlice';
import configSlice from '../slices/configSlice';

const appStore = configureStore({
    reducer: {
        login:loginSlice,
        movies:moviesSlice,
        gpt:gptSearchSlice,
        config:configSlice
    },
  });
  
  export default appStore;