import { Add,Remove } from '@mui/icons-material'
import { Button, ButtonGroup, IconButton, Stack } from '@mui/material'
import React from 'react'

export default function Quantitizer({ quantity }) {

    return (
        <Stack direction={'row'} px={0}  mx={0}>
            <IconButton sx={{paddingLeft:0}}>
                <Add/>
            </IconButton>
        <Button color={'success'}>{quantity}</Button>
            <IconButton color='success.light'>
                <Remove/>
            </IconButton>
        </Stack>
    )
}
