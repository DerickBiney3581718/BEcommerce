
const categoriesEndpoint = 'http://localhost:8000/collections/'
const productsEndpoint = 'http://localhost:8000/products/'
const recipesEndpoint = 'http://localhost:8000/recipes/'
export const fetchCategoriesData = async () => {
    const collections = await (await fetch(categoriesEndpoint)).json()
    const products = await (await fetch(productsEndpoint)).json()
    return { 'collections': collections, 'products': products }

}

// const productsOfRecipeEndpoint = 
export const AllOnBoard = async () => {
    const collections = await (await fetch(categoriesEndpoint)).json()
    const product = await (await fetch(productsEndpoint)).json()
    const recipe = await (await fetch(recipesEndpoint)).json()
    return { 'collections': collections, 'product': product, 'recipe': recipe }
}