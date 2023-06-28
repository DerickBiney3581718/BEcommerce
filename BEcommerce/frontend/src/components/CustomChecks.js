import React from 'react'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import Quantitizer from './Quantitizer';

const CustomChecks = ({ items, setAdd, add }) => {
    console.log(items);
    const HandleChange = (e, item) => {
        console.log(item, e);
        e.target.id = item.id
        setAdd({ ...add, [e.target.id]: e.target.checked })

    }
    return (
        <div>
            <FormGroup>
                {items.map((item) => {
                    // console.log('item',item);
                    return (
                        <>
                            <FormControlLabel
                                control={<Checkbox onChange={(e) => HandleChange(e, item)} />} label={item.name} disabled={!item.available} key={item.id} />
                            {/* {add[item.id] && <Quantitizer quantity={quantities} dispatch={dispatch} product={product} HandleDelete={HandleDelete} />} */}
                        </>

                    )
                }
                )}

            </FormGroup></div>
    )
}

export default CustomChecks