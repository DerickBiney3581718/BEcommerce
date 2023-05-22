import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import CartCard from '../components/CartCard'
import { Link } from 'react-router-dom'

function CartPage() {
    return (
        <>
            <Stack spacing={1}>
                <CartCard />
                <CartCard />
                <CartCard />
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