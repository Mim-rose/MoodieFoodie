import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  if (user) return children;

  // ⬅️ critical: pass the place we came from
  return <Navigate to="/signin" replace state={{ from: location }} />;
};

export default PrivateRoute;
