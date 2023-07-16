import React, { useState, useEffect } from 'react'
import { Card, CardMedia, Box, CardContent, Typography, IconButton, Stack } from '@mui/material'
import { Delete, } from '@mui/icons-material'
import { useTheme } from '@emotion/react';
import Quantitizer from './Quantitizer';
import { useCartDispatch } from '../CartContext';
// import 'frontend/public/images/How to Make Ofada Stew (Nigerian Ofada Sauce Recipe).jpeg' 

function CartCard({ product, quantities, setPrices, prices, }) {
    // const theme = useTheme();
    const dispatch = useCartDispatch()
    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <IconButton p={0} onClick={() => dispatch({type:"deleted",id:product.id})} ><Delete /></IconButton>

                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {product.brand}

                    </Typography>
                    <Typography variant='subtitle2'>
                        {product.name}

                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {'GHC' + product.price}
                    </Typography>
                    <Quantitizer quantity={quantities}  product={product} />
                </CardContent>
            </Box>
            <Stack display={'flex'} justifyContent={'center'}>
                <CardMedia
                    component="img"
                    sx={{ width: 150, height: 150 }}
                    image={product.photo_url}
                    alt="Live from space album cover"
                />
            </Stack>
        </Card>
    );
}

export default CartCard