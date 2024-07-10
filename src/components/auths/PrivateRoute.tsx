import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Context } from '../../auth/Context';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useContext(Context);
  const location = useLocation();
  if (user && location.pathname === '/login') {
    return <Navigate to="/dashboard" />;
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
