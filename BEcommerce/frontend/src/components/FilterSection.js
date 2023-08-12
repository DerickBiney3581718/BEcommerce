import { ToggleButton, ToggleButtonGroup } from '@mui/material';
const FilterSection = ({ keyArr, keywords, setKeywords }) => {
    // console.log(keywords)
    const handleKeywords = (event, newFormats) => {
        setKeywords(newFormats);
    };

    return (

        <ToggleButtonGroup
            color='success'
            value={keywords}
            onChange={handleKeywords}
            aria-label="text formatting"
            sx={{ width: 1, overflowX: 'scroll' }}
        >
            {keyArr.map(item => {
                if (item === 'all') { return <ToggleButton value={item} aria-label={item} sx={{ margin: 1 }} key={item}>{item}</ToggleButton> }
                else { return <ToggleButton value={item} aria-label={item} sx={{ margin: 1 }} key={item}  >{item}</ToggleButton> }
            })}
        </ToggleButtonGroup>
    );
}

export default FilterSection