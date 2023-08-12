// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
// import { Typography } from '@mui/material';
import { useProductsPoco } from '../Hooks/FetchHooks';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

export default function ProductGrid() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useProductsPoco()
  console.log(data, "\nhas next page",hasNextPage )

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: {error.message}</p>
  ) : (
    <Box sx={{ flexGrow: 1, my: 2 }}>
      {data.pages.map((group, i) => (
        <Grid container rowSpacing={2} key={i}>
          {group.data.results.map((prod) => (
            <Grid item xs key={prod.id}>
              <ProductCard prod={prod} />
            </Grid>
          ))}
        </Grid>
      ))}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </Box>)
}