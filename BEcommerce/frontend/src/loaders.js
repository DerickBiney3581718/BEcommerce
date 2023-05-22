
const categoriesEndpoint = 'http://localhost:8000/collections/'

export const fetchCategoriesData = async () => {
    const collections = await (await fetch(categoriesEndpoint)).json()
    return collections

}