import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from '@mui/material'
import React from 'react'

const CheckAlert = ({CheckAlert, setCheckAlert,title}) => {

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
    return (
        <Dialog open={CheckAlert} onClose={() => setCheckAlert(false)}
        TransitionComponent={Transition}
        keepMounted fullWidth>
            <DialogContent>
                {title}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setCheckAlert(false)}>confirm</Button>
            </DialogActions>
        </Dialog>)
}

export default CheckAlert