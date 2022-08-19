import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import { Outlet } from 'react-router-dom';

import Copyright from '../../components/pure/Copyright';

const DashBoardpage = () => {

    const navigate = useNavigate();

    const logout = () => {
        navigate('/login')

    }
    return (
        <div>
            <Button variant='contained' onClick={logout} >logout</Button>
            <Outlet />
            <Copyright></Copyright>
        </div>
    );
}

export default DashBoardpage;
