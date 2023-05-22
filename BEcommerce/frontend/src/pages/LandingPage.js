import React, { useState, useEffect } from 'react'
import Dashboard from '../components/Dashboard'
import CategorySection from '../components/CategorySection'
import RecipesFlex from '../components/RecipesFlex'
import { useLoaderData } from 'react-router-dom'

function LandingPage() {
    const collections  = useLoaderData()
    
    return (
        <>
            <Dashboard />
            <CategorySection collections={collections} />
            {collections?.map(collection => <RecipesFlex key={collection.id} collection={collection} />)}

        </>
    )
}

export default LandingPage