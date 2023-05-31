import React from 'react'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

const CustomChecks = ({ items }) => {
    return (
        <div>
            <FormGroup>
                {items.map(item => <FormControlLabel control={<Checkbox />} label={item.name} disabled={!item.available} key={item.id} />
                )}

            </FormGroup></div>
    )
}

export default CustomChecks