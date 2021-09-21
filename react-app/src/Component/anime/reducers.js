import { createReducer } from '@reduxjs/toolkit';
import { fetchProducts } from './actions';


export default createReducer([], {
  [fetchProducts]: (state, action) => {
    return action.payload;
  }

});