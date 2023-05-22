import { Favorite, FavoriteBorder, Remove, Add } from '@mui/icons-material'
import { Card, CardActions, CardMedia, IconButton, Box, Typography, CardContent, Stack, Button } from '@mui/material'
import React, { useState } from 'react'
import CategorySection from '../components/CategorySection'

function ProductPage() {
    const [fav, setFav] = useState(true)
    const [inStock, setInStock] = useState(true)
    return (
        <div>
            <Card sx={{ height: 400, position: 'relative' }} elevation={false}>
                <CardMedia component="img"
                    alt="green iguana"
                    height={400}
                    border-radius='5'
                    image={'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80'}
                />
                <CardActions sx={{ position: 'absolute', bottom: 0, zIndex: 454 }}>
                    <IconButton sx={{ color: 'white', borderRadius: 40 }}>
                        {fav ? <Favorite color='warning' /> : <FavoriteBorder />}
                    </IconButton>
                </CardActions>

            </Card>
            <Box>
                <Typography variant='h5' >GHC 432</Typography>
                <Typography > nAME Goes HERe --- </Typography>
                <Typography variant=''> brand name --- </Typography>

            </Box>
            <hr />
            <Box>
                <Typography variant='h5' >PRODUCT DESCRIPTION</Typography>
                <Typography variant=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reprehenderit porro provident culpa, rem dignissimos. A officiis, ullam voluptate recusandae doloremque rerum maiores illo facere explicabo, eaque obcaecati enim libero.</Typography>
            </Box>
            <hr />
            <Box>
                <Stack justifyContent={'space-between'}>
                    <Typography color={'success.light'} > In Stock </Typography>

                    <Stack direction={'row'} justifyContent={'space-around'} alignItems={'center'}>
                        <Typography variant=''>Quantity</Typography>
                        <IconButton aria-label="minus" size='small'>
                            <Remove />
                        </IconButton>
                        <IconButton aria-label="play/pause" size='small'>
                            {3}
                        </IconButton>
                        <IconButton aria-label="add" size='small' sx={{ bgcolor: 'gray' }}>
                            <Add />
                        </IconButton>
                    </Stack>
                    <Button sx={{ bgcolor: 'yellow' }}> Add to cart </Button>
                </Stack>
            </Box>
            <hr/>
            <CategorySection/>
        </div>
    )
}

export default ProductPage