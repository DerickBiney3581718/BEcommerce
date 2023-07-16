import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

export const IngList = ({ items }) => {
    // console.log(items, "<-- from ingredients list comp");
    return (
        <List>
            {items?.map((item, i) => <>
                <ListItem disablePadding key={i}>

                    <ListItemButton key={item} >
                        <ListItemText primary={`Step ${i + 1}`} secondary={item} key={item} />
                    </ListItemButton>
                </ListItem>              
                <Divider  component="li" />
                </>
                )}


            </List >
    )
            }
