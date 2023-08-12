import { useState } from 'react'
import { Grid, IconButton, Stack, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import { useCatRecipes } from '../Hooks/FetchHooks'

const CollectionPage = () => {
  const [recipes, setRecipes] = useState([])
  const location = useLocation()
  useCatRecipes({location,setRecipes })

  return (
    <div>
      <Stack sx={{ px: 0 }} zIndex={57} position={'sticky'} top={0} bgcolor={'white'} alignItems={'center'} direction={'row'}  >
        <Link to={`/`}> <IconButton> <ArrowBack /> </IconButton> </Link>
        <Typography px={8}>{location.state.name}</Typography>
      </Stack>
      <Grid container spacing={2} justifyContent={'center'} pt={4}>
        {recipes?.map(recipe => {
          return (<Grid item key={recipe.id}  >
            <RecipeCard recipe={recipe}  ></RecipeCard>
          </Grid>)
        })}



      </Grid>

    </div>
  )
}
export default CollectionPage