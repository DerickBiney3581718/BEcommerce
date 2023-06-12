import React, { useState } from 'react'
import { Card, CardMedia, Box, CardContent, Typography, IconButton, Stack } from '@mui/material'
import {  Delete, } from '@mui/icons-material'
import { useTheme } from '@emotion/react';
import Quantitizer from './Quantitizer';
import { useLoaderData } from 'react-router-dom';
// import 'frontend/public/images/How to Make Ofada Stew (Nigerian Ofada Sauce Recipe).jpeg' 

function CartCard({ product }) {
    const theme = useTheme();
     const data = useLoaderData()
     console.log(data);
    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <IconButton p={0} ><Delete /></IconButton>

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
                    <Quantitizer quantity={4} />

                </CardContent>
                {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrow sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
                    </IconButton>
                </Box> */}
            </Box>
            <Stack display={'flex'} justifyContent={'center'} >
                <CardMedia
                    component="img"
                    sx={{ width: 1, height: 150 }}
                    image={product.photo_url}
                    alt="Live from space album cover"
                />
            </Stack>

        </Card>
    );
}

export default CartCard