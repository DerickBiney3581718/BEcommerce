import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import Quantitizer from './Quantitizer';

export default function CartMiniCard({product,quantities}) {
    // console.log(quantities)
  return (
<Card  sx={{ width:1, display: 'flex', flexDirection: 'row',justifyContent:"space-between", marginBottom:2}}>
<Box sx={{}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {product.brand}

                    </Typography>
                    <Typography variant='subtitle2'>
                        {product.name}

                    </Typography>
                    <Quantitizer quantity={quantities}  product={product} />
                </CardContent>
            </Box>
            <Stack display={'flex'} justifyContent={'center'}>
                <CardMedia
                    component="img"
                    sx={{ width: 60, height: 60 }}
                    image={product.photo_url}
                    // alt="Live from space album cover"
                />
            </Stack>
</Card>  )
}
