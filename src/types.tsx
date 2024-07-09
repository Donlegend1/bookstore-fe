export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOK_DETAILS_SUCCESS = 'FETCH_BOOK_DETAILS_SUCCESS';
export const FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS';
export const FETCH_AUTHOR_DETAILS_SUCCESS = 'FETCH_AUTHOR_DETAILS_SUCCESS';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export interface Book {
  id?: number;
  title: string;
  author: string;
  description: string;
  coverImageUrl: string | File ;
  rating:string
}

export interface Author {
  id?: number;
  name: string;
  biography: string;
  books?: Book[];
}

export interface UserProfile {
  name: string;
  email: string;
}

export interface BookState {
  books: Book[];
  bookDetails: Book | null;
}

export interface AuthorState {
  authors: Author[];
  authorDetails: Author | null;
}

export interface UserState {
  profile: UserProfile | null;
  isAuthenticated: boolean;
}

export interface ErrorState {
  error: string | null;
}

interface FetchBooksSuccess {
  type: typeof FETCH_BOOKS_SUCCESS;
  payload: Book[];
}

interface FetchBookDetailsSuccess {
  type: typeof FETCH_BOOK_DETAILS_SUCCESS;
  payload: Book;
}

interface FetchAuthorsSuccess {
  type: typeof FETCH_AUTHORS_SUCCESS;
  payload: Author[];
}

interface FetchAuthorDetailsSuccess {
  type: typeof FETCH_AUTHOR_DETAILS_SUCCESS;
  payload: Author;
}

interface FetchUserProfileSuccess {
  type: typeof FETCH_USER_PROFILE_SUCCESS;
  payload: UserProfile;
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
}

interface Logout {
  type: typeof LOGOUT;
}

interface UpdateUserProfileSuccess {
  type: typeof UPDATE_USER_PROFILE_SUCCESS;
  payload: UserProfile;
}

interface SetError {
  type: typeof SET_ERROR;
  payload: string;
}

interface ClearError {
  type: typeof CLEAR_ERROR;
}

export type BookActionTypes = FetchBooksSuccess | FetchBookDetailsSuccess;
export type AuthorActionTypes = FetchAuthorsSuccess | FetchAuthorDetailsSuccess;
export type UserActionTypes = FetchUserProfileSuccess | LoginSuccess | Logout | UpdateUserProfileSuccess;
export type ErrorActionTypes = SetError | ClearError;
