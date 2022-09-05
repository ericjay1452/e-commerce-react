import React from 'react'
import { Menu, MenuItem, Typography,AppBar, Toolbar, IconButton, Badge, } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import Logo from "../../assets/kidsValueProp.png"
import { useLocation, Link } from 'react-router-dom'

const NavBar = ({totalCartLength}) => {
  return (
    <>
      <AppBar position='fixed'  color = "inherit">
        <Toolbar className = "flex justify-between">
            <Typography variant='h6' color= "inherit" className = "flex items-center" component={Link} to= "/">
                <div className='w-10 h-10 mr-2 rounded-full'>
                <img src = {Logo} alt = "logo" height="25px" className = "max-w-full block w-10 h-10" style={{borderRadius : "50%"}}/>
                </div>
               
              <span>E-commerce</span>
            </Typography>
            <div className='' />

            <div className= "">
              <IconButton aria-label='show cart items' color = "inherit" component={Link} to= "/cart">
               <Badge badgeContent = {totalCartLength} color = "secondary">
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