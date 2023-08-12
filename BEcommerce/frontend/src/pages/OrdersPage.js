import { Search, SortRounded } from '@mui/icons-material'
import { Typography, Box, Stack, TextField, InputAdornment, Button, List } from '@mui/material'
import OrderCard from '../components/OrderCard'
import { useAllOrders } from '../Hooks/FetchHooks'

/////////////////////////////////////////////////////////////////
function OrdersPage() {
    const {data: orders} = useAllOrders()  //?query orders?
    console.log(orders?.data.results);  
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
                {orders?.data.results.map(item => <OrderCard cart={item} key={item.id} />)}
            </List>
        </>
    )
}



export default OrdersPage