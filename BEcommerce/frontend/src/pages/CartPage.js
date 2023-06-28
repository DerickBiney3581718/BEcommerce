import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { useState, useEffect,useReducer } from 'react'
import CartCard from '../components/CartCard'
import { Link, useLoaderData } from 'react-router-dom'
import { useCart,useCartDispatch } from '../CartContext'
function CartPage() {
    const data = useLoaderData()
    const cart = useCart()
    const dispatch  = useCartDispatch()
    const quantities =  cart.product_list
    const [prices, setPrices] = useState([])


    const updateCartEndpoint = `http://localhost:8000/orders/${cart?.id}/`
    useEffect(() => {
        const productsEndpoint = `http://localhost:8000/products/${cart?.products?.join('_')}`
        fetch(productsEndpoint).then(res => res.json()).then(data => {
            setPrices([...data])
        })
    }, [])
    console.log('cart', cart, 'quantities',quantities);
    const subtotal = prices.reduce((acc, product) => acc + (product.price * quantities[product.id] || 0) 
    , 0)


    //ahndlers
    const HandleClick = () => {
        console.log(updateCartEndpoint, data);
        fetch(updateCartEndpoint,
            {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({
                    product_list: quantities
                })
            }).then(res => res.json()
            ).then(data => console.log(data))
    }
    const HandleDelete = (id) => {
        console.log('id',id)
        dispatch({type:'deleted',id:id})
    }
    return (
        <>
            <Stack sx={{ px: 0 }} zIndex={57} position={'sticky'} top={0} bgcolor={'white'}>
                <Link to={'/queue'}>
                <Button color='warning' sx={{ bgcolor: 'black', }} onClick={HandleClick}>Proceed to checkout </Button>
                </Link>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography component="span" sx={{ p: 2, }}>
                        Subtotal                </Typography>
                    <Stack direction={'row'} component="span" sx={{ p: 2, }}>
                        <Typography variant='caption'>GHC </Typography>
                        <Typography fontWeight={900} variant='h6'>{subtotal}</Typography>
                    </Stack>

                </Stack>
            </Stack>
            <Stack spacing={1}>
                {prices.map(item => quantities[item.id] ? <CartCard key={item.id} product={item} dispatch={dispatch} quantities={quantities} HandleDelete={HandleDelete}/> : null)}
            </Stack>
        
            <Divider sx={{ mb: 8 }} />


        </>
    )
}

export default CartPage