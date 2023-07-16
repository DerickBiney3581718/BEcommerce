import { Box, Chip, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import RecipeCard from './RecipeCard'
import { useNavigate } from 'react-router-dom'
import ProductCard from './ProductCard'

const OtherSection = ({ items, children }) => {
    const navigate = useNavigate()
    const HandleClick = () => {
        navigate('show-all', { state: items })
    }

    return (
        <>

            <Stack direction={'row'} justifyContent={'space-between'} py={2} >
                <Typography variant='h6' fontWeight={600} >{children}</Typography>
                <Chip sx={{ bgcolor: 'primary.light' }} label='See all' onClick={HandleClick} />
            </Stack>
            <Stack direction={'row'} spacing={1} sx={{ overflowY: 'hidden', height: 200, overflowX: 'scroll', scrollbarWidth: 'none' }}>
                {items?.map(item => {
                    return (<Grid item key={item.id}  >
                        <ProductCard prod={item}  ></ProductCard>
                    </Grid>)
                })}

            </Stack>

            <Divider />
        </>
    )
}

export default OtherSection