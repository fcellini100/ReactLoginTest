import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Auth0ProviderData } from './models/types';
import { mainRouter } from './routes/main-router';

const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const auth0ProviderData: Auth0ProviderData = {
  domain: auth0Domain,
  clientId: auth0ClientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider {...auth0ProviderData}>
      <RouterProvider router={mainRouter}></RouterProvider>
    </Auth0Provider>
  </React.StrictMode>
);
