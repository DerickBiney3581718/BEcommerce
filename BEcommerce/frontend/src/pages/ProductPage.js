import { BookmarkBorder, BookmarkAdded } from '@mui/icons-material'
import { Card, CardActions, CardMedia, IconButton, Box, Typography, Stack, Button, Divider } from '@mui/material'
import React, { useState, } from 'react'
import { ArrowBack } from '@mui/icons-material'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import OtherSection from '../components/OtherSection'
import ProductsPopup from '../components/ProductsPopup'
import CartMiniCard from '../components/CartMiniCard'


function ProductPage() {
    const location = useLocation()
    const [add, setAdd] = useState({})
    const [openDialog, setOpenDialog] = useState(false)
    const [bookmark, setBookmark] = useState(true)
    const [CheckAlert, setCheckAlert] = useState(false)
    
    console.log(CheckAlert)
    const data = useLoaderData()
    const product = location?.state
    const navigate = useNavigate()
    console.log(data)
    const HandleCartAdd = () => {
        setAdd({ [product.id]: 1 })
        setOpenDialog(true)
    }
    const HandleCartRedirect = () => {
        const CartNotEmpty = Object.values(add).reduce((acc, val) => acc + val, 0)
        console.log(CartNotEmpty);
        CartNotEmpty ? navigate("/cart") : setCheckAlert(true);
    }

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
                    <Typography variant='h5' fontWeight={600} lineHeight={1.5}  > {product.name}</Typography>
                    <Typography variant='subtitle1' color={'biney.gray'} fontWeight={700} lineHeight={1.5}   > brand : {product.brand}</Typography>
                    <Typography variant='caption' color={product.available ? 'success.light' : 'error.light'}> {product.available && 'Available'}</Typography>

                </Box>

                <Card sx={{ position: 'relative', borderRadius: 5 }} elevation={0}>
                    <CardMedia component="img"
                        alt={product.name}
                        // height={300}
                        image={product.photo_url} />
                    <Button variant='contained' color='success' sx={{ borderRadius: 5, position: "absolute", bottom: 5, left: 3 }} onClick={HandleCartAdd} >Add to cart </Button>

                </Card>
                <CardActions sx={{ display: 'flex', alignSelf: 'flex-start', justifyContent: 'space-between', width: 1 }}>
                    <Stack direction={'row'} >
                        <Typography fontWeight={600} alignSelf={'center'} variant='caption'>{'GHC '}</Typography>

                        <Typography fontWeight={600} alignSelf={'center'}>{product.price}</Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} >
                        <IconButton onClick={() => setBookmark(!bookmark)}>
                            {bookmark ? <BookmarkBorder /> : <BookmarkAdded color='warning' />}
                        </IconButton>
                        <Typography variant='caption' fontWeight={600}>Add to wishlist </Typography>
                    </Stack>
                </CardActions>

            </Stack>
            <Divider />
            <Stack px={2}>
                <Typography variant='h6' fontWeight={600} >Product Description</Typography>
                <Box pb={2}>
                    <Typography color={'biney.gray'} lineHeight={2}>{product.descript}</Typography>
                </Box> </Stack>
            <Divider />

            <OtherSection items={data.products.results}>You might like these</OtherSection>
            <OtherSection items={data.products.results}>Recipes you can try</OtherSection>
            <ProductsPopup title={"Add to cart"} openDialog={openDialog} setOpenDialog={setOpenDialog}>
                <Stack direction={'column'} >
                    <CartMiniCard product={product} quantities={add} key={product.id} />
                    <Button variant='contained' color='secondary' sx={{ borderRadius: 5, mx: 2 }} onClick={HandleCartRedirect}  > Buy now </Button>

                </Stack>
            </ProductsPopup>
        </Box >
    )
}


export default ProductPage