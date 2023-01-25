import React , {useEffect, useState, useContext,useRef} from 'react'
import {ProductsContext} from '../context/products-context'
import { NavLink } from 'react-router-dom'
import DrawerMenu from '../components/DrawerMenu'
import Basket from '../components/Basket'
//style
import { Button } from '../styles'
import { LinkText, Nav , NavLogo , IconHolder} from '../styles/Navbar'
//icons
import {HiOutlineShoppingBag} from 'react-icons/hi'
//MUI
import { useTheme } from '@mui/system'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import Popover from '@mui/material/Popover';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Box } from '@mui/material'

const Navbar = (props) => {

  const theme = useTheme()
  const basketProd = useContext(ProductsContext).products.filter(p => p.isAddCart)
  
  //nav scroll
  const navBg = {
    fix:{
      backgroundColor: props.fixBg,
    },
    sticky:{
      backgroundColor: props.stickBg ,
      boxShadow: "rgb(90, 90, 90) 0 0 4px",
    }
  }
  const [navStyle,setNavStyle] = useState(navBg.fix)
  window.addEventListener("scroll", (event) => {
    window.scrollY < 73 ?
      setNavStyle(navBg.fix):
      setNavStyle(navBg.sticky)
  });

  //POPOVER
  useEffect(() => {
    const preventScrolling = e => e.preventDefault()
  
    window.addEventListener('scroll', preventScrolling);
    return () => window.removeEventListener('scroll', preventScrolling);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const containerRef = useRef();
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <header ref={containerRef}>
      <Nav style={navStyle}>
        <div>
          <NavLink style={{textDecoration: "none"}} to="/">
              <LinkText>Home</LinkText>
          </NavLink>
          <NavLink style={{textDecoration: "none"}} to="/shop/all">
              <LinkText>Shop</LinkText>
          </NavLink>
        </div>

        <NavLogo>
          Pars Flower
        </NavLogo>

        <IconHolder>
            <Box onMouseEnter={handlePopoverOpen} onMouseLeave= {handlePopoverClose}>
              <Badge badgeContent={basketProd.length} color="hotPink">
                  <HiOutlineShoppingBag role="button"/>
              </Badge>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                container={containerRef.current}
                PaperProps={{
                  onMouseLeave: handlePopoverClose,
                  sx: {
                      pointerEvents: 'auto'
                  }
                }}
              >
                <Basket/>
                <Button className=' m-4'>View Cart</Button>
              </Popover>
            </Box>
          <DrawerMenu  />
        </IconHolder>

      </Nav>
    </header>
  )
}

export default Navbar