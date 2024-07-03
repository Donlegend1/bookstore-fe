import { combineReducers } from 'redux';
import { bookReducer } from './bookReducer';
import { authorReducer } from './authorReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  authors: authorReducer,
  user: userReducer,
});

export default rootReducer;
