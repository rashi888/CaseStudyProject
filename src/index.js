import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

// http://216588976854-tr2vdq1vp4ha37r9het8gd25dv3vdain.apps.googleusercontent.com
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="216588976854-j5hk5astqjbo092vs3kn5rlo9uf928qt.apps.googleusercontent.com">  <App /></GoogleOAuthProvider>;
  </BrowserRouter>

);
