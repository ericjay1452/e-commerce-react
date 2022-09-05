import React from 'react'
import { Button } from '@mui/material'

export const CustomButton = ({children,type, aria_label,variant, size,className,color}) => {
  return (
    <Button type = {type} aria-label = {aria_label} variant = {variant} size = {size} color = {color} className = {className}>{children}</Button>
  )
}

