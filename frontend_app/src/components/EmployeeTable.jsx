import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, TablePagination, TextField } from '@mui/material/';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function EmployeeTable() {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('')
    const [sortCategory, setSortCategory] = useState('')
    const [sortOrder, setSortOrder] = useState('asc');
    
    const employees = useSelector((state) => state.employees) || [];
    const [filteredEmployees, setFilteredEmployees] = useState(employees);

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowPerPage = (event) => {
        const newRowsPerPage = parseInt(event.target.value, 10);
        setRowsPerPage(newRowsPerPage);
    }

    
    const handleSortCategoryChange = (newSortCategory) => {
        if (newSortCategory === sortCategory) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortCategory(newSortCategory);
            setSortOrder('asc');
        }
    };


    useEffect(() => {
        if(!Array.isArray(employees)) {
            return
        }
        const filtered = employees.filter((employee) => {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            return (
                (typeof employee.firstName === 'string' && employee.firstName.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (typeof employee.lastName === 'string' && employee.lastName.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (typeof employee.dateStart === 'string' && employee.dateStart.includes(searchTerm)) ||
                (typeof employee.department === 'string' && employee.department.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (typeof employee.dateBirth === 'string' && employee.dateBirth.includes(searchTerm)) ||
                (typeof employee.street === 'string' && employee.street.includes(searchTerm)) ||
                (typeof employee.city === 'string' && employee.city.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (typeof employee.state === 'string' && employee.state.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (typeof employee.zipCode === 'string' && employee.zipCode.includes(searchTerm))
            );
        })

        const sorted = [...filtered].sort((a, b) => {
            const categoryA = a[sortCategory];
            const categoryB = b[sortCategory];
            if (categoryA < categoryB) return sortOrder === 'asc' ? -1 : 1;
            if (categoryA > categoryB) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        })

        setFilteredEmployees(sorted);
    }, [employees, searchTerm, sortCategory, sortOrder]);

    const startIndex = page * rowsPerPage
    const endIndex = Math.min(startIndex + rowsPerPage, employees.length)



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
                            filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
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
                                <TableCell colSpan={10}>No employees found.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={filteredEmployees.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowPerPage}
            />
        </div>
    )
}

export default EmployeeTable;