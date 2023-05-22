import { Favorite, FavoriteBorder, Remove, Add } from '@mui/icons-material'
import { Card, CardActions, CardMedia, IconButton, Box, Typography, CardContent, Stack, Button } from '@mui/material'
import React, { useState } from 'react'
import { ArrowBack } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'

// import CategorySection from '../components/CategorySection'

function RecipePage({recipe}) {
    const location = useLocation()
    const [bookmark, setBookmark] = useState(true)
    // const [inStock, setInStock] = useState(true)
    return (
        <div>
            <Stack sx={{ px: 0 }} zIndex={57} position={'sticky'} top={0} bgcolor={'white'} alignItems={'center'}  >
                <Link to={`/`}> <IconButton> <ArrowBack /> </IconButton> </Link>
                <Card sx={{ height: 400, position: 'relative' }} elevation={2}>
                    <CardMedia component="img"
                        alt="green iguana"
                        height={400}
                        border-radius='5'
                        image={'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80'}
                    />
                    <CardActions sx={{ position: 'absolute', bottom: 0, zIndex: 454 }}>
                        <IconButton sx={{ color: 'white', borderRadius: 40 }}>
                            {bookmark ? <Favorite color='warning' /> : <FavoriteBorder />}
                        </IconButton>
                    </CardActions>

                </Card>
                <Typography px={8}>Recipes</Typography>
            </Stack>

            <Box>
                <Typography variant='h5' >GHC 432</Typography>
                <Typography > {location?.state.name}</Typography>
                <Typography variant=''>{location?.state.origin}</Typography>

            </Box>
            <hr />
            <Box>
                <Typography variant='h5' >PRODUCT DESCRIPTION</Typography>
                <Typography variant=''> {location?.state.recipe_book}</Typography>
            </Box>
            <hr />
            {/* <Box>
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
            </Box> */}
            <hr />
            {/* <CategorySection /> */}
        </div>
    )
}

export default RecipePage