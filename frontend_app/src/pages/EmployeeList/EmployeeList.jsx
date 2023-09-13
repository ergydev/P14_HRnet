import {  Container, Typography } from '@mui/material/';
import EmployeeTable from '../../components/EmployeeTable';

const EmployeeList = () => {

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

            <EmployeeTable />
        </Container >
    );
}

export default EmployeeList;