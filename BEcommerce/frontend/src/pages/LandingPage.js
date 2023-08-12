import Dashboard from '../components/Dashboard'
import CategorySection from '../components/CategorySection'
import RecipesFlex from '../components/RecipesFlex'
import ProductGrid from '../components/ProductGrid'
import { Box } from '@mui/material'
import { useProdsNCats } from '../Hooks/FetchHooks'

function LandingPage() {
    const {products, categories} = useProdsNCats()
    console.log("products", categories?.data.results.slice(0,2));
    return (
        <Box mb={8}>
            <Dashboard />
            <CategorySection collections={categories?.data.results} />
            {categories?.data.results.slice(0,2).map(collection => <RecipesFlex key={collection.id} collection={collection} />)}
            <ProductGrid products={products} />
        </Box>
    )
}

export default LandingPage