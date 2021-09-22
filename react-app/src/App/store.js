import { configureStore } from '@reduxjs/toolkit';
import animeReducers from '../Component/anime/reducers'

export default configureStore({
    reducer: { 
      animes : animeReducers
    }
  });