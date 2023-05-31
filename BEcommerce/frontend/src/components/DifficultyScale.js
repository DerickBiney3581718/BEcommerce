import { Box, Paper, Typography, Stack } from '@mui/material'
import React from 'react'

export const DifficultyScale = ({ item }) => {
    return (
        <div>
            <Typography variant='body' lineHeight={2} fontWeight={600}> Difficulty </Typography>
            <Paper elevation={0}  >
                <Stack direction={'row'} sx={{ width: .5 }} alignItems={'flex-end'} px={2} mb={2} py={3} border={'.1px solid #909bab'} borderRadius={3}>
                    <Typography variant='h4' color={'success.light'}>{item}</Typography>
                    <Typography variant='h6' color={'biney.gray'} >/5</Typography>
                </Stack>
            </Paper>
        </div>
    )
}
