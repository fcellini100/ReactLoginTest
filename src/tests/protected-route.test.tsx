import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from '@/components/protected-route';

jest.mock('@auth0/auth0-react');

const MockComponent = () => <div>Protected Content</div>;

describe('ProtectedRoute', () => {
  it('renders the protected component for authenticated users', () => {
    // Mock user authenticated state
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
    });

    render(
      <Router>
        <ProtectedRoute>
          <MockComponent />
        </ProtectedRoute>
      </Router>
    );

    expect(screen.getByText('Protected Content')).toBeInTheDocument();
  });

  it('does not render the protected component for unauthenticated users', () => {
    // Mock user not authenticated state
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      isLoading: false,
    });

    render(
      <Router>
        <ProtectedRoute>
          <MockComponent />
        </ProtectedRoute>
      </Router>
    );

    expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
  });
});
