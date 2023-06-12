import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const ExploreList = ({ items }) => {
    const navigate = useNavigate()
    console.log('the it ems slsj', items)
    const HandleClick = (item) => {
        navigate(`/product/${item.id}`, { state: item })
    }

    return (
        <List>
            {items?.map(item => <ListItem disablePadding key={item.id} onClick={() => HandleClick(item)}>
                <ListItemButton >
                    <ListItemText primary={item.name} />
                </ListItemButton>
            </ListItem>)}

        </List>
    )
}
