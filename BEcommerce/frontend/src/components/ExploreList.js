import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const ExploreList = ({ items }) => {
    const navigate = useNavigate()
    console.log('explore list', items)
    const HandleClick = (item) => {
        navigate(`/products/${item.id}`, { state: item })
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
