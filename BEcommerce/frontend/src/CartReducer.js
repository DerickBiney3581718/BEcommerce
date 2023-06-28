export default function CartReducer(quantities, action) {
    switch (action.type) {
        case 'deleted':
            {
                const newQuantities = { ...quantities }
                newQuantities[action.id] = 0
                return { ...newQuantities }

            }
        case 'increase_quantity':
            {
                const newQuantities = { ...quantities }
                newQuantities[action.id] += 1
                return { ...newQuantities }
            }
        case 'decrease_quantity':
            {
                const newQuantities = { ...quantities }
                newQuantities[action.id] -= 1
                return { ...newQuantities }
            }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }

}
