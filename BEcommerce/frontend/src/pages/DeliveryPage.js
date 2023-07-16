import React from 'react'
import { TextField, IconButton, Typography, Stack } from '@mui/material'
import { Edit } from '@mui/icons-material'



function success(pos) {
    const crd = pos.coords;

    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

const location = navigator.geolocation.getCurrentPosition(success, error);
function DeliveryPage() {
    return (
        <>
            <Typography sx={{ mt: 2, mb: 1 }}> Delivery </Typography>
            <TextField variant='outlined' defaultValue={`Ashaiman`} />
            <Stack direction={'row'} alignItems={'center'}>
                <IconButton variant='outlined' size='small'> <Edit />  </IconButton>
                <Typography variant=''>Change destination</Typography></Stack>

        </>
    )
}

export default DeliveryPage