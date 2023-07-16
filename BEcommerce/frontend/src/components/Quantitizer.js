import { Add, Remove } from '@mui/icons-material'
import { Button, ButtonGroup, IconButton, Stack } from '@mui/material'
import React from 'react'
import { useCart, useCartDispatch } from '../CartContext'

export default function Quantitizer({ quantity, product }) {
    const dispatch = useCartDispatch()
    const cart = useCart()
    // console.log("quantity in q ",quantity, "\ncart in q", cart.product_list);
    const HandleRemove = () => {
        quantity[product.id] ? dispatch({ type: 'decrease_quantity', id: product.id }) : dispatch({ type: "deleted", id: product.id })
    }
    const HandleAdd = () => {
        dispatch({ type: 'increase_quantity', id: product.id })
    }
    return (
        <Stack direction={'row'} px={0} mx={0}>
            <IconButton sx={{ paddingLeft: 0 }} onClick={HandleAdd}>
                <Add />
            </IconButton>
            <Button color={'success'}>{cart.product_list[product.id] }</Button>
            <IconButton color='success.light' onClick={HandleRemove}>
                <Remove />
            </IconButton>
        </Stack>
    )
}
