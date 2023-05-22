import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import RecipePage from '../pages/RecipePage';
// import {cardImage} from 'frontend/public/images/Turkey Tenderloin Is a Quick Solution to a Small Thanksgiving.jpeg'

function CollectionCard({  collection}) {
    const [fullPage, setFullPage] = useState(false)
    const navigate = useNavigate()
    // const HandleClick = () => {
    //     navigate(`recipe/${collection?.name}`, { state: collection })

    // }
    return (<>
        <Card sx={{ width: 160, height: 160 }} >
            <CardMedia
                component="img"
                alt="green iguana"
                height="130"
                border-radius='5'
                image={'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80'}

            />
            {/* <CardContent > */}
            <Typography component={'div'} textAlign={'center'} >
                {collection?.name}
            </Typography >
            {/* <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography> */}
            {/* </CardContent> */}
            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    </>

    )
}

export default CollectionCard
