import Dashboard from '../components/Dashboard'
import CategorySection from '../components/CategorySection'
import RecipesFlex from '../components/RecipesFlex'
import ProductGrid from '../components/ProductGrid'
import { Box } from '@mui/material'
import { useProdsNCats } from '../Hooks/FetchHooks'

function LandingPage() {
    const {products, categories} = useProdsNCats()
    console.log("products from rq ", products,"\n categories", categories);
    return (
        <Box mb={8}>
            <Dashboard />
            <CategorySection collections={categories?.data} />
            {categories?.data.slice(0,2).map(collection => <RecipesFlex key={collection.id} collection={collection} />)}
            <ProductGrid prodArr={products?.data} />
        </Box>
    )
}

export default LandingPage