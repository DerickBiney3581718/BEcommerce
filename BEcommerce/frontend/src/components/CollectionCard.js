import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
// import {cardImage} from 'frontend/public/images/Turkey Tenderloin Is a Quick Solution to a Small Thanksgiving.jpeg'

function CollectionCard({  collection}) {
    const [fullPage, setFullPage] = useState(false)
    const navigate = useNavigate()
    const HandleClick = () => {
        navigate(`/collection/${collection?.id}`, { state: collection })

    }
    // console.log(collection);
    return (<>
        <Card sx={{ width: 160, height: 160 }} onClick={HandleClick} >
            <CardMedia
                component="img"
                alt={collection.name}
                height="130"
                border-radius='5'
                image={collection.photo_url}    />
            {/* <CardContent > */}
            <Typography component={'div'} textAlign={'center'} >
                {collection?.name}
            </Typography >

        </Card>
    </>

    )
}

export default CollectionCard
