import { BookActionTypes, BookState, FETCH_BOOKS_SUCCESS, FETCH_BOOK_DETAILS_SUCCESS } from '../../../types';

const initialState: BookState = {
  books: [],
  bookDetails: null,
};

export const bookReducer = (state = initialState, action: BookActionTypes): BookState => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return { ...state, books: action.payload };
    case FETCH_BOOK_DETAILS_SUCCESS:
      return { ...state, bookDetails: action.payload };
    default:
      return state;
  }
};
