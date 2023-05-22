import { Divider, ListItem, ListItemText } from '@mui/material'
import React from 'react'

function OrderCard() {
    return (
        <>
            <ListItem>
                <ListItemText secondary={'4 years ago'} primary={'Blender and 5 more items'} />
            </ListItem>
            <Divider variant='inset' />
        </>

    )
}

export default OrderCard