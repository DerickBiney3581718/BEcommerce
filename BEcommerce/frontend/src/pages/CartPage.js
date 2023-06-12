import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import  { useState } from 'react'
import CartCard from '../components/CartCard'
import { Link } from 'react-router-dom'

function CartPage() {
    const [quantities, setQuantities] = useState({})

    const product = {'id': '1', 'name': 'blender', 'price': '400.00', 'descript': 'durable and affordable from the German Chef', 'brand': 'German Chef', 'available': true, 'photo_url': '/media/uploads/german_chef_blender.jpeg'}
    return (
        <>
            <Stack spacing={1}>
                <CartCard product={product} />
                <CartCard product={product} />
                <CartCard product={product} />
            </Stack>
            <Divider />
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Box component="span" sx={{ p: 2, }}>
                    Subtotal                </Box>
                <Box component="span" sx={{ p: 2, }}>
                    <Typography variant='subtitle' sx={{ textEmphasis: 'Highlight' }}>GHC {432}</Typography>
                </Box>
            </Stack>
            <Link to={'/queue'}><Button color='warning' sx={{ bgcolor: 'black', }} >Proceed to checkout </Button></Link>
        </>
    )
}

export default CartPage