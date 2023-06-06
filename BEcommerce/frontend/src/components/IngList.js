import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

export const IngList = ({items}) => {
    return (
        <List>
            {items?.map(item => <ListItem disablePadding key={item}>
                <ListItemButton >
                    <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>)}

        </List>
    )
}
