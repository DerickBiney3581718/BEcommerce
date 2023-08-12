import axios from "axios"
import { useMutation } from "react-query"


export const useMutateCart = (cart) => {
    const updateCartEndpoint = `http://localhost:8000/orders/${cart?.id}/`
    function updateCart(quantities) {
        axios.patch(updateCartEndpoint, { 'product_list': quantities })
    }
    return useMutation({
        mutationFn:updateCart, 
        onMutate: (variables) => {
            // ?A mutation is about to happen!?
        
            // TODO Optionally return a context containing data to use when for example rolling back
            return { id: 1 }
          },
          onError: (error, variables, context) => {
            //! An error happened!
            console.log(`rolling back optimistic update with id ${context.id}`)
          },
          onSuccess: (data, variables, context) => {
            //* Boom baby!
            console.log(`${data}`);
          },
          onSettled: (data, error, variables, context) => {
            // // param Error or success... doesn't matter!
          },    })
}