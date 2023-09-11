import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, } from '@mui/material/';

function EmployeeTable({ employees }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Start Date</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Date of Birth</TableCell>
                        <TableCell>Street</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>Zip Code</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees?.map((employee, index) => (
                        <TableRow key={index}>
                            <TableCell>{employee.firstName}</TableCell>
                            <TableCell>{employee.lastName}</TableCell>
                            <TableCell>{employee.dateStart}</TableCell>
                            <TableCell>{employee.department}</TableCell>
                            <TableCell>{employee.DateBirth}</TableCell>
                            <TableCell>{employee.adress}</TableCell>
                            <TableCell>{employee.city}</TableCell>
                            <TableCell>{employee.state}</TableCell>
                            <TableCell>{employee.zipCode}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default EmployeeTable;