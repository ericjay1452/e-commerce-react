import React from 'react'
import { Typography,Card, Button, CardMedia, CardActions, CardContent } from '@mui/material'

const CartItem = ({item}) => {
    console.log({item})
  return (
    <Card> 
     <CardMedia src={item?.image?.url} alt = "product" component={"img"} className = "max-width-full" height={"260"}/>
    </Card>
  )
}

export default CartItem