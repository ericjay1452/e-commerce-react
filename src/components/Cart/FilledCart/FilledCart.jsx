import React from 'react'
import { Grid, Typography, Button } from '@mui/material'


const FilledCart = ({cartItems}) => {
  return (
    <>
    <main style={{marginTop :" 5rem", background : "red"}}>
      <Grid spacing = {3} container>
        {
          cartItems?.map( (item) =>{
            return (
            <Grid item xs ={12} sm = {4} key = {item.id}>
            <div>{item.name}</div>
             <p>subtotal : {item.price.formatted_with_symbol}</p>
            </Grid>)
          })
        }
      </Grid>

      <section>
        <Typography variant = "h4" color = "primary">
          {console.log(cartItems)}
        </Typography>
            
            <div>
              <Button type = "button" 
              variaant = "contained" 
              aria-label = "emptycart button" 
              color = "secondary"
              size = "large">
                Empty Cart
              </Button>

              <Button type = "button" 
              variaant = "contained" 
              aria-label = "Checkout button" 
              color = "secondary"
              size = "large">
                Checkout
              </Button>

            </div>

      </section>

    </main>
    </>
  )
}

export default FilledCart