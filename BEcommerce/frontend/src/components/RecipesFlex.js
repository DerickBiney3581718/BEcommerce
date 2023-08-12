import { useState } from 'react'
import { Grid, Stack, Box, Typography, Chip } from '@mui/material'
import RecipeCard from './RecipeCard'
import { useNavigate } from 'react-router-dom'
import { useColRecipes } from '../Hooks/FetchHooks'

function RecipesFlex({ collection }) {
    const [recipes, setRecipes] = useState([])
    const navigate = useNavigate()
    const HandleClick = () => {
        navigate('show-all-recipes', { state: recipes })
    }
    useColRecipes({collection, setRecipes})

    return (
        <> 
            <Box>
                <Stack direction={'row'} justifyContent={'space-between'} paddingBottom={2} >
                    <Typography>{collection?.name}</Typography>
                    <Chip sx={{ bgcolor: 'primary.light' }} label='See all' onClick={HandleClick} />
                </Stack>
                <Stack direction={'row'} spacing={1} sx={{ overflowY: 'hidden', height: 200, overflowX: 'scroll', scrollbarWidth: 'none' }}>
                    {recipes?.map(recipe => {
                        return (<Grid item key={recipe.id}  >
                            <RecipeCard recipe={recipe}  ></RecipeCard>
                        </Grid>)
                    })}

                </Stack>    </Box>


        </>
    )
}

export default RecipesFlex
