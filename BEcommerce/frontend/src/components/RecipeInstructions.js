import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { IngList } from './IngList'

export default function RecipeInstructions({items}) {
  return (
    <Stack px={2}>
    <Box>
        <Typography variant='h6' fontWeight={600} >Instructions</Typography>
        <Box color={'biney.gray'} lineHeight={2}>
            <IngList items={items}/>
        </Box>
    </Box>
</Stack>
 )
}
