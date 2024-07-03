import { AuthorActionTypes, AuthorState, FETCH_AUTHORS_SUCCESS, FETCH_AUTHOR_DETAILS_SUCCESS } from '../../../types';

const initialState: AuthorState = {
  authors: [],
  authorDetails: null,
};

export const authorReducer = (state = initialState, action: AuthorActionTypes): AuthorState => {
  switch (action.type) {
    case FETCH_AUTHORS_SUCCESS:
      return { ...state, authors: action.payload };
    case FETCH_AUTHOR_DETAILS_SUCCESS:
      return { ...state, authorDetails: action.payload };
    default:
      return state;
  }
};
