import React from 'react'
import { Card, CardMedia, Box, CardContent, Typography, IconButton } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
function CartCard() {
    return (
        <Card  sx={{ display: 'flex' }}>

            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="/static/images/cards/live-from-space.jpg"
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Live From Space
                    </Typography>
                    <Typography component="div" variant="h6" textAlign='center'>
                        {34}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1,justifyContent:'center' }}>
                    <IconButton aria-label="minus">
                        <Remove />
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        {3}
                    </IconButton>
                    <IconButton aria-label="add">
                        <Add />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    )
}

export default CartCard