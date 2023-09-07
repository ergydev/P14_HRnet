import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../layout/Header';
import App from '../pages/Home/App';
import Error from '../pages/Error/Error';
import EmployeeList from '../pages/EmployeeList/EmployeeList';

function Navigation () {
    return ( 
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/EmployeeList" element={<EmployeeList />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
     );
}

export default Navigation ;