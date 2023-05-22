import { Grid, Typography, Stack, Box } from '@mui/material'
import React from 'react'

function FormRow() {
    return (
        <Stack direction={'row'} justifyContent={'space-evenly'} py={2}>
            <Typography variant='body' component={'div'} sx={{ paddingLeft: .5, bgcolor: 'gray', p: 1, borderRadius: 1 , width:0.15}}>{'Blender blender  bends'}</Typography>
            <Typography variant='subtitle2' component={'div'} sx={{ paddingLeft: .5, bgcolor: 'gray', p: 2, borderRadius: 1,}} >{2} </Typography>
            <Typography variant='subtitle2' component={'div'} sx={{ paddingLeft: .5, bgcolor: 'gray', p: 2, borderRadius: 1, }}>{450}</Typography>
            <Typography variant='subtitle2' component={'div'} sx={{ paddingLeft: .5, bgcolor: 'gray', p: 2, borderRadius: 1, }}>{2*450}</Typography>
        </Stack>
    );
}

function Receipt() {
    return (
        <div>
            <Stack direction={'row'} justifyContent={'space-evenly'} py={2}>
                <Typography  component={'div'}  sx={{ borderLeft: '2px dotted red', paddingLeft: .5, height: 1, lineHeight: 1,px:2 }}>Product</Typography>
                <Typography component={'div'} sx={{ borderLeft: '2px dotted blue', paddingLeft: .5, height: 1, lineHeight: 1,px:2 }} >Quantity</Typography>
                <Typography component={'div'} sx={{ borderLeft: '2px dotted yellow', paddingLeft: .5, height: 1, lineHeight: 1 ,px:2}}>Price</Typography>
                <Typography component={'div'} sx={{ borderLeft: '2px dotted green', paddingLeft: .5, height: 1, lineHeight: 1 ,px:2}}>Total</Typography>

            </Stack>
            <Stack>
                <FormRow />
                <FormRow />
                <FormRow />
                <FormRow />
                <FormRow />

            </Stack>

        </div>
    )
}

export default Receipt