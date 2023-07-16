import {  RadioButtonCheckedOutlined } from '@mui/icons-material';
import { Box, Checkbox, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import {useState} from 'react'

export default function RecipeIngredients({ items }) {
    const [checked, setChecked] = useState([1]);
    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
    return (
        <Stack px={2}>
            <Box>
                <Typography variant='h6' fontWeight={600} lineHeight={2} >Ingredients</Typography>
                <List>
                    {items?.map((item, i) => <ListItem disablePadding key={item} alignItems="center">

                        <ListItemButton >
                            <ListItemIcon sx={{pr:1, minWidth:'fit-content'}} >
                                <RadioButtonCheckedOutlined fontSize='4' />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>)}

                </List>    
                </Box>
            <Divider />
        </Stack>
    )
}
