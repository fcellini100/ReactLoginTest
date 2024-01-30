import { useAuth0 } from '@auth0/auth0-react';
import { PropsWithChildren, useEffect } from 'react';
import SkeletonCard from './skeleton-card';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="container my-4 flex justify-center">
        <SkeletonCard />
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
