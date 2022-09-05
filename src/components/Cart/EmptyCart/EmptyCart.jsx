import React from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../../CONST/Button'

const EmptyCart = () => {
  return (
    <>
    <Typography variant = "h6"> Your shopping Cart is empty !!!</Typography>
    <CustomButton type = "button"
    size = "large"
    color = "primary"
    ariaLabel={"add items to cart"}
    variant = {"fill"}
    >
     <Link to = "/">Add Product</Link>
    </CustomButton>
    </>
  )
}

export default EmptyCart