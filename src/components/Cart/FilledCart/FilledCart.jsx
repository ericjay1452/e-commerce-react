import React from 'react'
import { Grid, Typography } from '@mui/material'
import { CustomButton } from '../../../CONST/Button'
import {CartItem} from "../../../components"

const FilledCart = ({cartItems, cart, HandleEmptyCart, HandleCartUpdateQuant, HandleRemoveCartItem}) => {

  return (
    <>
    <main>
      <Grid spacing = {3} container>
        {
          cartItems?.map( (item) =>{
            return (
            <Grid item xs ={12} sm = {4} key = {item.id}>
            <CartItem item={item} onUpdate={HandleCartUpdateQuant} onRemoveFromCart={HandleRemoveCartItem}/>
            </Grid>)
          })
        }
      </Grid>

      <section className = "flex justify-between items-center pb-4">
        <Typography variant = "h4" color = "primary">
          subtotal : {cart?.subtotal?.formatted_with_symbol}
        </Typography>
            
            <div className = "flex p-2 justify-between">
              <CustomButton type = {"button"} 
              variant = {"contained"} 
              aria_label = {"empty cart button"} 
              color = {"primary"}
              size = {"large"}
              onClick = {HandleEmptyCart}
              >
                Empty Cart
              </CustomButton>

              <CustomButton type = "button" 
              variant = "contained" 
              aria-label = "Checkout button" 
              size = "large"
              >
                Checkout
              </CustomButton>

            </div>

      </section>

    </main>
    </>
  )
}

export default FilledCart