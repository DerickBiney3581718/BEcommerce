import { Favorite, FavoriteBorder, Remove, Add, Bookmark, BookmarkOutlined, BookmarkBorder } from '@mui/icons-material'
import { Card, CardActions, CardMedia, IconButton, Box, Typography, CardContent, Stack, Button, Divider } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { ArrowBack } from '@mui/icons-material'
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import CustomChecks from '../components/CustomChecks'
import { IngList } from '../components/IngList'
import { DifficultyScale } from '../components/DifficultyScale'
import CategorySection from '../components/CategorySection'
import OtherSection from '../components/OtherSection'


function ProductPage() {
    const location = useLocation()
    const [bookmark, setBookmark] = useState(true)
    const data = useLoaderData()
    // const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const endpoint = `http://localhost:8000/recipes/${location?.state?.id}/products`

    // console.log(location);
    // useEffect(() => {
    //     // fetch data
    //     const fetchUserData = async () => {
    //         const productsData = await (await fetch(endpoint)).json()
    //         setProducts(productsData)
    //     }
    //     fetchUserData()
    // }, []);

    return (
        <Box pb={9}>
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }} position={'sticky'}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBack />
                </IconButton>
            </Box >
            <Divider />

            <Stack sx={{ px: 1 }} zIndex={57} bgcolor={'white'} alignItems={'center'}  >
                <Box alignSelf={'flex-start'} py={2}>
                    <Typography variant='h5' fontWeight={600} lineHeight={1.5}  > {location?.state.name}</Typography>
                    <Typography variant='subtitle1' color={'biney.gray'} fontWeight={700} lineHeight={1.5}   > brand : {location?.state.brand}</Typography>
                    <Typography variant='caption' color={location.state.available ? 'success.light' : 'error.light'}> {location.state.available && 'Available'}</Typography>

                </Box>

                <Card sx={{ position: 'relative', borderRadius: 5 }} elevation={0}>
                    <CardMedia component="img"
                        alt={location.state.name}
                        // height={300}
                        image={location.state.photo_url} />

                </Card>
                <CardActions sx={{ display: 'flex', alignSelf: 'flex-start', justifyContent: 'space-between', width: 1 }}>
                    <Stack direction={'row'} >
                        <Typography fontWeight={600} alignSelf={'center'} variant='caption'>{'GHC '}</Typography>

                        <Typography fontWeight={600} alignSelf={'center'}>{location.state.price}</Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} >
                        <IconButton><BookmarkBorder /> </IconButton>
                        <Typography variant='caption' fontWeight={600}>Add to wishlist </Typography>
                    </Stack>
                </CardActions>

            </Stack>
            <Divider />
            <Stack px={2}>
                <Typography variant='h6' fontWeight={600} >Product Description</Typography>
                <Box pb={2}>
                    <Typography color={'biney.gray'} lineHeight={2}>{location.state.descript}</Typography>
                </Box> </Stack>
            <Divider />

            <OtherSection items={data.products}>You might like these</OtherSection>
            <OtherSection items={data.products}>Recipes you can try</OtherSection>

        </Box >
    )
}


export default ProductPage