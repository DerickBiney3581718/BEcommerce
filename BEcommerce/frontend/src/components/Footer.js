import { Badge, BottomNavigation, BottomNavigationAction, Paper, } from '@mui/material'
import { Home, ListOutlined, Search, ShoppingCart } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Footer({badge}) {
    const [value, setValue] = useState(0)
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={13}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction icon={<Link to={'/'}><Home /></Link>} />
                <BottomNavigationAction icon={<Link to={'/explore'}><Search /></Link>} />

                <BottomNavigationAction icon={<Link to={'/cart'}><Badge badgeContent={badge} ><ShoppingCart /></Badge></Link>} />
                <BottomNavigationAction icon={<Link to={'/orders'}><ListOutlined /></Link>} />

            </BottomNavigation>
        </ Paper>
    )
}

export default Footer