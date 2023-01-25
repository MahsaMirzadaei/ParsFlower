
import React,{useContext, useEffect, useState} from 'react'
import {ProductsContext} from '../context/products-context'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import {HiOutlineMenu} from 'react-icons/hi'
import logo from '../img/mainlogo.png'

export default function TemporaryDrawer() {
  const [right,setRight] = React.useState(false)
  const {products} = useContext(ProductsContext)
  const [addedProducts, setAddedProducts] = useState([])
  
  useEffect(()=>{
    const newAddedProducts = products.filter(p=> p.isAddCart === true)
    setAddedProducts([newAddedProducts])
  },[products])
  // console.log(addedProducts)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setRight({ ...right, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {addedProducts[0].map((p) => (
          <ListItem key={p.id} disablePadding>
            <ListItemButton>
              {p.name}
            </ListItemButton>
          </ListItem>
        ))} */}
        <Divider/>
        <img style={{width: "200px"}} src={logo} alt="Logo" />
      </List>
    </Box>
  );

  return (
    <div>
        <>
          <HiOutlineMenu onClick={toggleDrawer("right", true)}/>
          <Drawer
            anchor={"right"}
            open={right["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </>
    </div>
  );
}