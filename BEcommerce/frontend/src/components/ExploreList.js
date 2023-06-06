import { List, ListItem, ListItemButton } from '@mui/material'
import React from 'react'

export const ExploreList = ({ arr }) => {
    return (
        <List>
            {arr.map(item => {
                <ListItem disablePadding>
                <ListItemButton>
                    <ListItemAvatar>
                        <InboxIcon />
                    </ListItemAvatar>
                    <ListItemText primary="Inbox" />
                </ListItemButton>
            </ListItem>
            })
            }</List>
    )
}
