
import axios from "axios"
const categoriesEndpoint = 'http://localhost:8000/collections/'
const productsEndpoint = 'http://localhost:8000/products/'
const recipesEndpoint = 'http://localhost:8000/recipes/'
const historyEndpoint = 'http://localhost:8000/orders/'
const cartEndpoint = 'http://localhost:8000/orders/current/'

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
    return { 'collection': collections, 'product': product, 'recipe': recipe }
}

export const AllOrders = async ()=>{
    const orders = await(await fetch(historyEndpoint)).json()
    return orders
}
export const cartOrder = async ()=>{
    const cart = (await axios.get(cartEndpoint)).data.results
    // console.log(cart);
    return cart
}