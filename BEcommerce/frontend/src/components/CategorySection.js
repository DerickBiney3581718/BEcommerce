import { Box, Chip, Stack, Typography, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CollectionCard from './CollectionCard'

function CategorySection({ collections }) {

  const navigate = useNavigate()
  const HandleClick = () => {
    navigate('show-all', { state: collections })
  }

  return (
    <Box>
      <Stack direction={'row'} justifyContent={'space-between'} paddingBottom={2} >
        <Typography>Recipe Collections</Typography>
        <Chip sx={{ bgcolor: 'primary.light' }} label='See all' onClick={HandleClick} />
      </Stack>
      <Stack direction={'row'} spacing={1} sx={{ overflowY: 'hidden', height: 200, overflowX: 'scroll', scrollbarWidth: 'none' }}>
        {collections?.map(collection => {
          return (<Grid item key={collection?.id} >
            <CollectionCard collection={collection} ></CollectionCard>
          </Grid>)

        })}

      </Stack>
    </Box>

  )
}

export default CategorySection