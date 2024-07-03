import jwt_decode from 'jwt-decode';

export const getToken = () => localStorage.getItem('token');

export const getUserFromToken = () => {
  const token = getToken();
  if (token) {
    // return jwt_decode(token);
  }
  return null;
};
