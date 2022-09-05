import React from 'react'
import { Container, Typography, Button, Grid } from '@mui/material'
import {EmptyCart, FilledCart } from "../../components"




const Cart = ({cart}) => {
    if(!cart?.line_items) return <h2>Loading !!!</h2>
    // also serve as this : cart.line_items.length === 0;
    const isCartEmpty = !cart.line_items.length;

  return (
    <div>
        <Container>
            <Typography variant = "h5" >Your Shopping Cart</Typography>
            { isCartEmpty ? <EmptyCart /> : < FilledCart cartItems = {cart?.line_items}/>} 
        </Container>
    </div>
  )
}

export default Cart