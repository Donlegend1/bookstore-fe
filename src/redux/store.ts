import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './reducers/bookReducer';
import { authorReducer } from './reducers/authorReducer';
import { userReducer } from './reducers/userReducer';

const store = configureStore({
  reducer: {
    // books: bookReducer,
    // authors: authorReducer,
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
