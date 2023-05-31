import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

export const IngList = ({items}) => {
    return (
        <List>
            {items?.map(item => <ListItem disablePadding>
                <ListItemButton key={item}>
                    <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>)}

        </List>
    )
}
