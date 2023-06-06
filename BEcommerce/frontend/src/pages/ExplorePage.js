import styled from '@emotion/styled';
import { Search } from '@mui/icons-material';
import { Autocomplete, TextField, InputAdornment, lighten, darken, FormControl } from '@mui/material'
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';

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
    const data = useLoaderData()
   const navigate =  useNavigate()
    const allOptions = [];
    (function () {
        for (const [nom, arr] of Object.entries(data)) {
            arr.map(item => allOptions.push({ 'status': String(nom), ...item }))
        }
    })(data)

    console.log(allOptions);
    const findPage = (e) => {

     const id =  allOptions.findIndex(item => item.name === e.target.value)

        navigate(`/${allOptions[id].status}/${allOptions[id].id}`, {state:allOptions[id]})

    }
    // Handlers
    const HandleSubmit = (e) => { e.key === 'Enter' ? console.log(findPage(e)) : console.log(e) }

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

