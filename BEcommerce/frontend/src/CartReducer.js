export default function CartReducer(cart, action) {
    switch (action.type) {
        case "added":
            {
                const newQuantities = {
                    ...cart,
                    product_list: {
                        ...cart.product_list,
                        [action.id]: 1
                    }
                }
                return { ...newQuantities }
            }
        case 'deleted':
            {
                const newQuantities = {
                    ...cart,
                    product_list: {
                        ...cart.product_list,
                        [action.id]: 0
                    }
                }
                return { ...newQuantities }
            }
        case 'increase_quantity':
            {
                const newQuantities = {
                    ...cart,
                    product_list: {
                        ...cart.product_list,
                        [action.id]: cart.product_list[action.id] + 1
                    }
                }
                return {
                    ...newQuantities,
                }
            }
        case 'decrease_quantity':
            {
                const newQuantities = {
                    ...cart,
                    product_list: {
                        ...cart.product_list,
                        [action.id]: cart.product_list[action.id]--
                    }
                }
                return { ...newQuantities }
            }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }

}
