import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../../auth/Context';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useContext(Context);

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
