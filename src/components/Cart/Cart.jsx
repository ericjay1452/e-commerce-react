import React from 'react'
import { Container, Typography, Button, Grid } from '@mui/material'
import {EmptyCart, FilledCart } from "../../components"

const Cart = () => {
    const isCartEmpty = true;
  return (
    <div>
        <Container>
            <Typography variant = "h5" >Your Shopping Cart</Typography>
            { isCartEmpty ? <EmptyCart /> : < FilledCart/>} 
        </Container>
    </div>
  )
}

export default Cart