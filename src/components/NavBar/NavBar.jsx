import React from 'react'
import { Menu, MenuItem, Typography,AppBar, Toolbar, IconButton, Badge, } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import Logo from "../../assets/kidsValueProp.png"

const NavBar = () => {
  return (
    <>
      <AppBar position='fixed'  color = "inherit">
        <Toolbar className = "flex justify-between">
            <Typography variant='h6' color= "inherit" className = "flex items-center">
                <div className='w-10 h-10 mr-2 rounded-full'>
                <img src = {Logo} alt = "logo" height="25px" className = "max-w-full block w-10 h-10 full-rounded"/>
                </div>
               
              <span>E-commerce</span>
            </Typography>
            <div className='' />

            <div className= "">
              <IconButton aria-label='show cart items' color = "inherit">
               <Badge badgeContent = {2} color = "secondary">
                <ShoppingCart />
               </Badge>
              </IconButton>
            </div>

        </Toolbar>
        </AppBar>  
    </>
  )
}

export default NavBar