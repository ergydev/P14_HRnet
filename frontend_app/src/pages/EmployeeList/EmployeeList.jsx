import { Container, Typography } from '@mui/material/';
import { useEffect, useState } from 'react';


import EmployeeTable from '../../components/EmployeeTable';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = localStorage.getItem('employees');
        if (storedEmployees) {
            const parseData = JSON.parse(storedEmployees);
            setEmployees(parseData);
        }
    }, []);


    return (
        <Container>
            <div>
                <Typography
                    sx={{
                        mt: 5,
                        mb: 5,
                        fontWeight: "bold",
                        textAlign: "left",
                        maxWidth: "560px",
                    }}
                    variant='h3'
                    color="#000"
                    className='employees__title'
                >
                    Current Employees
                </Typography>
            </div>

            <EmployeeTable employees={employees} />
        </Container >
    );
}

export default EmployeeList;