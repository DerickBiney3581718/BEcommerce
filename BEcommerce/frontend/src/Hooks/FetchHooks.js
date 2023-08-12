import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";
const cartEndpoint = 'http://localhost:8000/orders/current/'
const categoriesEndpoint = 'http://localhost:8000/collections/'
const productsEndpoint = 'http://localhost:8000/products/'
const recipesEndpoint = 'http://localhost:8000/recipes/'

////////////////////////////////////////////
function fetchLastCart() {
  return axios(cartEndpoint);
}
export const useLastCart = () => {
  return useQuery('current cart', fetchLastCart, {
    cacheTime: 1000 * 60 * 60,
  })
}
///////////////////////////////////
function fetchProducts() {
  return axios(productsEndpoint);
}
function fetchCategories() {
  return axios(categoriesEndpoint);
}
export const useProdsNCats = () => {
  const { data: products } = useQuery('products', fetchProducts)
  const { data: categories } = useQuery('categories', fetchCategories)
  return { products, categories }
}
/////////////////////
function fetchProductsPoco({ pageParam = 1 }) {
  return axios(`${productsEndpoint}?page=${pageParam}`)
}
export const useProductsPoco = () => {
  return useInfiniteQuery(['products'], fetchProductsPoco, {
    getNextPageParam: (lastPage, pages) => { 
      return lastPage.data.next?.split('=').pop()}
  })
}
////////////////////////////
function fetchRecipe() {
  return axios(recipesEndpoint);
}
export const useAll = () => {
  const { data: products } = useQuery('products', fetchProducts)
  const { data: categories } = useQuery('categories', fetchCategories)
  const { data: recipes } = useQuery('recipes', fetchRecipe)
  return { products, categories, recipes }
}
////////
function fetchSomeProducts(cart) {
  return axios(`${productsEndpoint}${cart?.products?.join('_')}`)
}
export const useSomeProducts = ({ cart, setPrices }) => {
  const onSuccess = (data) => {
    setPrices([...data?.data.results])
    console.log(data.data.results);
  }
  return useQuery(['products', cart?.products?.join('_')], () => fetchSomeProducts(cart), {
    onSuccess: onSuccess
  })
}
///////////
const historyEndpoint = 'http://localhost:8000/orders/'

function fetchOrders() {
  return axios(historyEndpoint)
}
export const useAllOrders = () => {
  return useQuery('orders', fetchOrders, {
    cacheTime: 1000 * 60 * 60
  })
}
//////////////////////////


export const useCatRecipes = ({ location, setRecipes }) => {
  function fetchCatRecipes() {
    const CatRecipesEndpoint = `http://localhost:8000/collections/${location?.state?.id}/recipes`
    return axios(CatRecipesEndpoint)
  }
  return useQuery(['category', location?.state?.id], fetchCatRecipes, {
    onSuccess: (data) => {
      setRecipes(data?.data.results)
      console.log(
        "cat data", data
      );
    }
  })
}
//////////////
export const useRecipeProds = ({ recipe, setProducts, quantities, setAdd, productsData }) => {
  function fetchRecipeProds() {
    const CatRecipesEndpoint = `http://localhost:8000/recipes/${recipe?.id}/products`
    return axios(CatRecipesEndpoint)
  }
  
  return useQuery(['category', recipe?.id], fetchRecipeProds, {
    onSuccess: (data) => {
      setProducts(data?.data.results)
      data?.data?.results.forEach(item => { quantities[item.id] = 0 })
      setAdd({ ...quantities })
      console.log("quantities rq", quantities);
    }
  })
}









///////////////////////
export const useColRecipes = ({ collection, setRecipes }) => {
  function fetchCatRecipes() {
    const CatRecipesEndpoint = `http://localhost:8000/collections/${collection.id}/recipes`
    return axios(CatRecipesEndpoint)
  }
    return useQuery(['category', collection.id], fetchCatRecipes, {
      onSuccess: (data) => {
        setRecipes(data.data.results)
        // console.log(
        //   "collection recipes", data
        // );
      }
    })
  

}