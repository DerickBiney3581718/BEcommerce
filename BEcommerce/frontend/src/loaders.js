
const categoriesEndpoint = 'http://localhost:8000/collections/'
const productsEndpoint = 'http://localhost:8000/products/'

export const fetchCategoriesData = async () => {
    const collections = await (await fetch(categoriesEndpoint)).json()
    const products = await (await fetch(productsEndpoint)).json()
    return { 'collections': collections, 'products': products }

}

// const productsOfRecipeEndpoint = 
// export const fetchProductsofRecipe = async()=>{
//     const products = await(await fetch()).json()
// }