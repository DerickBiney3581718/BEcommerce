import React, { useState, useEffect } from 'react'
import Dashboard from '../components/Dashboard'
import CategorySection from '../components/CategorySection'
import RecipesFlex from '../components/RecipesFlex'
import { useLoaderData } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import { Box } from '@mui/material'

function LandingPage() {
    const data = useLoaderData()
    // console.log(collections);
    return (
        <Box mb={8}>
            <Dashboard />
            <CategorySection collections={data.collections} />
            {data.collections?.map(collection => <RecipesFlex key={collection.id} collection={collection} />)}
            <ProductGrid prodArr={data.products} />
        </Box>
    )
}

export default LandingPage