import { useEffect, useState } from 'react'
import { Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import { ArrowBack, CheckBox } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import FilterSection from '../components/FilterSection'

const CollectionPage = () => {
  const keyArr = ['all', 'fine', 'finer', 'finest', 'super', 'awesome', 'nice', 'cool']
  const [recipes, setRecipes] = useState([])
  const [keywords, setKeywords] = useState([...keyArr])

  const location = useLocation()
  const endpoint = `http://localhost:8000/collections/${location.state.id}/recipes`

  useEffect(() => {
    // fetch data
    const fetchUserData = async () => {
      const recipesData = await (await fetch(endpoint)).json()
      setRecipes(recipesData)
    }
    fetchUserData()
  }, []);
  return (
    <div>
      <Stack sx={{ px: 0 }} zIndex={57} position={'sticky'} top={0} bgcolor={'white'} alignItems={'center'} direction={'row'}  >
        <Link to={`/`}> <IconButton> <ArrowBack /> </IconButton> </Link>
        <Typography px={8}>{location.state.name}</Typography>
      </Stack>
      <FilterSection keyArr={keyArr} keywords={keywords} setKeywords={setKeywords} />
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