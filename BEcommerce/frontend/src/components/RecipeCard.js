import { useState } from 'react'
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
// import RecipePage from '../pages/RecipePage';
// import {cardImage} from 'frontend/public/images/Turkey Tenderloin Is a Quick Solution to a Small Thanksgiving.jpeg'

function RecipeCard({ recipe }) {
    // const [fullPage, setFullPage] = useState(false)
    const navigate = useNavigate()
    const HandleClick = () => {
        navigate(`/recipe/${recipe?.id}`, { state: recipe })

    }
    return (<>
        <Card sx={{ width: 160, height: 160 }} onClick={HandleClick}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="130"
                border-radius='5'
                image={recipe?.photo_url}
            />
            <Typography component={'div'} textAlign={'center'} >
                {recipe?.name}
            </Typography >

        </Card>
    </>

    )
}

export default RecipeCard
