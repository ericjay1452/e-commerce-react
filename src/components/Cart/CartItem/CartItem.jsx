import React from 'react'
import { Typography,Card, Button, CardMedia, CardActions, CardContent } from '@mui/material'
import { CustomButton } from '../../../CONST/Button'

const CartItem = ({item, onUpdate, onRemoveFromCart}) => {
    console.log({item})
  return (
    <Card> 
     <CardMedia src={item?.image?.url} alt = "product" component={"img"} className = "max-width-full" height={"260"}/>

     <CardContent className = "flex justify-between items-center">
        <Typography variant = "h4">{item.name}</Typography>
        <Typography variant = "h4">{item.line_total.formatted_with_symbol}</Typography>
     </CardContent>

     <CardActions className = "p-4">
        <div className='flex justify-content items-center'>
            <CustomButton size= "small" 
            type={"button"} aria-label = "reduce-item from shopping cart" 
            color = "primary" variant={"contained"}
            onClick = {() => onUpdate(item.id, item.quantity -1)}
            > 
            - 
            </CustomButton>

            <Typography> {item.quantity} </Typography>

            <CustomButton size= "small" 
            type={"button"} aria-label = "add-item to shopping cart" 
            color = "primary" variant={"contained"}
            onClick={() => onUpdate(item.id, item.quantity + 1)}
            > 
            + 
            </CustomButton>
        </div>

         <div style = {{marginLeft : "auto"}}>
        <CustomButton size= "small" 
            type={"button"} aria-label = "remove all items from shopping cart" 
            color = "secondary" variant={"contained"}
            onClick={()=> onRemoveFromCart(item.id)}
            > 
            Clear Cart
            </CustomButton>
            </div>
     </CardActions>

    </Card>
  )
}

export default CartItem