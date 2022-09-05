import React from 'react'
import { Button } from '@mui/material'

export const CustomButton = ({children,type, ariaLabel,variant, size,className,color, sx}) => {
  return (
    <Button type = {type} aria-label = {ariaLabel} variant = {variant} size = {size} color = {color} className = {className}>{children}</Button>
  )
}

