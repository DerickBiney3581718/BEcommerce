import { Search, SortRounded } from '@mui/icons-material'
import { Typography, Box, Stack, TextField, InputAdornment, Button, List } from '@mui/material'
import React from 'react'
import OrderCard from '../components/OrderCard'
import { useLoaderData } from 'react-router-dom'
function OrdersPage() {
    const data = useLoaderData()

    // console.log(data);
    return (
        <>
            <Box zIndex={222} position={'sticky'} top={0} bgcolor={'white'}> <Typography component={'div'} variant='h4' p={2}>Your Orders</Typography>
                <Stack direction={'row'} justifyContent={'space-evenly'} >
                    <TextField InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }} variant='outlined' />
                    <Button startIcon={<SortRounded />} variant='outlined' size='small'> Sort </Button>

                </Stack>
            </Box>

            <List>
                {data.map(item => <OrderCard cart={item} key={item.id} />)}
            </List>
        </>
    )
}



export default OrdersPage