import axios from 'axios';
import { Dispatch } from 'redux';
import { UserActionTypes, FETCH_USER_PROFILE_SUCCESS, LOGIN_SUCCESS, LOGOUT, UPDATE_USER_PROFILE_SUCCESS } from '../../../types';

export const fetchUserProfile = () => async (dispatch: Dispatch<UserActionTypes>) => {
  const response = await axios.get('/api/user/profile');
  dispatch({ type: FETCH_USER_PROFILE_SUCCESS, payload: response.data });
};

export const updateUserProfile = (profile: { name: string, email: string }) => async (dispatch: Dispatch<UserActionTypes>) => {
  const response = await axios.put('/api/user/profile', profile);
  dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: response.data });
};

export const loginUser = (credentials: { email: string, password: string }) => async (dispatch: Dispatch<UserActionTypes>) => {
  const response = await axios.post('/api/user/login', credentials);
  localStorage.setItem('token', response.data.token);
  dispatch({ type: LOGIN_SUCCESS });
};

export const logoutUser = () => (dispatch: Dispatch<UserActionTypes>) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};

export const registerUser = (user: { name: string, email: string, password: string }) => async (dispatch: Dispatch<UserActionTypes>) => {
  await axios.post('/api/user/register', user);
};
