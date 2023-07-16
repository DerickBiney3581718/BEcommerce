import axios from "axios";
import { useEffect, useState } from "react";

export function useProductData ({cart}){
    const productsEndpoint = `http://localhost:8000/products/${cart?.products.join('_')}`
const [productsData, setproductsData] = useState([])
    useEffect(() => {
        const fetchUserData = async (ignore) => {
            if (!ignore) {
                const productsData = (await axios(productsEndpoint)).data
                setproductsData(productsData)
            }
        }
        let ignore = false;
        fetchUserData(ignore).then(data => data);
        return () => {
            ignore = true;
        }
    }, [productsEndpoint])
    return productsData;
}