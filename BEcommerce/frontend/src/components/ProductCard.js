import { useState } from 'react'
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function ProductCard({ prod }) {
    // const [fullPage, setFullPage] = useState(false)
    const navigate = useNavigate()
    const HandleClick = () => {
        navigate(`product/${prod?.id}`, { state: prod })
    }

    return (<>
        <Card sx={{ width: 180, height: 190 }} onClick={HandleClick}>
            <CardMedia
                component="img"
                alt={prod.name + ' ' + prod.brand}
                height="165"
                border-radius='10'
                image={prod?.photo_url}
            />
            <Typography component={'div'} textAlign={'center'} >
                {prod?.brand + ' ' + prod?.name}
            </Typography >

        </Card>
    </>

    )
}

export default ProductCard
