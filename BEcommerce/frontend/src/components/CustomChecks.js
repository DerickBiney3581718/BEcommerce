import React from 'react'
import { FormGroup, FormControlLabel, Checkbox, Box } from '@mui/material'
import { useCartDispatch } from '../CartContext';

const CustomChecks = ({ products, setAdd, add }) => {
    const dispatch = useCartDispatch()
    const HandleChange = (e, item) => {
        console.log(e.target.checked, "item id", item.id);
        e.target.checked ? dispatch({
            type: "added",
            id: item.id
        }) : dispatch({ type: "deleted", id: item.id })
        e.target.id = item.id
        setAdd({ ...add, [e.target.id]: e.target.checked ? 1 : 0 })
    }
    return (
        <div>
            <FormGroup>
                {products.map((item) => {
                    // console.log('item',item);
                    return (
                        <Box key={item.id}>
                            <FormControlLabel
                                control={<Checkbox onChange={(e) => HandleChange(e, item)} />} label={item.name} disabled={!item.available} key={item.id} />
                            {/* {add[item.id] && <Quantitizer quantity={quantities} dispatch={dispatch} product={product} HandleDelete={HandleDelete} />} */}
                        </Box>

                    )
                }
                )}

            </FormGroup></div>
    )
}

export default CustomChecks