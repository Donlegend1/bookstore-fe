import axios from 'axios';
import { Dispatch } from 'redux';
import { AuthorActionTypes, FETCH_AUTHORS_SUCCESS, FETCH_AUTHOR_DETAILS_SUCCESS } from '../../../types';

export const fetchAuthors = () => async (dispatch: Dispatch<AuthorActionTypes>) => {
  const response = await axios.get('/api/authors');
  dispatch({ type: FETCH_AUTHORS_SUCCESS, payload: response.data });
};

export const fetchAuthorDetails = (id: string) => async (dispatch: Dispatch<AuthorActionTypes>) => {
  const response = await axios.get(`/api/authors/${id}`);
  dispatch({ type: FETCH_AUTHOR_DETAILS_SUCCESS, payload: response.data });
};
