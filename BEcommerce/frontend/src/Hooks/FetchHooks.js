import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";
const cartEndpoint = 'http://localhost:8000/orders/current/'
const categoriesEndpoint = 'http://localhost:8000/collections/'
const productsEndpoint = 'http://localhost:8000/products'
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
function fetchProductsPoco({pageParam = 0}){
return axios(`${productsEndpoint}?_limit=2&_page=${pageParam}`)
}
export const useProductsPoco = ()=>{
 return  useInfiniteQuery(['colors'], fetchProductsPoco, {
    getNextPageParam: (lastPage, pages)=> lastPage.nextCursor
  })
}