import React from 'react'
import { Grid, IconButton, Stack, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import RecipeCard from '../components/RecipeCard'
import { Link, useLocation } from 'react-router-dom'


function ShowCatPage() {
    const location = useLocation()
    console.log(location.state);
    return (
        <div>
            <Stack sx={{ px: 0 }} zIndex={57} position={'sticky'} top={0} bgcolor={'white'} alignItems={'center'} direction={'row'}  >
                <Link to={`/`}> <IconButton> <ArrowBack /> </IconButton> </Link>
                <Typography px={8}>Recipes</Typography>
            </Stack>
            <Grid container spacing={2} justifyContent={'center'} pt={4}>

                {location?.state.map(recipe => {
                    return (<Grid item key={recipe?.id} >
                        <RecipeCard recipe={recipe} ></RecipeCard>
                    </Grid>)
                })}


            </Grid>

        </div>
    )
}

export default ShowCatPage