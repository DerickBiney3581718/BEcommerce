import { Box, Divider, ListItem, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useProductData } from '../specialLoaders'

function OrderCard({ cart }) {
    const productData = useProductData({cart})
    console.log(productData);
    const navigate = useNavigate()
    const today = Date.now()
    const dateCreated = Date.parse(String(cart.timestamp).split('.').slice(0, -1).join(''))
    const time_lapse = today - dateCreated
    const day_factor = 24 * 3600 * 1000
    // 2023-06-15T12:09:59.925463Z
    // console.log(parseInt(time_lapse / day_factor));
    const HandleClick = () => {
        navigate(`/receipt`, { state: cart })
    }

   
    return (
        <Box onClick={HandleClick}>

            <ListItem>
                <ListItemText secondary={`${parseInt(time_lapse / day_factor)} days ago`} primary={`${cart.products.length} items costing GHC${cart.total_sum}`} />
            </ListItem>
            <Divider variant='inset' />
        </Box>

    )
}

export default OrderCard