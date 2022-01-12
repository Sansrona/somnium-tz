import {combineReducers} from 'redux'

import filterReducer from './filter';
import booksReducer from './books';
import cartReducer from './cart';

const rootReducer = combineReducers({
  filter:filterReducer,
  books:booksReducer,
  cart:cartReducer
})

export default rootReducer;