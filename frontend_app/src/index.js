import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './pages/Home/App';
import Navigation from './components/Navigation'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    {/* <App /> */}
  </React.StrictMode>
);

