import { configureStore } from '@reduxjs/toolkit';
import employeeSlice from './services/employeeSlice';

const store = configureStore({
    reducer: {
        employees: employeeSlice,
    },
});

export default store;