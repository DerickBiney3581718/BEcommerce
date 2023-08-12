import { BookmarkAdded, BookmarkBorder, } from '@mui/icons-material'
import { Card, CardActions, CardMedia, IconButton, Box, Typography, Stack, Button, Divider } from '@mui/material'
import React, { useState } from 'react'
import { ArrowBack } from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'
import CustomChecks from '../components/CustomChecks'
import { DifficultyScale } from '../components/DifficultyScale'
import ProductsPopup from '../components/ProductsPopup'
import CartMiniCard from '../components/CartMiniCard'
import RecipeInstructions from '../components/RecipeInstructions'
import RecipeIngredients from '../components/RecipeIngredients'
import { useRecipeProds } from '../Hooks/FetchHooks'
// import CategorySection from '../components/CategorySection'

function RecipePage() {
    const recipe = useLocation().state
    const [bookmark, setBookmark] = useState(true)
    const [openDialog, setOpenDialog] = useState(false)
    const [setCheckAlert] = useState(false)
    const [add, setAdd] = useState({})
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const quantities = {}
    useRecipeProds({ recipe, setProducts, setAdd, quantities }) 

    const HandleCartRedirect = () => {
        const CartNotEmpty = Object.values(add).reduce((acc, val) => acc + val, 0)
        // console.log(CartNotEmpty);
        CartNotEmpty ? navigate("/cart") : setCheckAlert(true);
    }
    const HandleCartAdd = () => {
        const CartNotEmpty = Object.values(add).reduce((acc, val) => acc + val, 0)
        // console.log(CartNotEmpty);
        CartNotEmpty && setOpenDialog(true)
    }


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
                    <Typography variant='h5' fontWeight={600} lineHeight={1.5}  > {recipe.name}</Typography>
                    <Typography variant='subtitle1' color={'success.light'} fontWeight={700} lineHeight={1.5}   > origin : {recipe.origin}</Typography>
                </Box>

                <Card sx={{ position: 'relative', borderRadius: 5 }} elevation={0}>
                    <CardMedia component="img"
                        alt={recipe.name}
                        // height={300}
                        image={recipe.photo_url}
                    />

                </Card>
                <CardActions sx={{ display: 'flex', alignSelf: 'flex-start', justifyContent: 'space-between', width: 1 }}>
                    <Stack direction={'row'} >
                        <IconButton onClick={() => (setBookmark(!bookmark))}>
                            {bookmark ? <BookmarkBorder /> : <BookmarkAdded color='warning' />}
                        </IconButton>
                        <Typography fontWeight={600} alignSelf={'center'}>Add to recipe catalogue</Typography></Stack>
                    <Stack direction={'row'} >
                        <IconButton> </IconButton>
                        <Typography variant='caption' color={'biney.gray'}> {recipe.time_lapse} days ago</Typography>
                    </Stack>
                </CardActions>

            </Stack>
            <Stack px={2}>
                <Box pb={2}>

                    <Typography color={'biney.gray'} lineHeight={2}>{recipe.intro}</Typography>
                </Box> </Stack>
            <Divider />
            <DifficultyScale item={recipe.difficulty} />
            <Divider />
            <Stack px={2}>
                <Box pb={2}>
                    <Typography variant='h6' fontWeight={600} lineHeight={2}>Products needed</Typography>
                    <CustomChecks products={products} setAdd={setAdd} add={add} />
                    <Button variant='contained' color='success' sx={{ borderRadius: 5 }} onClick={HandleCartAdd} >Add to cart </Button>
                    <Button variant='contained' color='secondary' sx={{ borderRadius: 5, mx: 2 }} onClick={HandleCartRedirect}  > Buy now </Button>

                </Box>

            </Stack>
            <Divider />
            <RecipeIngredients items={recipe?.ingredients} />
            <RecipeInstructions items={recipe.recipe_book.split('\n')} />
            <Stack px={2}>
                <Box>
                    <Typography variant='h6' fontWeight={600} >Similar Recipes</Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa eum temporibus, perspiciatis animi unde dolore quod voluptatibus, nemo eligendi quo harum cum fuga eos pariatur id. Unde, commodi minima!
                </Box>
            </Stack>
            <ProductsPopup title={"products to add to cart"} openDialog={openDialog} setOpenDialog={setOpenDialog}>
                <Stack direction={'column'} >
                    {products.map(item => {
                        if (add[item.id]) {
                            return <CartMiniCard product={item} quantities={add} key={item.id} />
                        }
                        return undefined;
                    })}
                </Stack>
            </ProductsPopup>
        </Box >
    )
}

export default RecipePage

