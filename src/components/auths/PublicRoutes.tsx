import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../../auth/Context';

interface PublicRouteProps {
  children: JSX.Element;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { user } = useContext(Context);

  return user ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
