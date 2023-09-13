import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, TablePagination, TextField } from '@mui/material/';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { get } from '../utils/employeeSlice';


function EmployeeTable() {
    const dispatch = useDispatch()
    const firstName = useSelector(state => state.firstName)
    console.log(dispatch(get()))
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('')

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    // const filteredEmployees = employees.filter((employee) => 
    //     employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     employee.dateStart.includes(searchTerm) ||
    //     employee.department.toLowerCase().includes(searchTerm) ||
    //     employee.dateBirtrh.includes(searchTerm) ||
    //     employee.adress.toLowerCase().includes(searchTerm) ||
    //     employee.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     employee.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     employee.zipCode.includes(searchTerm) 
    // )

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
                        {/* {employees?.map((employee, index) => (
                            <TableRow key={index}>
                                <TableCell>{employee.firstName}</TableCell>
                                <TableCell>{employee.lastName}</TableCell>
                                <TableCell>{employee.dateStart}</TableCell>
                                <TableCell>{employee.department}</TableCell>
                                <TableCell>{employee.dateBirth}</TableCell>
                                <TableCell>{employee.adress}</TableCell>
                                <TableCell>{employee.city}</TableCell>
                                <TableCell>{employee.state}</TableCell>
                                <TableCell>{employee.zipCode}</TableCell>
                            </TableRow>
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                // count={employees.length}
                count={0}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowPerPage}
            />
        </div>
    )
}

export default EmployeeTable;