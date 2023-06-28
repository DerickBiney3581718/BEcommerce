import React, { useState, useEffect } from 'react'
import { Card, CardMedia, Box, CardContent, Typography, IconButton, Stack } from '@mui/material'
import { Delete, } from '@mui/icons-material'
import { useTheme } from '@emotion/react';
import Quantitizer from './Quantitizer';
// import 'frontend/public/images/How to Make Ofada Stew (Nigerian Ofada Sauce Recipe).jpeg' 

function CartCard({ product, dispatch, quantities, setPrices, prices,HandleDelete }) {
    const theme = useTheme();
    // const [product, setproduct] = useState({})
  
    // console.log(product,dispatch,quantities)
    // console.log(prices);

    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <IconButton p={0} onClick={() => HandleDelete(product.id)} ><Delete /></IconButton>

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
                    <Quantitizer quantity={quantities} dispatch={dispatch} product={product} HandleDelete={HandleDelete} />

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