// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
import { Typography } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

export default function ProductGrid({ prodArr }) {

    return (
        <Box sx={{ flexGrow: 1,my:2 }}>
            <Typography py={2} >Discover products</Typography>
            <Grid container rowSpacing={2}>
                {prodArr.map(prod => {
                    return (<Grid item xs key={prod.id}>
                        <ProductCard prod={prod} />
                    </Grid>)
                })}

            </Grid>
        </Box>
    );
}

