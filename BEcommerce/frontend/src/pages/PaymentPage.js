import React,{useState} from 'react'
import { Radio, TextField, Button, FormControl, RadioGroup, FormControlLabel, FormLabel, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import { Edit } from '@mui/icons-material'

function PaymentPage() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Payment method</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Mobile Money"
          name="radio-buttons-group"
        >
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <FormControlLabel value="Mobile Money" control={<Radio />} label="Mobile Money" />
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <FormControlLabel value="Debit Card" control={<Radio />} label="Debit Card" />
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion >
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default PaymentPage
//   < Accordion >
// <AccordionSummary
//   // expandIcon={<ExpandMoreIcon />}
//   aria-controls="panel1a-content"
//   id="panel1a-header"
// >
// <FormControlLabel value="Debit Card" control={<Radio />} label="Debit Card" />
// </AccordionSummary>
// <AccordionDetails>
//   <Typography>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//     malesuada lacus ex, sit amet blandit leo lobortis eget.
//   </Typography>
// </AccordionDetails>
// </ >