import React from 'react'
import { Typography,Card, Button, CardMedia, CardActions, CardContent } from '@mui/material'

const CartItem = ({item}) => {
    console.log({item})
  return (
    <Card> 
     <CardMedia src={item?.image?.url} alt = "product" component={"img"} className = "max-width-full" height={"260"}/>

     <CardContent>
        <Typography variant = "h4">{item.name}</Typography>
        <Typography variant = "h4">{item.line_total.formatted_with_symbol}</Typography>
     </CardContent>
    </Card>
  )
}

export default CartItem