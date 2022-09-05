import React from 'react'
import { Container, Typography, Button, Grid } from '@mui/material'
import {EmptyCart, FilledCart } from "../../components"




const Cart = ({cart, HandleCartUpdateQuant, HandleRenoveCartItem , HandleEmptyCart}) => {
    if(!cart?.line_items) return <h2>Loading !!!</h2>

    // also serve as this : cart.line_items.length === 0;
    const isCartEmpty = !cart.line_items.length;

     console.log({cart})

  return (
    <div style={{background : "gray",marginTop : "5rem", width : "100%",}}>
        <Container>
            <Typography variant = "h5" gutterBottom>Your Shopping Cart</Typography>
            { isCartEmpty ? <EmptyCart HandleEmptyCart = {HandleEmptyCart}/> : < FilledCart cartItems={cart.line_items} cart = {cart}/>} 
        </Container>
    </div>
  )
}

export default Cart