import { Container, Stack } from '@mui/material'
import React from 'react'

function Layout({ children }) {
  return (
    <Stack sx={{height:1} } >{children}</Stack>
  )
}

export default Layout