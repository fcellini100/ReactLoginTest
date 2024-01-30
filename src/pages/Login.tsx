import { Button } from '@/components/ui';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container my-4">
      <h1 className="text-2xl font-bold m-auto w-fit">
        You must be logged in to continue
      </h1>
      <div className="m-auto w-fit my-4">
        <Button variant={'destructive'} onClick={() => loginWithRedirect()}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
