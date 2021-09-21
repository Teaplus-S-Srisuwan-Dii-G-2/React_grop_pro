import { configureStore } from '@reduxjs/toolkit';
import animeReducers from '../App/anime/reducers'

export default configureStore({
    reducer: { 
      animes: animeReducers
    }
  });