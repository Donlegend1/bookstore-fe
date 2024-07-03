import axios from 'axios';
import { Dispatch } from 'redux';
import { BookActionTypes, FETCH_BOOKS_SUCCESS, FETCH_BOOK_DETAILS_SUCCESS } from '../../../types';

// Existing actions
export const fetchBooks = () => async (dispatch: Dispatch<BookActionTypes>) => {
  const response = await axios.get('/api/books');
  dispatch({ type: FETCH_BOOKS_SUCCESS, payload: response.data });
};

export const fetchBookDetails = (id: string) => async (dispatch: Dispatch<BookActionTypes>) => {
  const response = await axios.get(`/api/books/${id}`);
  dispatch({ type: FETCH_BOOK_DETAILS_SUCCESS, payload: response.data });
};

// New searchBooks action
export const searchBooks = (query: string) => async (dispatch: Dispatch<BookActionTypes>) => {
  const response = await axios.get(`/api/books/search?query=${query}`);
  dispatch({ type: FETCH_BOOKS_SUCCESS, payload: response.data });
};

export const addBook = (query: string) => async (dispatch: Dispatch<BookActionTypes>) => {
  const response = await axios.get(`/api/books/search?query=${query}`);
  dispatch({ type: FETCH_BOOKS_SUCCESS, payload: response.data });
};
export const editBook = (query: string) => async (dispatch: Dispatch<BookActionTypes>) => {
  const response = await axios.get(`/api/books/search?query=${query}`);
  dispatch({ type: FETCH_BOOKS_SUCCESS, payload: response.data });
};