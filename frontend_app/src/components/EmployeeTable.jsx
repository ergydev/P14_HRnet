import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, TablePagination, TextField } from '@mui/material/';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from 'react';

function EmployeeTable({ employees }) {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(employees.length);
    const [searchTerm, setSearchTerm] = useState('')
    const [sortCategory, setSortCategory] = useState('')
    const [sortOrder, setSortOrder] = useState('asc');

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const startIndex = page * rowsPerPage
    const endIndex = startIndex + rowsPerPage

    const filteredEmployees = employees.filter((employee) => {
        const firstName = (employee.firstName || '').toLowerCase();
        const lastName = (employee.lastName || '').toLowerCase();
        const dateStart = employee.dateStart || '';
        const department = (employee.department || '').toLowerCase();
        const dateBirth = employee.dateBirth || '';
        const address = (employee.street || '').toLowerCase();
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

    const sortByName = (a, b) => {
        if (sortOrder === 'asc') {
            return a.lastName.localeCompare(b.lastName);
        } else {
            return b.lastName.localeCompare(a.lastName);
        }
    };
    const sortByFirstName = (a, b) => {
        if (sortOrder === 'asc') {
            return a.firstName.localeCompare(b.firstName);
        } else {
            return b.firstName.localeCompare(a.firstName);
        }
    };
    const sortByDateStart = (a, b) => {
        if (sortOrder === 'asc') {
            return a.dateStart.localeCompare(b.dateStart);
        } else {
            return b.dateStart.localeCompare(a.dateStart);
        }
    };
    const sortByDateBirth = (a, b) => {
        if (sortOrder === 'asc') {
            return a.dateBirth.localeCompare(b.dateBirth);
        } else {
            return b.dateBirth.localeCompare(a.dateBirth);
        }
    };
    const sortByDepartment = (a, b) => {
        if (sortOrder === 'asc') {
            return a.department.localeCompare(b.department);
        } else {
            return b.department.localeCompare(a.department);
        }
    };
    const sortByAddress = (a, b) => {
        if (sortOrder === 'asc') {
            return a.street.localeCompare(b.street);
        } else {
            return b.street.localeCompare(a.street);
        }
    };
    const sortByCity = (a, b) => {
        if (sortOrder === 'asc') {
            return a.city.localeCompare(b.city);
        } else {
            return b.city.localeCompare(a.city);
        }
    };
    const sortByState = (a, b) => {
        if (sortOrder === 'asc') {
            return a.state.localeCompare(b.state);
        } else {
            return b.state.localeCompare(a.state);
        }
    };
    const sortByZipCode = (a, b) => {
        if (sortOrder === 'asc') {
            return a.zipCode.localeCompare(b.zipCode);
        } else {
            return b.zipCode.localeCompare(a.zipCode);
        }
    };

    const handleSortCategoryChange = (newSortCategory) => {
        if (newSortCategory === sortCategory) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortCategory(newSortCategory);
            setSortOrder('asc');
        }
    };

    const handleSortOrderChange = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
    };

    const sortedEmployees = [...employees].sort((a, b) => {
        switch (sortCategory) {
            case 'lastname':
                return sortByName(a, b);
            case 'firstname':
                return sortByFirstName(a, b);
            case 'dateStart':
                return sortByDateStart(a, b);
            case 'dateBirth':
                return sortByDateBirth(a, b);
            case 'department':
                return sortByDepartment(a, b);
            case 'street':
                return sortByAddress(a, b);
            case 'city':
                return sortByCity(a, b);
            case 'zipCode':
                return sortByZipCode(a, b);
            case 'state':
                return sortByState(a, b);
            default:
                return 0;
        }
    });

    if (sortOrder === 'desc') {
        sortedEmployees.reverse();
    }

    const renderSortArrow = (category) => {
        if (sortCategory === category) {
            return sortOrder === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;
        }
        return null;
    };

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
                            <TableCell onClick={() => handleSortCategoryChange('firstName')}>
                                First Name
                                {sortCategory === 'firstName' && (
                                    sortOrder === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
                                )}
                            </TableCell>
                            <TableCell onClick={() => handleSortCategoryChange('lastName')}>
                                Last Name
                                {renderSortArrow('lastName')}
                            </TableCell>
                            <TableCell onClick={() => handleSortCategoryChange('startDate')}>
                                Start Date
                                {renderSortArrow('startDate')}
                            </TableCell>
                            <TableCell onClick={() => handleSortCategoryChange('department')}>
                                Department
                                {renderSortArrow('department')}
                            </TableCell>
                            <TableCell onClick={() => handleSortCategoryChange('dateBirth')}>
                                Date of Birth
                                {renderSortArrow('dateBirth')}
                            </TableCell>
                            <TableCell onClick={() => handleSortCategoryChange('address')}>
                                Street
                                {renderSortArrow('address')}
                            </TableCell>
                            <TableCell onClick={() => handleSortCategoryChange('city')}>
                                City
                                {renderSortArrow('city')}
                            </TableCell>
                            <TableCell onClick={() => handleSortCategoryChange('state')}>
                                State
                                {renderSortArrow('state')}
                            </TableCell>
                            <TableCell onClick={() => handleSortCategoryChange('zipCode')}>
                                Zip Code
                                {renderSortArrow('zipCode')}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(filteredEmployees) && filteredEmployees.length > 0 ? (
                            filteredEmployees.map((employee, index) => (
                                <TableRow key={index}>
                                    <TableCell>{employee.firstName || ''}</TableCell>
                                    <TableCell>{employee.lastName || ''}</TableCell>
                                    <TableCell>{employee.dateStart || ''}</TableCell>
                                    <TableCell>{employee.department || ''}</TableCell>
                                    <TableCell>{employee.dateBirth || ''}</TableCell>
                                    <TableCell>{employee.address || ''}</TableCell>
                                    <TableCell>{employee.city || ''}</TableCell>
                                    <TableCell>{employee.state || ''}</TableCell>
                                    <TableCell>{employee.zipCode || ''}</TableCell>
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