import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  if (user?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;