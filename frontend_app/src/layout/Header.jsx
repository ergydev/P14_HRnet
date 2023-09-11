import Appbar from '@mui/material/AppBar'
import Link from '@mui/material/Link'
import {  Toolbar } from '@mui/material'

import './header.css'

const Header = () => {
    return (
        <Appbar position='static' sx={{ bgcolor: '#000'}}>
            <Toolbar>
                <Link
                    variant='h4'
                    sx={{ flexGrow: 1 }}
                    href="/"
                    color='#fff'
                    underline='none'
                >
                    HRNET
                </Link>
                <Link href="/EmployeeList" underline="none" color="#fff">
                    View Current List Employees
                </Link>
            </Toolbar>
        </Appbar>
    );
}

export default Header;