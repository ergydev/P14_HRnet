import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, TablePagination, TextField } from '@mui/material/';
import { useState } from 'react';

function EmployeeTable({ employees }) {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(employees.length);
    const [searchTerm, setSearchTerm] = useState('')

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const filteredEmployees = employees.filter((employee) => {
        const firstName = (employee.firstName || '').toLowerCase();
        const lastName = (employee.lastName || '').toLowerCase();
        const dateStart = employee.dateStart || '';
        const department = (employee.department || '').toLowerCase();
        const dateBirth = employee.dateBirth || '';
        const address = (employee.address || '').toLowerCase();
        const city = (employee.city || '').toLowerCase();
        const state = (employee.state || '').toLowerCase();
        const zipCode = (employee.zipCode || '');

        return (
            firstName.includes(searchTerm.toLowerCase()) ||
            lastName.includes(searchTerm.toLowerCase()) ||
            dateStart.includes(searchTerm) ||
            department.includes(searchTerm.toLowerCase()) ||
            dateBirth.includes(searchTerm) ||
            address.includes(searchTerm.toLowerCase()) ||
            city.includes(searchTerm.toLowerCase()) ||
            state.includes(searchTerm.toLowerCase()) ||
            zipCode.includes(searchTerm)
          );
    })

    const startIndex = page * rowsPerPage
    const endIndex = startIndex + rowsPerPage

    return (
        <div>
            <TextField
                label='Search employees'
                variant='outlined'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ marginBottom: 2, height: 1 }}
            />
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
                        {Array.isArray(filteredEmployees) && filteredEmployees.length > 0 ? (
                            filteredEmployees.map((employee, index) => (
                                <TableRow key={index}>
                                    <TableCell>{employee.firstName || '' }</TableCell>
                                    <TableCell>{employee.lastName || '' }</TableCell>
                                    <TableCell>{employee.dateStart || '' }</TableCell>
                                    <TableCell>{employee.department || '' }</TableCell>
                                    <TableCell>{employee.dateBirth || '' }</TableCell>
                                    <TableCell>{employee.address || '' }</TableCell>
                                    <TableCell>{employee.city || '' }</TableCell>
                                    <TableCell>{employee.state || '' }</TableCell>
                                    <TableCell>{employee.zipCode || '' }</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={9}>No employees found.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={employees.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowPerPage}
            />
        </div>
    )
}

export default EmployeeTable;