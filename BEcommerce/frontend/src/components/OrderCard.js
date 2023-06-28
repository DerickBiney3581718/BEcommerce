import { Box, Divider, ListItem, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


function OrderCard({ item }) {
    const navigate = useNavigate()
    const today = Date.now()
    const dateCreated = Date.parse(String(item.timestamp).split('.').slice(0, -1).join(''))
    const time_lapse = today - dateCreated
    const day_factor = 24 * 3600 * 1000
    // 2023-06-15T12:09:59.925463Z
    console.log(parseInt(time_lapse / day_factor));
    const HandleClick = ()=>{
        navigate(`/receipt`, {state:item})
    }
    useEffect(() => {
        // setQuantities({ ...productData })
        const productsEndpoint = `http://localhost:8000/products/${item.products.join('_')}`
        fetch(productsEndpoint).then(res => res.json()).then(data => {
            // setPrices([...data])
        })
    }, [])
    return (
        <Box onClick={HandleClick}>
            
            <ListItem>
                <ListItemText secondary={`${parseInt(time_lapse / day_factor)} days ago`} primary={`${item.products.length} items costing GHC${item.total_sum}`} />
            </ListItem>
            <Divider variant='inset' />
        </Box>

    )
}

export default OrderCard