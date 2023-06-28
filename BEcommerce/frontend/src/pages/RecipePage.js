import { Favorite, FavoriteBorder, Remove, Add, BookmarkAdd, BookmarkBorder } from '@mui/icons-material'
import { Card, CardActions, CardMedia, IconButton, Box, Typography, CardContent, Stack, Button, Divider } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { ArrowBack } from '@mui/icons-material'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CustomChecks from '../components/CustomChecks'
import { IngList } from '../components/IngList'
import { DifficultyScale } from '../components/DifficultyScale'

// import CategorySection from '../components/CategorySection'

function RecipePage() {
    const location = useLocation()
    const [bookmark, setBookmark] = useState(true)
    const [add, setAdd] = useState({})
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const endpoint = `http://localhost:8000/recipes/${location?.state?.id}/products`

    // console.log(location);
    useEffect(() => {
        const quantities = {}
        // fetch data
        const fetchUserData = async () => {
            const productsData = await (await fetch(endpoint)).json()
            setProducts(productsData)
            productsData.forEach(item => {quantities[item.id] = 0})
            setAdd({...quantities})
        }
        fetchUserData()
    }, []);
    const updateCartEndpoint = `http://localhost:8000/orders/$/`

    const HandleClick = () => {
        // console.log(updateCartEndpoint, data);
        const quantities = {}
        Object.entries(add).forEach(([key,value]) =>{if(value){quantities[key] = 1}} )
        console.log(quantities);
        fetch(updateCartEndpoint,
            {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({
                    // product_list: quantities
                })
            }).then(res => res.json()
            ).then(data => console.log(data))
    }
    console.log(products,add);

    return (
        <Box pb={9}>
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }} position={'sticky'}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBack />
                </IconButton>
            </Box >
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', pl: 2 }}>
                {/* <Typography variant='body' letterSpacing={2}> {location?.pathname}</Typography> */}
            </Box>

            <Divider />

            <Stack sx={{ px: 1 }} zIndex={57} bgcolor={'white'} alignItems={'center'}  >
                <Box alignSelf={'flex-start'} py={2}>
                    <Typography variant='h5' fontWeight={600} lineHeight={1.5}  > {location?.state.name}</Typography>
                    <Typography variant='subtitle1' color={'success.light'} fontWeight={700} lineHeight={1.5}   > origin : {location?.state.origin}</Typography>
                </Box>

                <Card sx={{ position: 'relative', borderRadius: 5 }} elevation={0}>
                    <CardMedia component="img"
                        alt={location.state.name}
                        // height={300}
                        image={location.state.photo_url}
                    />

                </Card>
                <CardActions sx={{ display: 'flex', alignSelf: 'flex-start', justifyContent: 'space-between', width: 1 }}>
                    <Stack direction={'row'} >
                        <IconButton sx={{ color: 'white', borderRadius: 40 }}>
                            {bookmark ? <BookmarkAdd color='warning' /> : <BookmarkBorder />}
                        </IconButton>
                        <Typography fontWeight={600} alignSelf={'center'}>Add to recipe catalogue</Typography></Stack>
                    <Stack direction={'row'} >
                        <IconButton> </IconButton>
                        <Typography variant='caption' color={'biney.gray'}> {location.state.time_lapse} days ago</Typography>
                    </Stack>
                </CardActions>

            </Stack>
            <Stack px={2}>
                <Box pb={2}>

                    <Typography color={'biney.gray'} lineHeight={2}>{location.state.intro}</Typography>
                </Box> </Stack>
            <Divider />
            <DifficultyScale item={location.state.difficulty} />
            <Divider />
            <Stack px={2}>
                <Box pb={2}>
                    <Typography variant='h6' fontWeight={600} lineHeight={2}>Products needed</Typography>
                    <CustomChecks items={products} setAdd={setAdd} add={add} />
                    <Button variant='contained' color='success' sx={{ borderRadius: 5 }} onClick={HandleClick} >Add to cart </Button>
                    <Button variant='contained' color='secondary' sx={{ borderRadius: 5, mx: 2 }}  > Buy now </Button>

                </Box>

            </Stack>
            <Divider />
            <Stack px={2}>
                <Box>
                    <Typography variant='h6' fontWeight={600} lineHeight={2} >Ingredients</Typography>
                    <IngList items={location.state?.ingredients} />
                </Box>
            </Stack>
            <Divider />
            <Stack px={2}>
                <Box>
                    <Typography variant='h6' fontWeight={600} >Instructions</Typography>
                    <Box color={'biney.gray'} lineHeight={2}>
                        <IngList items={location?.state.recipe_book.split('\n')} />

                    </Box>
                </Box>
            </Stack>
            <Divider />
            <Stack px={2}>
                <Box>
                    <Typography variant='h6' fontWeight={600} >Similar Recipes</Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa eum temporibus, perspiciatis animi unde dolore quod voluptatibus, nemo eligendi quo harum cum fuga eos pariatur id. Unde, commodi minima!
                </Box>
            </Stack>

        </Box >
    )
}

export default RecipePage

