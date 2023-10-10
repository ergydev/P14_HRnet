import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'; 
import './index.css';

import Navigation from './components/Navigation'

import { persistor, store } from './services/reduxPersist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Navigation />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

