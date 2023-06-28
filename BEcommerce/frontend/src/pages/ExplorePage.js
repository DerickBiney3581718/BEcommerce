import styled from '@emotion/styled';
import { useState } from 'react';
import { Search } from '@mui/icons-material';
import { Autocomplete, TextField, InputAdornment, lighten, darken, FormControl } from '@mui/material'
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ExploreList } from '../components/ExploreList';

const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.success.light,
    backgroundColor:
        theme.palette.mode === 'light'
            ? lighten(theme.palette.biney.gray, 0.85)
            : darken(theme.palette.success.light, 0.8),
}));

const GroupItems = styled('ul')({
    padding: 0,
});
function ExplorePage() {
    const [items, setItems] = useState([])
    const data = useLoaderData()
    console.log(data);
    const navigate = useNavigate()
    const allOptions = [];
    (function () {
        for (const [nom, arr] of Object.entries(data)) {
            arr.map(item => allOptions.push({ 'status': String(nom), ...item }))
        }
        data?.product.forEach(item => {
            allOptions.push({ 'status': 'brand', 'name': item.brand})
        }
        )

    })(data)

    console.log(allOptions);
    const findPage = (e) => {
        const item = allOptions[allOptions.findIndex(item => item.name === e.target.value)]
        if (item !== undefined && item.status !== 'brand') {
            console.log(item, item.id);
            navigate(`/${item.status}/${item.id}`, { state: item })
        }
        else {
            const brandList = allOptions.filter(item => item.brand === e.target.value)
            console.log(brandList)
            setItems([...brandList])
        }

    }
    // Handlers
    const HandleSubmit = (e) => { e.key === 'Enter' ? console.log(findPage(e)) : console.log(e.target.value) }

    return (
        <>
            <Autocomplete
                id="grouped-demo"
                options={allOptions}
                groupBy={(option) => option.status}
                getOptionLabel={(option) => option.name}
                sx={{ width: 0.9 }}
                renderInput={(params) => <TextField label='Search recipes,products...' InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }}  {...params} color='success' focused onKeyDown={(e) => HandleSubmit(e)} />}
                renderGroup={(params) => (
                    <li key={params.key}>
                        <GroupHeader>{params.group}</GroupHeader>
                        <GroupItems>{params.children}</GroupItems>
                    </li>
                )}
            />
            {items && <ExploreList items={items} />
            }
            {/* <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={allOptions.map((option) => { return option.name + ' ' + (option.brand || '') })}
                renderInput={(params) => <TextField placeholder='Search recipes,products...' InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }}  {...params} onSubmit={(e) => HandleSubmit(e)} />}
            /> */}


        </>
    )
}

export default ExplorePage

