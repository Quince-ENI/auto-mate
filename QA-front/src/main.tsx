import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import StoreProvider from './state/StoreProvider';

function getRootElement(): HTMLElement {
  const rootElement = document.getElementById('root');
  if (rootElement) return rootElement;
  const newRootElement = document.createElement('div');
  document.body.appendChild(newRootElement);
  return newRootElement;
}

ReactDOM.createRoot(getRootElement()).render(
  <GoogleOAuthProvider clientId="491141015061-5paogai8633rhob8mall6o2p1c7umlqv.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <StoreProvider>
          <App />
        </StoreProvider>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
