import { Stack } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import { useCart } from '../CartContext'
function Layout({ children }) {
  const cart = useCart();
  let nomb = 0
  nomb = Object.entries(cart?.product_list).reduce((acc, [i, val]) => acc + val, 0)
  console.log(nomb, "cart in the layout --> ", cart.product_list);

  return (
    <Stack sx={{ height: 1 }} >
      {children}
      <Footer badge={nomb} />
    </Stack>
  )
}
export default Layout