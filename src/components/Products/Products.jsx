import React from 'react'
import { Grid } from '@mui/material'
import {Product} from "../../components"


const products = [{
    id:1, name : "Nike", desc: "A very good and understanding shoe", price : "$150",
    id:2, name : "Nike", desc: "A very good and understanding shoe",price : "$150",
    id:3, name : "Nike", desc: "A very good and understanding shoe", price : "$150",
}]
const Products = () => {
  return (
    <main>
        <Grid container justifyContent={"center"} spacing={4}>
            {
                products.map( (product) =>(
                    <Grid item key={product.id} xs= {12} sm={6} md = {4} lg = {3}>
                      <Product product = {product}/>
                    </Grid>
                ))
            }
        </Grid>
    </main>
  )
}

export default Products