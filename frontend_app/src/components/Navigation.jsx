import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';
import { Provider } from 'react-redux';

import store from '../utils/store'
import Header from '../layout/Header';
import App from '../pages/Home/App';
import Error from '../pages/Error/Error';
import EmployeeList from '../pages/EmployeeList/EmployeeList';

function Navigation() {

    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/EmployeeList" element={<EmployeeList />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default Navigation;