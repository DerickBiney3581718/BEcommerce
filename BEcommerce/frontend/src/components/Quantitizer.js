import { Add, Remove } from '@mui/icons-material'
import { Button, ButtonGroup, IconButton, Stack } from '@mui/material'
import React from 'react'

export default function Quantitizer({ quantity, dispatch, product, HandleDelete }) {

    const HandleRemove = () => {
        quantity[product.id] ? dispatch({type:'decrease_quantity',id:product.id}) : HandleDelete(product)
    }
    const HandleAdd = () => {
        dispatch({type:'increase_quantity',id: product.id})
    }
    return (
        <Stack direction={'row'} px={0} mx={0}>
            <IconButton sx={{ paddingLeft: 0 }} onClick={HandleAdd}>
                <Add />
            </IconButton>
            <Button color={'success'}>{quantity[product.id]}</Button>
            <IconButton color='success.light' onClick={HandleRemove}>
                <Remove />
            </IconButton>
        </Stack>
    )
}
