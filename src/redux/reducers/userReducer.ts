import { UserActionTypes, UserState, FETCH_USER_PROFILE_SUCCESS, LOGIN_SUCCESS, LOGOUT, UPDATE_USER_PROFILE_SUCCESS } from '../../../types';

const initialState: UserState = {
  profile: null,
  isAuthenticated: false,
};

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
    case UPDATE_USER_PROFILE_SUCCESS:
      return { ...state, profile: action.payload, isAuthenticated: true };
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true };
    case LOGOUT:
      return { ...state, profile: null, isAuthenticated: false };
    default:
      return state;
  }
};
