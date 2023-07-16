import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

function ProductsPopup({ title, children, openDialog, setOpenDialog }) {
  return (
    <Dialog open={openDialog} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {children}
        <Button onClick={() => setOpenDialog(false)}> cancel</Button>
        <Button onClick={() => setOpenDialog(false)}>confirm</Button>

      </DialogContent>
    </Dialog>
  )
}

export default ProductsPopup