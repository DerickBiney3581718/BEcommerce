import { useState, useEffect } from 'react'
import { Grid, Stack, Box, Typography, Chip } from '@mui/material'
import RecipeCard from './RecipeCard'
import ShowCatPage from '../pages/ShowCatPage'
import { useNavigate } from 'react-router-dom'

function RecipesFlex({ collection }) {
    const [recipes, setRecipes] = useState([])
    const navigate = useNavigate()
    const HandleClick = () => {
        navigate('show-all', { state: recipes })
      }
    const endpoint = `http://localhost:8000/collections/${collection?.id}/recipes`

    useEffect(() => {
        // fetch data
        const fetchUserData = async () => {
            const recipesData = await (await fetch(endpoint)).json()
            setRecipes(recipesData)
        }
        fetchUserData()
    }, []);

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
