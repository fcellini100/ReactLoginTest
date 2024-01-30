import App from '@/App';
import ProtectedRoute from '@/components/protected-route';
import Login from '@/pages/Login';
import Main from '@/pages/Main';
import { createBrowserRouter } from 'react-router-dom';

export const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/main',
    element: (
      <ProtectedRoute>
        <Main />
      </ProtectedRoute>
    ),
  },
]);
