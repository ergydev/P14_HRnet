import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'; 
import storage from 'redux-persist/lib/storage'; 

import employeeReducer from './employeeSlice'; 
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, employeeReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)