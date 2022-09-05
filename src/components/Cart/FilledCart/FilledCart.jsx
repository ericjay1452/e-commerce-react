import React from 'react'
import { Grid, Typography } from '@mui/material'


const FilledCart = ({cartItems}) => {

  return (
    <>
    <main>
      <Grid spacing = {3} container>
        {
          cartItems?.map( (item) =>{
            return (
            <Grid item xs ={12} sm = {4} key = {item.id}>
            <div>{item.name}</div>
            </Grid>)
          })
        }
      </Grid>

      <section>
        <Typography variant = "h4">
          subtotal : {cartItems?.price?.formatted_with_symbol}
        </Typography>

      </section>

    </main>
    </>
  )
}

export default FilledCart