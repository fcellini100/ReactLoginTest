import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
  Button,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from './components/ui';

const App = () => {
  const { logout, user } = useAuth0();
  const navigate = useNavigate();
  return (
    <div className="container my-4">
      <Card>
        <CardHeader>
          <CardTitle>
            Welcome{' '}
            <span className="font-light text-blue-500">{user?.nickname}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-center border rounded-sm p-2 w-fit">
            <Avatar>
              <AvatarImage src={user?.picture} />
              <AvatarFallback>{user?.nickname}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold">{user?.name}</p>
              <p className="font-light from-neutral-600 text-xs">
                {user?.email}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex justify-end w-full gap-4">
            <Button onClick={() => navigate('/main')}>Go to Main</Button>
            <Button variant={'destructive'} onClick={() => logout()}>
              Logout
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default App;
